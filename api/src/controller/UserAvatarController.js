const knex = require("../database/knex")
const AppError = require('../utils/AppError')
const DiskStorage = require('../providers/DiskStorage')


class UsersAvatarController {

    async update(request, response){
       
        const {userId}= request.params
        console.log('imagen')
        const avatarFilename = request.file.filename; //caminho do arquivo e não arquivo em si
        
        
        const diskStorage = new DiskStorage();

        const user = await knex('users').where({id: userId}).first()
        
        if(user.avatar){ //verifica se já existe um avatar e caso exista realiza o delete da foto antiga
            await diskStorage.delete(user.avatar) 
        } 
        const filename = await diskStorage.saveFile(avatarFilename); //Passa o avatarFilename para saveFile que transmite do TMP para o uploads e retorna o nome do arquivo
        user.avatar = filename;

        await knex('users').update(user).where({id: userId}) //chama o knex e da um update com o user que é um json com todos os dados inclusive o de avatar atualizado
        
        return response.status(201).json(user)
    }
}

module.exports = UsersAvatarController;