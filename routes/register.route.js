const {registerController} = require("../controllers/register.controller");
const Router = require("koa-router");
const router = new Router();
  
router.post("/register", registerController);
  
module.exports = router;