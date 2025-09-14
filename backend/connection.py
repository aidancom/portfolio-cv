import pymongo, os
from dotenv import load_dotenv

load_dotenv()

conn = pymongo.MongoClient(os.getenv('DATABASE_URL'))
database = conn['portfolio']

column_skills = database['skills']
column_projects = database['projects']
column_visits = database['visits']

columns = database.list_collection_names()

