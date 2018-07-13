"use strict";
/* app/server.ts */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import everything from express and assign it to the express variable
var express_1 = __importDefault(require("express"));
var express_nunjucks_1 = __importDefault(require("express-nunjucks"));
// Import WelcomeController from controllers entry point
var controllers_1 = require("./controllers");
// Create a new express application instance
var app = express_1.default();
// The port the express app will listen on
//const port: string = process.env.PORT || "3000";
var port = "3000";
app.set('view engine', 'njk');
app.set('views', __dirname + '/templates');
var njk = express_nunjucks_1.default(app, {
    watch: true,
    noCache: true
});
// Mount the WelcomeController at the /welcome route
app.use('/', controllers_1.MainController);
app.use(express_1.default.static('build/public'));
// Serve the application at the given port
app.listen(port, function () {
    // Success callback
    console.log("Listening at http://localhost:" + port + "/");
});
