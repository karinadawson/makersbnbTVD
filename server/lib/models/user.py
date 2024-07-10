from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.dialects.postgresql import UUID
from uuid import uuid4


db = SQLAlchemy()

def get_uuid():
    return uuid4().hex

class User(db.Model):

    def __init__(self, username, password):
        self.username = username
        self.password = password

    __tablename__ = "users"
    # id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    id = db.Column(db.Integer, primary_key=True, unique=True)
    username = db.Column(db.String(345), unique=True)
    password = db.Column(db.Text, nullable=False)