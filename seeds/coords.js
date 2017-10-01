
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('coords').del()
    .then(function () {
      // Inserts seed entries
      return knex('coords').insert([
        {id: 1, lat: -41.292010, lng: 174.784688},
        {id: 2, lat: -41.321686, lng: 174.780642},
        {id: 3, lat: -41.279619, lng: 174.754061}
      ])
    })
};
