from typing import Optional

from fittrackee.exceptions import GenericException


class ActorNotFoundException(GenericException):
    def __init__(self, message: Optional[str] = None) -> None:
        super().__init__(
            status='error',
            message=f'Actor not found{ f": {message}" if message else ""}.',
        )


class DomainNotFoundException(GenericException):
    def __init__(self, domain: str) -> None:
        super().__init__(
            status='error',
            message=f"Domain '{domain}' not found.",
        )


class FederationDisabledException(GenericException):
    def __init__(self) -> None:
        super().__init__(
            status='error',
            message='Can not create activity, federation is disabled.',
        )


class InvalidSignatureException(GenericException):
    def __init__(self, message: Optional[str] = None) -> None:
        super().__init__(
            status='error',
            message=f'Invalid signature{f": {message}" if message else ""}.',
        )


class SenderNotFoundException(GenericException):
    def __init__(self) -> None:
        super().__init__(
            status='error',
            message='Sender not found.',
        )


class RemoteActorException(GenericException):
    def __init__(self, message: Optional[str] = None) -> None:
        super().__init__(
            status='error',
            message=(
                f'Invalid remote actor{ f": {message}" if message else ""}.'
            ),
        )


class UnsupportedActivityException(GenericException):
    def __init__(self, activity_type: str) -> None:
        super().__init__(
            status='error',
            message=f"Unsupported activity '{activity_type}'.",
        )
