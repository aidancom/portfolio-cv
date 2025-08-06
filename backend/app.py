from flask import Flask, jsonify
from flask_cors import CORS
from connection import column_skills, column_projects

app = Flask(__name__)
CORS(app, origins=["http://localhost:5173"])

@app.route('/api/getSkills')
def get_skills():
  return jsonify({'skill': 'React', 'level': 10})

if __name__ == "__main__":
  app.run(debug=True, port=5000)