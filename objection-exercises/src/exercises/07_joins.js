const cleanup = require('../lib/cleanup')
const User = require('../models/User')
const Pet = require('../models/Pet')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users and their pets
  const usersAndPets = await User.query().withGraphFetched('pets')
  console.log(usersAndPets)

  // Get all users, their pets, AND their children
  const usersPetsAndChildren = await User.query().withGraphFetched('[pets, children]')
  console.log(usersPetsAndChildren)

  // Get all users, their parents, and their grandparents
  const usersAncestry = await User.query().withGraphFetched('parents.parents')
  console.log(usersAncestry)

  // Get all users, their pets, their chilren, and their childrens' pets
  const usersPosterity = await User.query().withGraphFetched('[pets, children.pets]')
  console.log(usersPosterity)

  // -----
  cleanup()
}

run()
