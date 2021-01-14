
const data = require('../data/likes')

exports.seed = knex => knex('likes').del()
  .then(() => knex('likes').insert(data))