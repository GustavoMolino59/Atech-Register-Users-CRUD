const {Router} = require("express")
const multer = require('multer')
const UserController = require('../controller/UserController')
const UsersAvatarController = require('../controller/UserAvatarController')
const uploadConfig = require('../configs/upload')

const usersRoutes = Router()
const userController = new UserController()
const userAvatarController = new UsersAvatarController()
const upload = multer(uploadConfig.MULTER)
//Rotas do usuario

usersRoutes.post("/", userController.create)
usersRoutes.put("/:id", userController.update)
usersRoutes.get("/:id", userController.show)
usersRoutes.get("/:id", userController.show)
usersRoutes.get('/', userController.index)
usersRoutes.delete("/:id", userController.delete)


//avatar
usersRoutes.patch("/avatar/:userId",  upload.single("avatar"), userAvatarController.update)

module.exports = usersRoutes;