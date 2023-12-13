const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "bank-app",
  connectionLimit: 10,
});

connection.connect((error) => {
  if (error) {
    console.log(error.message);
  } else {
    console.log("connected to database");
  }
});

connection.query("", function (err, data, fields) {
  if (err) return err;
  return data;
});

module.exports = connection;
