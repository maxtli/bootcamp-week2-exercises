const cleanup = require('../lib/cleanup')
const User = require('../models/User')
// Import models

const run = async () => {
  /**
    Create a transaction. It should (without using insertGraph): create a new
    user with returning(), give that user a pet, and fetch the total number of
    pets. If that total number exceeds 15, it should delete all BIRDS. Test
    the transaction by throwing an error: throw new Error("This is an error").
   */
  try {
    const trans = await User.transaction(async ts => {
      const newUser = await User.query(ts).insert({ firstName: 'Rand', lastName: 'Rand', email: 'rand@rand.com' })
      newUser.$relatedQuery('pets', ts).insert({ type: 'FISH', name: 'Bob' })
      const totalPets = await Pet.query(ts);
      if (totalPets.resultSize() > 15)
        totalPets.$query(ts).delete().where('type', 'BIRD')
      throw new Error('This is an error')
      return true;
    });
  } catch (err) {
    console.log(err)
  }

  // -----
  cleanup()
}

run()
