const cleanup = require('../lib/cleanup')
const User = require('../models/User')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Insert a new person name Peter Bynum with two pet DOGs named Rocco & Rosey
  const Peter = await User.query().insertGraph({
    firstName: 'Peter',
    lastName: 'Bynum',
    email: 'peter@bynum.com',
    age: '40',
    pets: [{type: 'DOG', name: 'Rocco'}, {type: 'DOG', name: 'Rosey'}]
  })

  // -----
  cleanup()
}

run()
