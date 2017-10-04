
exports.up = function (knex, Promise) {
  return knex.schema.createTable('Spots', table => {
    table.increments('id').primary()
    table.string('name')
    table.string('terrain')
    table.string('photos')
    table.integer('likes')
    table.integer('lat')
    table.integer('lng')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('Spots')
}
