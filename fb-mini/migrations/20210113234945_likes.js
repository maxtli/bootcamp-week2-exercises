
exports.up = async knex => knex.schema.createTable('likes', table => {
    table
      .uuid('id')
      .notNullable()
      .primary()
      .defaultTo(knex.raw('uuid_generate_v4()'))
      table.uuid('UserID').notNullable().references('users.id')
      table.uuid('PostID').notNullable().references('posts.id')
    table.datetime('LikeTime').notNullable().defaultTo(knex.fn.now(6))
})

exports.down = async knex => knex.schema.dropTableIfExists('likes')
