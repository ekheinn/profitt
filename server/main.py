from flask import Flask, jsonify
from fordev.generators import people
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/people', methods=['GET'])
def get_people():
    people_array = people(n=10)

    result = [
        {
            'nome': person['nome'],
            'cpf': person['cpf']
        }
        for person in people_array
    ]

    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
