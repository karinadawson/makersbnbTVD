import os
from flask import Flask, request
from flask_cors import CORS

# Create a new Flask app
app = Flask(__name__)
cors = CORS(app, origins='*')

# == Your Routes Here ==

# == Example Code Below ==

# GET /emoji
# Returns a emojiy face
# Try it:
#   ; curl http://127.0.0.1:5001/emoji
@app.route('/', methods=['GET'])
def get_we_are_here():
    return "We are here!"

@app.route('/emoji', methods=['GET'])
def gimme_emoji():
    return ":D"



if __name__ == '__main__':
    app.run(debug=True, port=int(os.environ.get('PORT', 5001)))

