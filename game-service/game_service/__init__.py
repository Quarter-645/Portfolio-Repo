from flask import Flask  # type: ignore
from flask_cors import CORS # type: ignore
 
def create_app(): 
    app = Flask(__name__) 
    CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})

    # Register the blueprints 
    from game_service.views.routes import api 
    app.register_blueprint(api) 

    return app