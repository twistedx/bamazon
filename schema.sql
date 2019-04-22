DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  productName VARCHAR(100) NULL,
  department VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  quantity INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (productName,department ,price, quantity)
VALUES ("shoes", "sports", 22.50, 100);

INSERT INTO products  (productName,department ,price, quantity)
VALUES ("hat", "sports", 13.25, 75);

INSERT INTO products  (productName,department ,price, quantity)
VALUES ("work boots","mens", 53.10, 120);

INSERT INTO products  (productName,department ,price, quantity)
VALUES ("sweater", "mens", 37.25, 75);

INSERT INTO products  (productName,department ,price, quantity)
VALUES ("hard hat", "work clothing", 33.25, 75);

INSERT INTO products  (productName,department ,price, quantity)
VALUES ("belt", "work clothing", 14.25, 55);

INSERT INTO products  (productName,department ,price, quantity)
VALUES ("purses", "womens", 553.25, 25);

INSERT INTO products  (productName,department ,price, quantity)
VALUES ("wallets", "womens", 335.25, 25);

INSERT INTO products  (productName,department ,price, quantity)
VALUES ("bone", "dog", 3.25, 175);

INSERT INTO products  (productName,department ,price, quantity)
VALUES ("pet food", "dog", 63.25, 175);

-- ### Alternative way to insert more than one row
-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("vanilla", 2.50, 100), ("chocolate", 3.10, 120), ("strawberry", 3.25, 75);