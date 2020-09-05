### Schema

CREATE DATABASE burgers_db;

use burgers_db;

CREATE TABLE burgers 
(
    id INT AUTO_INCREMENT,
    burger_name VARCHAR(250),
    devoured BOOLEAN,
    PRIMARY KEY (id)
);