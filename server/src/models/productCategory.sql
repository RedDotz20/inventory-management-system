CREATE TABLE IF NOT EXISTS `product_category` (
  `categoryId` INT NOT NULL AUTO_INCREMENT,
  `categoryName` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`categoryId`),
  UNIQUE INDEX `categoryId_UNIQUE` (`categoryId` ASC) VISIBLE
) ENGINE=InnoDB;