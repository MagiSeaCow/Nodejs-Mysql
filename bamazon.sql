DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price,stock_quantity)
VALUES ("Nier: Automata ", "Games", 250.01, 100);
INSERT INTO products (product_name, department_name, price,stock_quantity)
VALUES ("Kingdom Hearts III ", "Games", 250.02, 101);
INSERT INTO products (product_name, department_name, price,stock_quantity)
VALUES ("Resident Evil 2: Remake ", "Games", 250.03, 102);
INSERT INTO products (product_name, department_name, price,stock_quantity)
VALUES ("Ipad Pro 12.9 ", "Tablet", 600.98, 100);
INSERT INTO products (product_name, department_name, price,stock_quantity)
VALUES ("Amazon Kindle ", "Tablet", 600.99, 250);
INSERT INTO products (product_name, department_name, price,stock_quantity)
VALUES ("Amazon Fire ", "Tablet", 101.10, 150);
INSERT INTO products (product_name, department_name, price,stock_quantity)
VALUES ("Playstation 4 ", "Electronics", 700.26, 88);
INSERT INTO products (product_name, department_name, price,stock_quantity)
VALUES ("Nintendo Switch ", "Electronics", 591.60, 846);
INSERT INTO products (product_name, department_name, price,stock_quantity)
VALUES ("Xbox One ", "Electronics", 999.76, 025);
INSERT INTO products (product_name, department_name, price,stock_quantity)
VALUES ("Gundam: Wing Zero Custom Perfect Grade ", "Toys", 110.88, 301);

SELECT * FROM products;