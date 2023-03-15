CREATE TABLE IF NOT EXISTS `stocks` (
  `productId` INT NOT NULL,
  `stocksQuantity` INT NULL,
  INDEX `productId_idx` (`productId` ASC) VISIBLE,
  CONSTRAINT `productId`
    FOREIGN KEY (`productId`)
    REFERENCES `products` (`productId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) ENGINE=InnoDB;
