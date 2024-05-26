exports.up = (knex) =>
  knex.schema.createTable("users", (table) => {
    table.increments("id");
    table.text('avatar');
    table.text("email").notNullable();
    table.text("name").notNullable();
    table.text("phone");
    table
      .enum(
        "role",
        ["Diretor", "Coordenador", "Gerente", "Analista", "Estagiario"],
        { useNative: true, enumName: "roles" }
      )
      .notNullable()
      .default("Estagiario");
    table.text("description").notNullable();
    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
  });

exports.down = (knex) => knex.schema.dropTable("users");
