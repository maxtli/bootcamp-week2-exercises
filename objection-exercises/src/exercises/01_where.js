const cleanup = require('../lib/cleanup')
const User = require('../models/User')
const Pet = require('../models/Pet')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!
  // Get all users with a specific name (pick it from your database)
  const reg = await User.query().select().where('firstName', 'Reginald')
  console.log(reg)

  // Do the same with object notation
  const regObj = await User.query().select().where({firstName: 'Reginald'})
  console.log(regObj)

  // Get all DOGS and BIRDS
  const dogsAndBirds = await Pet.query().select().where({type: 'DOG'}).orWhere({type: 'BIRD'})
  console.log(dogsAndBirds)

  // -----
  cleanup()
}

run()
