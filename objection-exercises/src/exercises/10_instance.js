const cleanup = require('../lib/cleanup')
const User = require('../models/User')
const Pet = require('../models/Pet')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get an instance of a user using findById(<YOUR_ID>)
  const q = await User.query().findById('170a9d55-8812-4d89-9378-ffadcacf01e7');
  // Use that instance to create a new pet related that user
  q.$relatedQuery('pets').insert({type: 'DOG', name: 'Doge'}).returning('*')
  // Use that instance to get all of the user's pets and children
  // Hint -- use $fetchGraph
  // https://vincit.github.io/objection.js/api/model/instance-methods.html#fetchgraph
  const graph = q.$fetchGraph('[pets, children]')
  console.log(q)
  console.log(graph)
  // -----
  cleanup()
}

run()
