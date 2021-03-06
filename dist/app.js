"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Todos_1 = __importDefault(require("./routes/Todos"));
var body_parser_1 = require("body-parser");
var app = express_1.default();
app.use(body_parser_1.json());
app.use("/todos", Todos_1.default);
app.use(function (err, req, resp, next) {
    resp
        .status(500)
        .json({ message: err.message });
});
app.listen(3000);
