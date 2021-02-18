from flask import Flask
import requests

app = Flask(__name__)

@app.route('/')
def get_charators():
    # Store in response to database
     r = requests.get('https://rickandmortyapi.com/api/character/1,2,3,4,5')
     response = r.text
     return response


if __name__ == "__main__":
    app.run(debug=True)