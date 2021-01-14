const cleanup = require('../lib/cleanup')
const User = require('../models/User')
const Pet = require('../models/Pet')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Insert yourself in the users table
  const me = await User.query.insert({
    firstName: 'Max',
    lastName: 'Li',
    email: 'maxtli068@gmail.com',
    age: '18'
  }).returning('*')
  console.log(me)

  // Insert a pet belonging to you (get your ID from Postico or DBeaver)
  const meId = await User.query.select('id').where({
    firstName: 'Max',
    lastName: 'Li',
    email: 'maxtli068@gmail.com',
    age: '18'
  }).first().id
  const pet = Pet.query.insert({
    ownerId: meId,
    type: 'FISH',
    name: 'Big Tuna'
  }).returning('*')
  console.log(pet)
  // -----
  cleanup()
}

run()
