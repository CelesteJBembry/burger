CREATE DATABASE IF NOT EXISTS burgers_db;
USE burgers_db;

CREATE TABLE IF NOT EXISTS burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);



INSERT INTO burgers (burger_name) VALUES ('Mushroom Swiss Burger');
INSERT INTO burgers (burger_name) VALUES ('Avocado Burger');
INSERT INTO burgers (burger_name) VALUES ('BBQ Burger');
INSERT INTO burgers (burger_name, devoured) VALUES ('Vegan Burger', true);
INSERT INTO burgers (burger_name, devoured) VALUES ('Classic Burger', true);
INSERT INTO burgers (burger_name, devoured) VALUES ('Bison Burger', true);

SELECT * FROM burgers;