'use strict';

var response = require('./response');
var connection = require('./connection');

exports.users = function(req, res) {
    connection.query('SELECT * FROM member', function (error, rows, fields){
        if(error){
            response.ok(error,res)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.insertGroupName = function(req, res) {
    const group_name = req.body.group_name;
    connection.query('INSERT INTO list_group (group_name) VALUES(?)',[group_name], function (error, rows, fields){
        if(error){
            response.ok(error,res)
        } else{
            connection.query('SELECT * FROM list_group ORDER BY id DESC LIMIT 1', function (error, rows, fields){
                response.ok(rows[0], res)
            });
        }
    });
};

exports.insertMember = function(req, res) {
    const data = req.body.data;
    connection.query('INSERT INTO member_of_group (group_id,member_id) VALUES ?',[data], function (error, rows, fields){
        if(error){
            response.ok(error,res)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.index = function(req, res) {
    response.ok("Hello from the Node JS RESTful side!", res)
};
