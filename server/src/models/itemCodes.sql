CREATE TABLE IF NOT EXISTS `item_codes` (
  `itemCodeId` INT NOT NULL,
  `productId` INT NOT NULL,
  `itemCodes` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`itemCodeId`),
  UNIQUE INDEX `itemCodeId_UNIQUE` (`itemCodeId` ASC) VISIBLE,
  INDEX `productId_idx` (`productId` ASC) VISIBLE,
  CONSTRAINT `productId`
    FOREIGN KEY (`productId`)
    REFERENCES `products` (`productId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) ENGINE=InnoDB;
