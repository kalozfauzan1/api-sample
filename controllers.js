'use strict';

var response = require('./response');
var connection = require('./connection');

exports.users = function(req, res) {
    connection.query('SELECT * FROM member', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.insertGroupName = function(req, res) {
    const group_name = req.group_name;
    connection.query('INSERT INTO list_group (group_name) VALUES(?)',[group_name], function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.insertMember = function(req, res) {
    const group_name = req.group_name;
    connection.query('INSERT INTO member_of_group (group_id,member_id) VALUES ?',[group_name], function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.index = function(req, res) {
    response.ok("Hello from the Node JS RESTful side!", res)
};