CREATE TABLE IF NOT EXISTS `products` (
  `productId` INT NOT NULL AUTO_INCREMENT,
  `productName` VARCHAR(45) NOT NULL,
  `brand` VARCHAR(45) NOT NULL,
  `categoryId` INT NOT NULL,
  `unitId` INT NOT NULL,
  `price` DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (`productId`),
  UNIQUE INDEX `productId_UNIQUE` (`productId` ASC) VISIBLE,
  INDEX `categoryId_idx` (`categoryId` ASC) VISIBLE,
  INDEX `unitId_idx` (`unitId` ASC) VISIBLE,
  CONSTRAINT `categoryId`
    FOREIGN KEY (`categoryId`)
    REFERENCES `product_category` (`categoryId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `unitId`
    FOREIGN KEY (`unitId`)
    REFERENCES `product_unit` (`unitId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) ENGINE=InnoDB;
