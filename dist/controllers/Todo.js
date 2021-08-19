"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTodo = void 0;
var Todo_1 = require("../model/Todo");
var TODOS = [];
exports.createTodo = function (req, res, next) {
    var text = req.body.text;
    var newTodo = new Todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res
        .status(201)
        .json({
        message: "Todo fue creado...",
        createTodo: newTodo
    });
};
