import os
from flask import Flask, request, session, redirect, url_for, jsonify
from flask_cors import CORS
from flask_bcrypt import Bcrypt
# from flask_session import Session
from config import ApplicationConfig
from lib.models.user import db, User
from lib.models.space import Space

# Create a new Flask app
app = Flask(__name__)
app.secret_key="TVDFlask!@"
app.config.from_object(ApplicationConfig)

bcrypt = Bcrypt(app)
cors = CORS(app, origins='*')
# server_session = session(app)

db.init_app(app)

with app.app_context():
    db.create_all()



@app.route('/me', methods = ['GET'])
def get_current_user():
     user_id = session.get("user_id")

     if not user_id:
          return jsonify({"error": "Unauthorised"}), 401
     
     user = User.query.filter_by(id=user_id).first()
     return jsonify({
          "id": user.id,
          "username": user.username
     })
     



@app.route('/register', methods=['POST'])
def user_register():
      
        username = request.json['username']
        password = request.json['password']


        user_exists = User.query.filter_by(username=username).first() is not None
       
        if user_exists:
             return jsonify({"error": "User already exists"}), 409
        
        hashed_password = bcrypt.generate_password_hash(password).decode("utf-8")
        new_user = User(username=username, password=hashed_password)
        # print(new_user)

        
        db.session.add(new_user)
        db.session.commit()

        # Logged in user session
        session["user"] = username

        return jsonify({
          "id": new_user.id,
          "username": new_user.username
     })





@app.route('/login', methods=['POST'])
def user_login():
        # Following lines are accessing json data following input submission so that we can process them
        username = request.json['username']
        password = request.json['password'].encode("utf-8")
        user = User.query.filter_by(username = username).first()

        if user is None:
             return jsonify({"Error": "User could not be found."}), 404
        
        if not bcrypt.check_password_hash(user.password, password):
             return jsonify({"Error": "Password incorrect"}), 401
        
        # below refs the cookie session/browser session/server-side authorisation
        session["user"] = username
        
        return jsonify({
             "id": user.id, 
             "username": user.username
        })


    
@app.route('/logout', methods=['GET'])
def user_logout():
    session.pop("user", None)
    return jsonify({
             "message": "Logout Successful" 
        })


@app.route('/add-space', methods = ['POST'])
def add_space():
             
        place_name = request.json['place_name']
        location = request.json['location']
        description = request.json['description']
        price = request.json['price']


        # user_exists = User.query.filter_by(username=username).first() is not None
       
        # if user_exists:
        #      return jsonify({"error": "User already exists"}), 409
        
        # hashed_password = bcrypt.generate_password_hash(password).decode("utf-8")
        new_space = Space(place_name=place_name, location=location, description=description, price=price)
        # print(new_user)

        
        db.session.add(new_space)
        db.session.commit()

        # Logged in user session
        # session["user"] = username

        return jsonify({
          "id": new_space.id,
          "place_name": new_space.place_name
     })

@app.route('/spaces', methods = ['GET'])
def fetch_spaces():
      pass
     


if __name__ == '__main__':
    app.run(debug=True, port=int(os.environ.get('PORT', 5002)))

