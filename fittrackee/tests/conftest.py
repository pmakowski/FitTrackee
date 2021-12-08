import os
from typing import Iterator
from unittest.mock import patch
from uuid import uuid4

import pytest

os.environ['FLASK_ENV'] = 'testing'
os.environ['APP_SETTINGS'] = 'fittrackee.config.TestingConfig'
# to avoid resetting dev database during tests
os.environ['DATABASE_URL'] = os.environ['DATABASE_TEST_URL']

pytest_plugins = [
    'fittrackee.tests.fixtures.fixtures_app',
    'fittrackee.tests.fixtures.fixtures_federation',
    'fittrackee.tests.fixtures.fixtures_federation_users',
    'fittrackee.tests.fixtures.fixtures_workouts',
    'fittrackee.tests.fixtures.fixtures_users',
]


@pytest.fixture(autouse=True)
def default_generate_keys_fixture(
    request: pytest.FixtureRequest,
) -> Iterator[None]:
    if 'disable_autouse_generate_keys' in request.keywords:
        yield
    else:
        with patch(
            'fittrackee.federation.models.generate_keys'
        ) as generate_keys_mock:
            generate_keys_mock.return_value = (uuid4().hex, uuid4().hex)
            yield
