const casual = require('casual')

casual.define('user', () => ({
  ID: casual.uuid,
  FirstName: casual.first_name,
  LastName: casual.last_name,
  DOB: casual.date(format='MM/DD/YYYY'),
  Password: casual.password,
  Email: casual.email,
  Bio: casual.description,
  CreateTime: casual.moment,
  UpdateTime: casual.moment,
}))

const userData = []

for (let i = 0; i < 20; ++i) {
  userData.push(casual.user)
}

module.exports = userData
