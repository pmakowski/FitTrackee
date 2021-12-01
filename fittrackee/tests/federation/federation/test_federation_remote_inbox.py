from datetime import datetime
from json import dumps
from unittest.mock import Mock, patch
from urllib.parse import urlparse

from _pytest.logging import LogCaptureFixture
from flask import Flask
from freezegun import freeze_time

from fittrackee.federation.inbox import send_to_remote_user_inbox
from fittrackee.federation.models import Actor

from ...test_case_mixins import BaseTestMixin
from ...utils import generate_response, get_date_string, random_string


class TestSendToRemoteInbox(BaseTestMixin):
    @patch('fittrackee.federation.inbox.signature_header')
    @patch('fittrackee.federation.inbox.requests')
    def test_it_calls_signature_header(
        self,
        requests_mock: Mock,
        signature_header_mock: Mock,
        app_with_federation: Flask,
        actor_1: Actor,
        remote_actor: Actor,
    ) -> None:
        now = datetime.utcnow()
        parsed_inbox_url = urlparse(remote_actor.inbox_url)
        requests_mock.post.return_value = generate_response(status_code=200)

        with freeze_time(now):
            send_to_remote_user_inbox(
                sender=actor_1,
                activity={'foo': 'bar'},
                recipient_inbox_url=remote_actor.inbox_url,
            )

        signature_header_mock.assert_called_with(
            host=parsed_inbox_url.netloc,
            path=parsed_inbox_url.path,
            date_str=get_date_string(now),
            actor=actor_1,
        )

    @patch('fittrackee.federation.inbox.signature_header')
    @patch('fittrackee.federation.inbox.requests')
    def test_it_calls_requests_post(
        self,
        requests_mock: Mock,
        signature_header_mock: Mock,
        app_with_federation: Flask,
        actor_1: Actor,
        remote_actor: Actor,
    ) -> None:
        activity = {'foo': 'bar'}
        now = datetime.utcnow()
        parsed_inbox_url = urlparse(remote_actor.inbox_url)
        requests_mock.post.return_value = generate_response(status_code=200)
        signed_header = random_string()
        signature_header_mock.return_value = signed_header

        with freeze_time(now):
            send_to_remote_user_inbox(
                sender=actor_1,
                activity=activity,
                recipient_inbox_url=remote_actor.inbox_url,
            )

        requests_mock.post.assert_called_with(
            remote_actor.inbox_url,
            data=dumps(activity),
            headers={
                "Host": parsed_inbox_url.netloc,
                "Date": get_date_string(now),
                "Signature": signed_header,
                "Content-Type": "application/ld+json",
            },
        )

    @patch('fittrackee.federation.inbox.signature_header')
    @patch('fittrackee.federation.inbox.requests')
    def test_it_logs_error_if_remote_inbox_returns_error(
        self,
        requests_mock: Mock,
        signature_header_mock: Mock,
        app_with_federation: Flask,
        actor_1: Actor,
        remote_actor: Actor,
        caplog: LogCaptureFixture,
    ) -> None:
        status_code = 404
        content = 'error'
        requests_mock.post.return_value = generate_response(
            status_code=status_code, content=content
        )

        send_to_remote_user_inbox(
            sender=actor_1,
            activity={'foo': 'bar'},
            recipient_inbox_url=remote_actor.inbox_url,
        )

        assert len(caplog.records) == 1
        assert caplog.records[0].levelname == 'ERROR'
        assert caplog.records[0].message == (
            f"Error when send to user inbox '{remote_actor.inbox_url}', "
            f"status code: {status_code}, "
            f"content: {content}"
        )
