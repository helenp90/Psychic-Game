DROP DATABASE IF EXISTS KarmaKoins_DB;
CREATE DATABASE KarmaKoins_DB;
USE KarmaKoins_DB;
CREATE TABLE KarmaGroup(
  group_id INT NOT NULL AUTO_INCREMENT,
  group_name VARCHAR(100) NOT NULL,
  people_assigned VARCHAR(45) NOT NULL,
  group_leader INT default 0,
  PRIMARY KEY (group_id)
);
CREATE TABLE KaraPeople(
  user_id INT NOT NULL AUTO_INCREMENT,
  username_name VARCHAR(100) NOT NULL,
  user_email VARCHAR(45) NOT NULL,
  FOREIGN KEY (id)
);
CREATE TABLE auctions(
  id INT NOT NULL AUTO_INCREMENT,
  item_name VARCHAR(100) NOT NULL,
  category VARCHAR(45) NOT NULL,
  starting_bid INT default 0,
  highest_bid INT default 0,
  PRIMARY KEY (id)
);

group id , group name, people assigned, group leader