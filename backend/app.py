import email
import uvicorn
from typing import Dict
from userModel import User

from core import create_app

app = create_app()

users: Dict[str, User] = dict()
# user = User(email='email', password='password')

@app.get('/users')
def getEmail():
    return users.items()

@app.post('/login')
def addEmail(user: User):
    print('inside method')
    return 'Login successful'

@app.post('/signup')
def signupUser(user: User):
  users[user.email] = user
  return f'User {user.email} Created'

def main():
    uvicorn.run('app:app', host='localhost', port=5011, reload=True)


if __name__ == '__main__':
    main()