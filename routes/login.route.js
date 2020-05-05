const {loginController} = require("../controllers/login.controller");
const Router = require("koa-router");
const router = new Router();
  
router.post("/", loginController);
  
module.exports = router;