
exports.up = function (knex, Promise) {
  return knex.schema.createTable('Spots', table => {
    table.increments('id')
    table.string('type')
    table.string('terrain')
    table.string('photos')
    table.integer('likes')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('Spots')
}
