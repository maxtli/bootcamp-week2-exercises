const casual = require('casual')
const userData = require ('./users')

casual.define('friend', () => ({
  ID: casual.uuid,
  RequestUser: casual.random_element(userData).id,
  LastName: casual.random_element(userData).id,
  RequestTime: casual.moment,
  ConfirmTime: casual.moment,
  Status: ['Pending', 'Confirmed', 'Rejected'][casual.integer({from: 0, to: 2})]
}))

const data = []

for (let i = 0; i < 20; ++i) {
  data.push(casual.friend)
}

module.exports = data
