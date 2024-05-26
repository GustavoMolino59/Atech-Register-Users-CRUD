const knex = require("../database/knex");
const AppError = require("../utils/AppError");

class UserController {
  async create(request, response) {
    const { name, email, phone, role, description, tags } = request.body;
    //Verify if user exists

    const checkUserExists = await knex("users").where({ email });

    if (checkUserExists.length > 0) {
      throw new AppError("Este email já esta em uso");
    }

    try {
      if (role == "") {
      }
      const realRole = role == "" ? "Estagiario" : role;
      const [user_id] = await knex("users").insert({
        name,
        email,
        phone,
        role: realRole,
        description,
      });

      if (tags.length > 0) {
        const tagsInsert = tags.map((title) => {
          return {
            user_id,
            title,
          };
        });

        await knex("tags").insert(tagsInsert);
      }
      return response.status(201).json(user_id);
    } catch (error) {
      throw new AppError("Erro ao inserir", 404);
    }
  }

  async update(request, response) {
    const { id } = request.params;
    const { name, email, phone, role, description, tags } = request.body;
    const user = await knex("users").where({ id }).first();
    const newUser = {
      name,
      email,
      phone,
      avatar: user.avatar,
      role,
      description,
    };

    await knex("users").update(newUser).where({ id });
    const actualTags = await knex("tags").where({ user_id: id });

    const tagsToAdd = tags.filter(
      (tag) => !actualTags.some((t) => t.title === tag)
    );
    const tagsToRemove = actualTags.filter((tag) => !tags.includes(tag.title));

    try {
      // Executar as operações no banco de dados
      await knex.transaction(async (trx) => {
        // Adicionar novas tags
        if (tagsToAdd.length > 0) {
          await trx("tags").insert(
            tagsToAdd.map((tag) => ({ user_id: id, title: tag }))
          );
        }

        // Remover tags antigas
        if(tagsToRemove.length > 0){
        await trx("tags")
          .whereIn(
            "title",
            tagsToRemove.map((tag) => tag.title)
          )
          .del();
        }
      });
    } catch (error) {
      throw new AppError(error.message, 404);
    }

    return response.status(200).json();
  }

  async show(request, response) {
    const { id } = request.params;
    const user = await knex("users").where({ id }).first();

    if (!user) {
      throw new AppError("Usuário não existe", 204);
    }
    const tags = await knex("tags").where({ user_id: id });
    return response.status(200).json({ user, tags });
  }
  async delete(request, response) {
    const { id } = request.params;
    await knex("users").where({ id }).delete();
    return response.status(200).json();
  }

  async index(request, response) {
    
    const { title } = request.query;

   
    if (title) {
      const usersSearch = await knex("users")
        .where("name", "like", `%${title}%`)
        .orWhere("email", "like", `%${title}%`)
        .orWhere("phone", "like", `%${title}%`)
        .orWhere("role", "like", `%${title}%`)
        .select("*");
      const usersTagsSearch = await knex("tags")
        .select("user_id")
        .whereLike("title", `%${title}%`);

      const userTags = await Promise.all(
        usersTagsSearch.map(async (user) => {
          async function searchUser(id) {
            const user = await knex("users").where({ id }).first();
            return user;
          }
          const userResult = await searchUser(user.user_id);

          return userResult;
        })
      );

      const usersResult = usersSearch.concat(userTags);

      return response.json(usersResult);
    } else {
      const users = await knex("users");
      
      return response.json(users);
    }
  }
}

module.exports = UserController;
