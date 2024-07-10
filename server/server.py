import os
from flask import Flask, request, session, redirect, url_for, jsonify
from flask_cors import CORS
from flask_bcrypt import Bcrypt
# from flask_session import Session
from config import ApplicationConfig
from lib.models.user import db, User

# Create a new Flask app
app = Flask(__name__)
app.secret_key="TVDFlask!@"
app.config.from_object(ApplicationConfig)

bcrypt = Bcrypt(app)
cors = CORS(app, origins='*')
# server_session = Session(app)

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
        
        hashed_password = bcrypt.generate_password_hash(password)
        new_user = User(username=username, password=hashed_password)
        # print(new_user)

        
        db.session.add(new_user)
        db.session.commit()

        # Logged in user session
        session["user"] = username

        return {"success": "new user registered"}





@app.route('/login', methods=['POST'])
def user_login():
        data = request.json
        username = data['username']
        password = data['password']
        session["user"] = username
        return  {"success": "true"}



@app.route('/user', methods=['GET'])
def get_user():
    if "user" in session:
        user = session["user"]
        return user
    else:
        if "user" in session:
            return redirect(url_for("get_user"))
        return redirect(url_for("user_login"))
    
@app.route('/logout', methods=['GET'])
def logout():
    session.pop("user", None)
    return redirect(url_for("user_login"))


if __name__ == '__main__':
    app.run(debug=True, port=int(os.environ.get('PORT', 5002)))

