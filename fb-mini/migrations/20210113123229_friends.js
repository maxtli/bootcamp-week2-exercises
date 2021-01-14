exports.up = async knex => knex.schema.createTable('friends', table => {
    table.uuid('id').notNullable().primary().defaultTo(knex.raw('uuid_generate_v4()'))
    table.uuid('RequestUser').notNullable().references('users.id')
    table.uuid('RecieveUser').notNullable().references('users.id')
    table.datetime('RequestTime').notNullable().defaultTo(knex.fn.now(6))
    table.datetime('ConfirmTime')
    table.enum('Status', ['Pending', 'Confirmed', 'Rejected']).notNullable().defaultTo('Pending')
  })
  
  exports.down = async knex => knex.schema.dropTableIfExists('friends')
  