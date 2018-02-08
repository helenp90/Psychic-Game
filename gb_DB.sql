DROP DATABASE IF EXISTS gb_DB;
CREATE DATABASE gb_DB;

USE gb_DB;

CREATE TABLE auctionItems(
  id INT NOT NULL AUTO_INCREMENT,
  ItemName VARCHAR(50) NULL,
  Descript VARCHAR(100) NULL,
  StartBid INTEGER(1000) NULL,
  CurrentBid INTEGER(1000) NULL,
  PRIMARY KEY (id)
);

INSERT INTO auctionItems (ItemName, Descript, CurrenBid)
VALUES ("kitten boots", "knitted socks for cat paws", ".05");



