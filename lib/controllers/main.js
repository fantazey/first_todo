"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _todo = require("../models/todo");

var _todo2 = _interopRequireDefault(_todo);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var mainController = {
    getIndex: function getIndex(request, response) {
        response.render("index");
    },
    getTemplate: function getTemplate(request, response) {
        response.render("templates/" + request.params.template);
    },
    getAllTodos: function getAllTodos(request, response) {
        _todo2.default.find({}, function (err, todos) {
            if (err) {
                return response.send(err);
            }
            response.json(todos);
        });
    },
    postNewTodo: function postNewTodo(request, response) {
        _todo2.default.create({
            text: request.body.text,
            done: false
        }, function (err, todo) {
            if (err) {
                return response.send(err);
            }
            _todo2.default.find({}, function (err, todos) {
                if (err) {
                    return response.send(err);
                }
                response.json(todos);
            });
        });
    },
    deleteTodo: function deleteTodo(request, response) {
        _todo2.default.remove({
            _id: request.params.id
        }, function (err, todo) {
            if (err) {
                return response.send(err);
            }
            _todo2.default.find({}, function (err, todos) {
                if (err) {
                    return response.send(err);
                }
                response.json(todos);
            });
        });
    }
};
exports.default = mainController;