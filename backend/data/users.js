import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@macopolo.com',
    password: bcrypt.hashSync('admin123', 10),
    isAdmin: true
  },
  {
    name: 'John Doe',
    email: 'john@macopolo.com',
    password: bcrypt.hashSync('123456', 10)
  },
  {
    name: 'Jane Doe',
    email: 'jane@macopolo.com',
    password: bcrypt.hashSync('123456', 10)
  },
  {
    name: 'Tester Test',
    email: 'test@macopolo.com',
    password: bcrypt.hashSync('123456', 10)
  }
]

export default users
