from flask import Flask, render_template,request
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI']='postgresql://postgres:password@localhost/currency '
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db=SQLAlchemy(app)
app.app_context().push()

class cf(db.Model):
  __tablename__='users'
  username=db.Column(db.String(80),primary_key=True)
  password=db.Column(db.String(120))
  
  def __init__(self,username,password):
    self.username=username
    self.password=generate_password_hash(password)

@app.route('/')
def login():
  return render_template('login.html')

@app.route('/submit', methods=['GET','POST'])
def submit():
  username= request.form['username']
  password=request.form['password']
  
  var=cf(username,password)
  db.session.add(var)
  db.session.commit()


  varResult=db.session.query(cf).filter(cf.username==username)
  for result in varResult:
    print(result.username)

  return render_template('index.html', data=username)


if __name__ == '__main__':
  app.run(debug=True)
