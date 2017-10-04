
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('Spots').del()
    .then(function () {
      // Inserts seed entries
      return knex('Spots').insert([
        { id: 1, name: 'Waitangi Park', terrain: 'ramp & street', photos: '', likes: '4', lat: -41.292010, lng: 174.784688 },

        { id: 2, name: 'Karori Ramps', terrain: 'ramp', photos: '', likes: '2', lat: -41.321686, lng: 174.780642 },

        { id: 3, name: 'Tree-Tops', terrain: 'street, some ramp', photos: '', likes: '0', lat: -41.279619, lng: 174.754061 }
      ])
    })
}
