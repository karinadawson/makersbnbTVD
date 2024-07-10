from dotenv import load_dotenv
import os

load_dotenv()

class ApplicationConfig:

    secret_key = os.environ["secret_key"]

    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_ECHO = True
    SQLALCHEMY_DATABASE_URI = "postgresql://postgres:postgres@localhost/makers_bnb_database"