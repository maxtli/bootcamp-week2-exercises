const casual = require('casual')
const userData = require('./users')
const postData = require('./posts')

casual.define('like', () => ({
    ID: casual.uuid,
    UserID: casual.random_element(userData).id,
    PostID: casual.random_element(postData).id,
    CreateTime: casual.moment
}))

const data = []

for(let i = 0; i<20; i++)
    data.push(casual.like)

module.exports = data