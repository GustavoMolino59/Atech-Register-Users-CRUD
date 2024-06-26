exports.up = knex => knex.schema.createTable("tags", table =>{
    table.increments('id');
    table.integer("user_id").references("id").inTable("users").onDelete("CASCADE")
    table.text("title");
})

exports.down = knex => knex.schema.dropTable("tags")