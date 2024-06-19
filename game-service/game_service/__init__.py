from flask import Flask 
 
def create_app(): 
    app = Flask(__name__) 

    # Register the blueprints 
    from game_service.views.routes import api 
    app.register_blueprint(api) 

    return app