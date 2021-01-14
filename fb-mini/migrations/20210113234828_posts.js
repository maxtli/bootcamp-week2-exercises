
exports.up = async knex => knex.schema.createTable('posts', table => {
    table
      .uuid('id')
      .notNullable()
      .primary()
      .defaultTo(knex.raw('uuid_generate_v4()'))
    table.uuid('UserID').notNullable().references('users.id')
    table.integer('LikeCount').notNullable().defaultTo(0)
    table.string('Text').notNullable()
})

exports.down = async knex => knex.schema.dropTableIfExists('posts')
