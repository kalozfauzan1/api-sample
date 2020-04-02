'use strict';

module.exports = function(app) {
    var todoList = require('./controllers');

    app.route('/')
        .get(todoList.index);

    app.route('/insert-group-name')
        .post(todoList.index);

    app.route('/users')
        .get(todoList.users);
};