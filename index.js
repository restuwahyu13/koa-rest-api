const koa = require("koa");
const app = new koa();
const server = require("http").createServer(app.callback());
const mongoose = require("mongoose");
const bodyParser = require("koa-body");
const logger = require("koa-logger");

// register all route 
const registerRoute = require("./routes/register.route");
const loginRoute = require("./routes/login.route");
const userRoute = require("./routes/user.route");

// setup global promise
mongoose.Promise = global.Promise;

// setup database connection
mongoose.connect("mongodb://localhost:27017/demo",
{useNewUrlParser: true, useUnifiedTopology: true, 
useCreateIndex: true, useFindAndModify: false})
.then(() => console.log("database connected successfully"))
.catch(() => console.log("database connection failed"));

// register all function middleware
app.use(bodyParser({urlencoded: true, json: true}));
app.use(logger());
app.use(registerRoute.routes()).use(registerRoute.allowedMethods());
app.use(loginRoute.routes()).use(loginRoute.allowedMethods());
app.use(userRoute.routes()).use(userRoute.allowedMethods());

// listening server
server.listen(3000, () => console.log("server is running"));