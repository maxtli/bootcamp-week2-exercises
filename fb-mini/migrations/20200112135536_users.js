exports.up = async knex => knex.schema.createTable('users', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))
  table.string('FirstName', 20).notNullable()
  table.string('LastName', 50).notNullable()
  table.date('DOB').notNullable()
  table.string('Password', 50).notNullable()
  table
    .string('Email')
    .unique()
    .notNullable()
  table.string('Bio')
  table.timestamps(true)
})

exports.down = async knex => knex.schema.dropTableIfExists('users')
