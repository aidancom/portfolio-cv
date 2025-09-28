import datetime
import requests

from flask import Flask, jsonify, request
from flask_cors import CORS
from connection import column_skills, column_projects, column_visits, columns


app = Flask(__name__)
CORS(app)

def get_ip_details(ip):
  try:
    url = f"https://ipwho.is/{ip}/"
    res = requests.get(url)

    if res.status_code != 200:
      return {}
    
    data = res.json()
    if not data.get("success", True):
        return {}
    
    return data
  except (requests.exceptions.RequestException, ValueError):
    return {}
  

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
  ip = get_client_ip(request)
  ip_details = get_ip_details(ip) or {}

  visitor = column_visits.find_one({"ip": ip})
  
  if ip == "127.0.0.1":
    return jsonify({'status': 'error'})
  else:
    if visitor:
      try:
        column_visits.update_one({"ip": ip}, {"$inc": {"visits": 1}})
        return jsonify({'status': 'success'})
      except Exception as e:
        return jsonify({'status': 'error', 'message': e})
    else:
      try:
        data = {
          'ip': ip,
          'continent': ip_details["continent"],           
          'country': ip_details["country"],
          'city': ip_details["city"],      
          'date': f'{date.strftime("%d")}/{date.strftime("%m")}/{date.strftime("%Y")}',
          'hour': f'{date.strftime("%H")}:{date.strftime("%M")}',
          'visits': 1
        }

        column_visits.insert_one(data)
        return jsonify({'status': 'success'})
      except Exception as e:
        return jsonify({'status': 'error', 'message': e})

  
if __name__ == "__main__":
  app.run(host="0.0.0.0", port=5000)