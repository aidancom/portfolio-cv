from flask import Flask, jsonify, request
from flask_cors import CORS
from connection import column_skills, column_projects, column_visits, columns

app = Flask(__name__)
CORS(app)

@app.route('/api/getData', methods=['POST'])
def get_data():
  type = request.get_json()
  match(type['type']):
    case 'skills':
      skills = list(column_skills.find({}, {'_id': 0}))
      return jsonify(skills)
    case 'projects':
      projects = list(column_projects.find({}, {'_id': 0}))
      return jsonify(projects)
    
  return 200

@app.route('/api/sendVisitor')
def send_visit():
  data = {
    'id': '1234567890',
    'visits': 0
  }

  if 'visits' in columns:
    column_visits.update_one({'id': '1234567890'}, {'$inc': {'visits': 1}})
  else:
    column_visits.insert_one(data)

  return jsonify({'status': 'success'})

  

if __name__ == "__main__":
  app.run(debug=True, port=5000)