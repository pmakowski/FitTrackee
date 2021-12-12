from dataclasses import dataclass
from datetime import datetime
from json import dumps, loads
from typing import Dict, Optional, Union
from uuid import uuid4

from flask import json as flask_json
from requests import Response

from fittrackee import db
from fittrackee.federation.signature import VALID_DATE_FORMAT
from fittrackee.users.models import FollowRequest, User


def random_uuid() -> str:
    return uuid4().hex


def random_string(
    prefix: Optional[str] = None, suffix: Optional[str] = None
) -> str:
    return (
        f'{"" if prefix is None else prefix}'
        f'{random_uuid()}'
        f'{"" if suffix is None else suffix}'
    )


def random_domain_with_scheme() -> str:
    return random_string(prefix='https://', suffix='.social')


def random_domain() -> str:
    return random_string(suffix='.social')


def get_date_string(date: Optional[datetime] = None) -> str:
    date = date if date else datetime.utcnow()
    return date.strftime(VALID_DATE_FORMAT)


def get_remote_user_object(
    username: str,
    preferred_username: str,
    domain: str,
    profile_url: Optional[str] = None,
    manually_approves_followers: bool = True,
) -> Dict:
    user_url = f'{domain}/users/{preferred_username}'
    user_object = {
        '@context': [
            'https://www.w3.org/ns/activitystreams',
            'https://w3id.org/security/v1',
        ],
        'id': user_url,
        'type': 'Person',
        'following': f'{user_url}/following',
        'followers': f'{user_url}/followers',
        'inbox': f'{user_url}/inbox',
        'outbox': f'{user_url}/outbox',
        'name': username,
        'preferredUsername': preferred_username,
        'manuallyApprovesFollowers': manually_approves_followers,
        'publicKey': {
            'id': f'{user_url}#main-key',
            'owner': user_url,
            'publicKeyPem': random_string(),
        },
        'endpoints': {'sharedInbox': f'{domain}/inbox'},
    }
    if profile_url:
        user_object['url'] = profile_url
    return user_object


@dataclass
class RandomActor:
    name: str = random_string()
    preferred_username: str = random_string()
    domain: str = random_domain_with_scheme()
    manually_approves_followers: bool = True

    @property
    def fullname(self) -> str:
        return (
            f'{self.preferred_username}@{self.domain.replace("https://", "")}'
        )

    @property
    def activitypub_id(self) -> str:
        return f'{self.domain}/users/{self.preferred_username}'

    @property
    def profile_url(self) -> str:
        return f'{self.domain}/{self.preferred_username}'

    def get_remote_user_object(self) -> Dict:
        return get_remote_user_object(
            self.name,
            self.preferred_username,
            self.domain,
            self.profile_url,
            self.manually_approves_followers,
        )


def generate_response(
    content: Optional[Union[str, Dict]] = None,
    status_code: Optional[int] = None,
) -> Response:
    content = content if content else {}
    response = Response()
    response._content = (
        dumps(content).encode()
        if isinstance(content, dict)
        else content.encode()
    )
    response.status_code = status_code if status_code else 200
    return response


def random_actor_url(
    username: Optional[str] = None, domain_with_scheme: Optional[str] = None
) -> str:
    username = username if username else random_string()
    remote_domain = (
        domain_with_scheme
        if domain_with_scheme
        else random_domain_with_scheme()
    )
    return f'{remote_domain}/users/{username}'


def generate_follow_request(follower: User, followed: User) -> FollowRequest:
    follow_request = FollowRequest(
        follower_user_id=follower.id, followed_user_id=followed.id
    )
    db.session.add(follow_request)
    db.session.commit()
    return follow_request


def jsonify_dict(data: Dict) -> Dict:
    return loads(flask_json.dumps(data))
