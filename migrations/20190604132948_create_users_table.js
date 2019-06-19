
exports.up = function(knex) {
    return knex.schema.createTable('USERS', table => {
        table.increments('id')
        table.string('firstName')
        table.string('lastName')
        table
            .string('userName')
            .unique()
            .notNullable()

        table
            .string('password')
            .notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('USERS')
};
