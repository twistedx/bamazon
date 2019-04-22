var connect = require("./bamazonDBconnect.js");
var inquirer = require("inquirer");
var chalk = require("chalk");
var mysql = require("mysql");

var mysql = require("mysql");
var debug = false;
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: connect,
  database: "bamazon"
});

console.log("connected as id " + connection.threadId);

connection.connect(function(err) {
  if (err) throw err;

  console.log("connected as id " + connection.threadId);
  start();
});

function start() {
  {
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      for (var i = 0; i < res.length; i++) {
        console.log(
          " " +
            chalk.blue(res[i].id) +
            "\n" +
            chalk.green(" Product name: ") +
            res[i].productName +
            "\n" +
            chalk.green(" Department: ") +
            res[i].department +
            "\n" +
            chalk.yellow(" price: ") +
            res[i].price +
            "\n" +
            chalk.yellow(" Quantity: ") +
            res[i].quantity +
            "\n"
        );
      }
      SomethingElse();
    });
  }
}

function SomethingElse() {
  inquirer
    .prompt([
      {
        name: "id",
        message: "What do you want to purchase.",
        type: "input"
      },
      {
        name: "howMuch",
        message: "How many items do you want to purchase",
        type: "input"
      }
    ])
    .then(function(answer) {
      if (answer.id === "exit") {
        connection.end();
      } else {
        connection.query(
          "SELECT * FROM products WHERE ?",
          { id: answer.id },
          function(err, res) {
            if (err) throw err;
            //   console.log(res);
            var id = null;
            var price = 0;
            var quantity = 0;

            for (let i = 0; i < res.length; i++) {
              id = parseInt(res[i].id);
              price = parseFloat(res[i].price);
              quantity = parseInt(res[i].quantity);
            }

            if (answer.howMuch > res.quantity || res.quantity < 0) {
              console.log("Insufficient Inventory");
            } else {
              let doMath = price * answer.howMuch;
              quantity -= answer.howMuch;

              connection.query(
                "UPDATE products SET ? WHERE ? ",
                [{ quantity: quantity }, { id: id }],
                function(err) {
                  if (err) {
                    console.log(err);
                  }
                  console.log("Items Purchased!  Your total is " + doMath);
                  if (debug) {
                    console.log(
                      "ID =" +
                        id +
                        " price = " +
                        price +
                        " quantity = " +
                        quantity
                    );
                  }
                  start();
                }
              );
            }
          }
        );
      }
    });
}
