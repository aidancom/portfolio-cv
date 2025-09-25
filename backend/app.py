import datetime

from flask import Flask, jsonify, request
from flask_cors import CORS
from connection import column_skills, column_projects, column_visits, columns


app = Flask(__name__)
CORS(app)

def get_client_ip(request):
    xff = request.headers.get('X-Forwarded-For', '')
    if xff:
        return xff.split(',')[0].strip()
    cf = request.headers.get('CF-Connecting-IP')
    if cf:
        return cf.strip()
    return request.remote_addr

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

  date = datetime.datetime.now()

  data = {
    'date': f'{date.strftime("%d")}/{date.strftime("%m")}/{date.strftime("%Y")}',
    'hour': f'{date.strftime("%H")}:{date.strftime("%M")}',
    'ip': get_client_ip(request)
  }

  column_visits.insert_one(data)

  return jsonify({'status': 'success'})

  

if __name__ == "__main__":
  app.run(debug=True, port=5000)