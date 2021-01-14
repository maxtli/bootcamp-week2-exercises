const casual = require('casual')
const userData = require ('./users')

casual.define('post', () => ({
  ID: casual.uuid,
  UserID: casual.random_element(userData).id,
  LikeCount: casual.integer({from: 0, to: 100}),
  Text: casual.sentence
}))

const data = []

for (let i = 0; i < 20; ++i) {
  data.push(casual.post)
}

module.exports = data