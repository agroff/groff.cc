"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
// Assign router to the express.Router() instance
var router = express_1.Router();
router.get('/', function (req, res) {
    res.render("index.njk");
});
router.get('/design', function (req, res) {
    res.render("design.njk");
});
// Export the express.Router() instance to be used by server.ts
exports.MainController = router;
