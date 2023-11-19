const mysql = require("mysql2");

const connection = mysql.createConnection({
    user: "root",
    password: "Ahsan075@",
    host: "localhost",
});

module.exports = connection;
