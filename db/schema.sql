### Schema

CREATE DATABASE burgers_db;

use burgers_db;

CREATE TABLE burgers 
(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(250),
    devoured BOOLEAN,
    createdAt TIMESTAMP NOT NULL,
    PRIMARY KEY (id)
);