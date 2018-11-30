var express = require("express");
var app = express();

var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "test",
  password: "test1234",
  database: "todos"
});

app.get("/", function(req, res) {
  connection.query("select * from sample", function(error, results, fields) {
    if (error) throw error;
    res.send(results[0]);
  });
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
