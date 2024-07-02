from flask_limiter import Limiter
from flask_limiter.util import get_remote_address

limiter = Limiter(
    key_func=get_remote_address,
    default_limits=["240 per day", "60 per hour"],
    storage_uri="memory://"
)
