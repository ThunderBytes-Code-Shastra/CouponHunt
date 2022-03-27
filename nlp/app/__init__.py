from flask import Flask
from app.controller.nlp import blueprint

def create_app():
    app = Flask(__name__)
    app.config["MONGO_URI"] = "mongodb+srv://bankco:bankco2022@cluster0.3eyap.mongodb.net/mainDB?retryWrites=true&w=majority"
    app.register_blueprint(blueprint=blueprint)
    return app

