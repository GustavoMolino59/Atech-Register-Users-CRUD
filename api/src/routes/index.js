const {Router} = require("express")
const usersRoutes = require('./user.routes')

const routes = Router();


//rotas da aplicacao

routes.use("/users", usersRoutes)



module.exports = routes;