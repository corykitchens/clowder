from flask import Flask, jsonify, request
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

cat_facts = [
  {
    'id': 1,
    'breed': 'Russian Blue',
    'fact': 'The Russian Blue sports a short coat, while the Nebelungs coat is covered with semi-long soft and silky hair; it also has a dense undercoat',
    'photo': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Cat_Janna.jpg/440px-Cat_Janna.jpg'

  },
  {
    'id': 2,
    'breed': 'Persian',
    'fact': 'The Persian is usually a medium sized cat, although she is massive and heavily boned',
    'photo': 'https://upload.wikimedia.org/wikipedia/commons/0/02/Brown_Exotic_Shorthair_Kitten.jpg'
  },
  {
    'id': 3,
    'breed': 'Siamese',
    'fact': 'There are two very distinct types of Siamese that fanciers typically class as show Siamese and traditional Siamese',
    'photo': 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Modern_Seal_Point_Female.jpg'
  },
  {
    'id': 4,
    'breed': 'Scottish Fold',
    'fact': 'Scottish folds can be found with long or short hair and in a variety of fur colors and patterns',
    'photo': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Sweetie_Scottish_fold.jpg/1600px-Sweetie_Scottish_fold.jpg'
  },
  {
    'id': 5,
    'breed': 'British Shorthair',
    'fact': 'The British Shorthair regained its well-regarded position, and remains today a common fixture of the British home',
    'photo': 'https://upload.wikimedia.org/wikipedia/commons/1/15/Britskorthaar-64091287828362D7bA.jpg'
  },
  {
    'id': 6,
    'breed': 'Maine Coon',
    'fact': 'The Maine coons closest relative may be the Norwegian forest cat, lending credence to the theory that the first coon cats came to Maine on Viking ships',
    'photo': 'https://upload.wikimedia.org/wikipedia/commons/0/05/Lulu_-_A_typical_Maine_Coon_cat.jpg'
  }
]

def get_cat_by_id(id):
  for d in cat_facts:
    if d['id'] == id:
      return d
  return { 'id': -1 }

def delete_cat_by_id(cat_id):
  for d in cat_facts:
    if d['id'] == cat_id:
      idx = cat_facts.index(d)
      cat_facts.pop(idx)
      return True
  return False

def get_api_docs():
  return {
    '/api/catfacts': {
      'methods': ['GET', 'POST'],
      'GET': 'Get all Catfacts',
      'POST': 'Create New Cat Fact'
    },
    '/api/catfacts/<catfactid>': {
      'methods': ['GET', 'PUT', 'DELETE'],
      'GET': 'Get Cat Fact by ID',
      'PUT': 'Update Cat Fact',
      'DELETE': 'Delete Cat Fact'
    }
  }

'''
Routes
'''
@app.route('/', methods=['GET'])
def root():
  return jsonify({ 'api_docs': get_api_docs() })

@app.route('/api/', methods=['GET'])
def get_api():
  return jsonify({ 'api_docs': get_api_docs() })

# GET ALL CATS
@app.route('/api/catfacts', methods=['GET'])
def get_all_cat_facts():
  return jsonify(cat_facts)

# CREATE CAT
@app.route('/', methods=['POST'])
def create_cat():
  print(request)
  return jsonify({ 'message': 'Create new cat' })

# GET ONE CAT
@app.route('/<int:cat_id>', methods=['GET'])
def get_one_cat(cat_id):
  found_cat = get_cat_by_id(cat_id)
  if found_cat['id'] != -1:
    print(cat_facts)
    return jsonify(found_cat)
  else:
    return jsonify({'message': 'Cat Not found'})

# UPDATE CAT
@app.route('/<int:cat_id>', methods=['PUT'])
def update_cat(cat_id):
  return jsonify({'message': 'Update cat'})

# DELETE CAT
@app.route('/<int:cat_id>', methods=['DELETE'])
def delete_cat(cat_id):
  if delete_cat_by_id(cat_id):
    print(cat_facts)
    return jsonify({'message': 'Cat Deleted'})
  else:
    return jsonify({'message': 'Cat Not found'})


if __name__=="__main__":
  app.run(host='0.0.0.0', port=5000)
