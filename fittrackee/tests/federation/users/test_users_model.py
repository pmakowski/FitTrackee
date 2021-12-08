from datetime import datetime
from unittest.mock import Mock, patch

from flask import Flask

from fittrackee.federation.constants import AP_CTX
from fittrackee.users.models import FollowRequest, User


class TestFollowRequestModelWithFederation:
    def test_follow_request_model(
        self,
        app_with_federation: Flask,
        user_1: User,
        user_2: User,
        follow_request_from_user_1_to_user_2: FollowRequest,
    ) -> None:
        actor_1 = user_1.actor
        actor_2 = user_2.actor
        assert '<FollowRequest from user \'1\' to user \'2\'>' == str(
            follow_request_from_user_1_to_user_2
        )

        serialized_follow_request = (
            follow_request_from_user_1_to_user_2.serialize()
        )
        assert serialized_follow_request['from_user'] == actor_1.serialize()
        assert serialized_follow_request['to_user'] == actor_2.serialize()

    def test_it_returns_follow_activity_object(
        self,
        app_with_federation: Flask,
        user_1: User,
        user_2: User,
        follow_request_from_user_1_to_user_2: FollowRequest,
    ) -> None:
        actor_1 = user_1.actor
        actor_2 = user_2.actor
        activity_object = follow_request_from_user_1_to_user_2.get_activity()

        assert activity_object == {
            '@context': AP_CTX,
            'id': f'{actor_1.activitypub_id}#follows/{actor_2.fullname}',
            'type': 'Follow',
            'actor': actor_1.activitypub_id,
            'object': actor_2.activitypub_id,
        }

    def test_it_returns_accept_activity_object_when_follow_request_is_accepted(
        self,
        app_with_federation: Flask,
        user_1: User,
        user_2: User,
        follow_request_from_user_1_to_user_2: FollowRequest,
    ) -> None:
        actor_1 = user_1.actor
        actor_2 = user_2.actor
        follow_request_from_user_1_to_user_2.is_approved = True
        follow_request_from_user_1_to_user_2.updated_at = datetime.utcnow()
        activity_object = follow_request_from_user_1_to_user_2.get_activity()

        assert activity_object == {
            '@context': AP_CTX,
            'id': (
                f'{actor_2.activitypub_id}#accepts/follow/{actor_1.fullname}'
            ),
            'type': 'Accept',
            'actor': actor_2.activitypub_id,
            'object': {
                'id': f'{actor_1.activitypub_id}#follows/{actor_2.fullname}',
                'type': 'Follow',
                'actor': actor_1.activitypub_id,
                'object': actor_2.activitypub_id,
            },
        }

    def test_it_returns_reject_activity_object_when_follow_request_is_rejected(
        self,
        app_with_federation: Flask,
        user_1: User,
        user_2: User,
        follow_request_from_user_1_to_user_2: FollowRequest,
    ) -> None:
        actor_1 = user_1.actor
        actor_2 = user_2.actor
        follow_request_from_user_1_to_user_2.is_approved = False
        follow_request_from_user_1_to_user_2.updated_at = datetime.utcnow()
        activity_object = follow_request_from_user_1_to_user_2.get_activity()

        assert activity_object == {
            '@context': AP_CTX,
            'id': (
                f'{actor_2.activitypub_id}#rejects/follow/{actor_1.fullname}'
            ),
            'type': 'Reject',
            'actor': actor_2.activitypub_id,
            'object': {
                'id': f'{actor_1.activitypub_id}#follows/{actor_2.fullname}',
                'type': 'Follow',
                'actor': actor_1.activitypub_id,
                'object': actor_2.activitypub_id,
            },
        }


class TestUserFollowingModelWithFederation:
    @patch('fittrackee.users.models.send_to_users_inbox')
    def test_local_actor_sends_follow_requests_to_remote_actor(
        self,
        send_to_users_inbox_mock: Mock,
        app_with_federation: Flask,
        user_1: User,
        remote_user: User,
    ) -> None:
        actor_1 = user_1.actor
        remote_actor = remote_user.actor
        follow_request = actor_1.user.send_follow_request_to(remote_actor.user)

        assert follow_request in actor_1.user.sent_follow_requests.all()
        assert follow_request.is_approved is False
        assert follow_request.updated_at is None
        send_to_users_inbox_mock.send.assert_called_with(
            sender_id=actor_1.id,
            activity=follow_request.get_activity(),
            recipients=[remote_actor.inbox_url],
        )

    @patch('fittrackee.users.models.send_to_users_inbox')
    def test_follow_request_is_automatically_accepted_if_manually_approved_if_false(  # noqa
        self,
        send_to_users_inbox_mock: Mock,
        app_with_federation: Flask,
        user_1: User,
        remote_user: User,
    ) -> None:
        actor_1 = user_1.actor
        actor_1.user.manually_approves_followers = False
        remote_actor = remote_user.actor
        follow_request = remote_actor.user.send_follow_request_to(actor_1.user)

        assert follow_request in remote_actor.user.sent_follow_requests.all()
        assert follow_request.is_approved is True
        assert follow_request.updated_at is not None
        send_to_users_inbox_mock.send.assert_called_with(
            sender_id=actor_1.id,
            activity=follow_request.get_activity(),
            recipients=[remote_actor.inbox_url],
        )
