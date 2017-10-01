
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('Spots').del()
    .then(function () {
      // Inserts seed entries
      return knex('Spots').insert([
        {id: 1, name: 'Waitangi Park', terrain: 'ramp & street', photos: '', likes: '4', coords_id: 1},
        {id: 2, name: 'Karori Ramps', terrain: 'ramp', photos: '', likes: '2', coords_id: 2},
        {id: 3, name: 'Tree-Tops', terrain: 'street, some ramp', photos: '', likes: '0', coords_id: 3}
      ])
    })
}
