const app = require("express");

const connection = require("./connection");

connection.connect((err) => {
    if (!err) {
        console.log("Connected");
        const query = "CREATE DATABASE post";
        connection.query(query, (err) => {
            if (!err) console.log("Database Created Successfully");
            else console.log("Already Exist");
            
            const query =
                "CREATE TABLE posts (title VARCHAR(255), desc VARCHAR(255))";
            connection.query(query, (err) => {
                if (!err) console.log("Table Created");
                else console.log("Table already exist");
            });
        });
    } else console.log("Not Connected");
});
