import os
from flask import Flask, request, session, redirect, url_for
from flask_cors import CORS

# Create a new Flask app
app = Flask(__name__)
app.secret_key = "TVDFlask!@"
cors = CORS(app, origins='*')

# == Your Routes Here ==

# == Example Code Below ==

# GET /emoji
# Returns a emojiy face
# Try it:
#   ; curl http://127.0.0.1:5001/emoji


@app.route('/login', methods=['POST'])
def user_login():
        data = request.json
        username = data['username']
        # password = data['password']
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

