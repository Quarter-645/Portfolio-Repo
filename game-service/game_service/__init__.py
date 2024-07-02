from flask import Flask  # type: ignore
from flask_cors import CORS # type: ignore
from game_service.extensions.LimiterExtension import limiter
 
def create_app(): 
    app = Flask(__name__) 
    CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})

    # Initialize limiter with the app
    limiter.init_app(app)
    
    # Register the blueprints 
    from game_service.views.routes import api 
    app.register_blueprint(api) 

    return app