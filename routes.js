'use strict';

module.exports = function(app) {
    var todoList = require('./controllers');

    app.route('/insert-group-name')
        .post(todoList.insertGroupName);

    app.route('/insert-member')
        .post(todoList.insertMember);

    app.route('/users')
        .get(todoList.users);
};