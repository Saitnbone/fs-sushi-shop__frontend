CREATE DATABASE shopBd;
USE shopBd;

CREATE TABLE products ( 
    id INT PRIMARY KEY,
    title VARCHAR (60),
    categoty VARCHAR(100),
    price INT
);

INSERT INTO products VALUE( 1, “Hello”, “there”, 8) 