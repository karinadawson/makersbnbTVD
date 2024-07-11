from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.dialects.postgresql import UUID
from uuid import uuid4


db = SQLAlchemy()

def get_uuid():
    return uuid4().hex

class Space(db.Model):

    def __init__(self, place_name, location, description, price):
        self.place_name = place_name
        self.location = location
        self.description = description
        self.price = price

    __tablename__ = "spaces"
    # id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    id = db.Column(db.Integer, primary_key=True, unique=True)
    place_name = db.Column(db.String(345), nullable=False)
    location = db.Column(db.Text, nullable=False)
    description = db.Column(db.Text, nullable=False)
    price = db.Column(db.Integer, nullable=False)

    def __repr__(self):
        return f"Space({self.place_name}, {self.location}, {self.description}, {self.price})"