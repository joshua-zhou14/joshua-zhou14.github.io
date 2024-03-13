from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:ktjz3824@localhost:5432/pictures'
db = SQLAlchemy(app)
CORS(app)

app.app_context().push()

class Event(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    url = db.Column(db.LargeBinary, nullable=False)
    type = db.Column(db.Integer)

    def __repr__(self):
        return f"Event: {self.name}"
    
    def __init__(self, name, type, url):
        self.name = name
        self.type = type
        self.url = url

def format_event(event):
    return {
        "name": event.name,
        "id": event.id, 
        "url" : event.url,
        "type": event.type
    }

@app.route('/')
def hello():
    return 'Hey!'

@app.route('/events', methods=['POST'])
def create_events():
    data = request.get_json()
    event = Event(name = data['name'], url = data['url'], type = data['type'])
    db.session.add(event)
    db.session.commit()
    return format_event(event)

#get all events
@app.route('/events', methods=['GET'])
def get_events():
    events = Event.query.order_by(Event.id.asc()).all()
    event_list = []
    for event in events:
        event_list.append(format_event(event))
    return {'events' : event_list}

#get single event
@app.route('/events/<id>', methods = ['GET'])
def get_event(id):
    event = Event.query.filter_by(id = id).one()
    formatted_event = format_event(event)
    return {'event' : formatted_event}

#delete an event
@app.route('/events/<id>', methods = ['DELETE'])
def delete_event(id):
    event = Event.query.filter_by(id=id).one()
    db.session.delete(event)
    db.session.commit()
    return f'Event deleted'

#edit an event
@app.route('/events/<id>', methods = ['PUT'])
def update_event(id):
    event = Event.query.filter_by(id=id)
    data = request.get_json()
    event.update(dict(name = data['name'], url = data['url'], type = data['type']))
    db.session.commit()
    return {'event': format_event(event.one())}

if __name__ == '__main__':
    app.run()