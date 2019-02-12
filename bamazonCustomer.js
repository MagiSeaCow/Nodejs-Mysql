var inquirer = require("inquirer");
var mysql = require("mysql");


var connection = mysql.createConnection(
{
  host: "localhost",

  // port; if not 3306
  port: 3306,

  // username
  user: "root",

  // password
  password: "",
  database: "bamazon"
});

//Connection message
connection.connect(function(err)
{
  if (err) throw err;
  console.log("Connected as id " + connection.threadId + "\n");
});

// ---------------------------------------------
console.log("Displaying all products...\n");

connection.query("SELECT * FROM products", function(err, res) 
{
  if (err) throw err;
  // Log all results of the SELECT statement
  console.log("Product List: \n");

  for(var i = 0; i < res.length; i++)
  {
     console.log(res[i].item_id + ": " + res[i].product_name + "\n   Price: $" + res[i].price + "\n------------------------------------------------");
  };
  // connection.end();
});

execute();

function execute()
{
  inquirer
  .prompt([
    {
      type: 'input',
      name: 'item',
      message: 'Please choose an Item to purchase',
      validate: function(idvalue)
      {
        idvalue = parseInt(idvalue);
        if((Number.isInteger(idvalue)) === true)
        {     // check if the input is an actual ID (number 1-10) or not
          if(idvalue > 0 && idvalue <= 10)
          {
            return true;
          }
          else
          {
            return "Please enter a whole number/ An ID that exists";
          }
        }
          else
          {
            return "Please enter a whole number/ An ID that exists";
          }
      }
    },
    {
      type: 'input',
      name: 'quantity',
      message: 'How many units would you like to purchase?',
      validate: function(value)
      {
        value = parseInt(value);
        if((Number.isInteger(value)) === true)
        {
          return true;
        }
        else
        {
          return "Please enter a whole number";
        }
      }
    }
])
    .then(answers => {

        // ---------------------------------------------

        // ---------------------------------------------

connection.query("SELECT * FROM products", function(err, invoice)
{
  if (err) throw err;
  // Log all results of the SELECT statement
  // console.log("testing: " + res[0].stock_quantity);
  console.log(invoice[answers.productChoice - 1].stock_quantity);

  if(invoice[answers.productChoice - 1].stock_quantity < answers.quantity)
  {
    console.log("Insufficient Quantity!");
  }
  else
  {
    console.log("Sold! \n");
    console.log(invoice[answers.productChoice - 1].product_name);
    console.log("Your total is: " + (parseFloat(answers.quantity * invoice[answers.productChoice - 1].price)).toFixed(2));
    invoice[answers.productChoice - 1 ].stock_quantity = invoice[answers.productChoice - 1].stock_quantity - answers.quantity
    console.log("-------------------------------------------------------------");

    console.log("Products updated!\n");
    var query = connection.query(
      "UPDATE products SET ? WHERE ?",
      [
        {
          stock_quantity: invoice[answers.productChoice - 1].stock_quantity
        },
        {
          product_name: invoice[answers.productChoice - 1].product_name
        }
      ],
    function(err, correction)
    {
      console.log("New Quantity for " + invoice[answers.productChoice - 1].product_name + ":\n" + invoice[answers.productChoice - 1].stock_quantity);
    }
                                );
  }

  connection.end();
});

      });
}
