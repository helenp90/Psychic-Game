CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE `chirps` (
  id INT NOT NULL AUTO_INCREMENT,
  chirp VARCHAR(45) NULL,
  author VARCHAR(45) NULL,
time, CURRENT_TIMESTAMP(now), 
  PRIMARY KEY (id)

  -- TABLE CODE TO GO HERE

);