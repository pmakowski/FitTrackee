from flask import Flask

from fittrackee.federation.models import Actor
from fittrackee.users.models import FollowRequest


class TestFollowRequestModelWithFederation:
    def test_follow_request_model(
        self,
        app_with_federation: Flask,
        actor_1: Actor,
        actor_2: Actor,
        follow_request_from_user_1_to_user_2_with_federation: FollowRequest,
    ) -> None:
        assert '<FollowRequest from user \'1\' to user \'2\'>' == str(
            follow_request_from_user_1_to_user_2_with_federation
        )

        serialized_follow_request = (
            follow_request_from_user_1_to_user_2_with_federation.serialize()
        )
        assert serialized_follow_request['from_user'] == actor_1.serialize()
        assert serialized_follow_request['to_user'] == actor_2.serialize()
