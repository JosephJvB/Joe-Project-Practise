
exports.up = function (knex, Promise) {
  return knex.schema.createTable('coords', table => {
    table.increments('id').primary()
    table.integer('lat')
    table.integer('lng')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('coords')
}
