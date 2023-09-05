const products: string =
  'CREATE TABLE IF NOT EXISTS `products` (\n' +
  '  `productId` INT NOT NULL AUTO_INCREMENT,\n' +
  '  `productName` VARCHAR(45) NOT NULL,\n' +
  '  `brand` VARCHAR(45) NOT NULL,\n' +
  '  `categoryId` INT NOT NULL,\n' +
  '  `unitId` INT NOT NULL,\n' +
  '  `price` DECIMAL(10,2) NOT NULL,\n' +
  '  PRIMARY KEY (`productId`),\n' +
  '  UNIQUE INDEX `productId_UNIQUE` (`productId` ASC) VISIBLE,\n' +
  '  INDEX `categoryId_idx` (`categoryId` ASC) VISIBLE,\n' +
  '  INDEX `unitId_idx` (`unitId` ASC) VISIBLE,\n' +
  '  CONSTRAINT `categoryId`\n' +
  '    FOREIGN KEY (`categoryId`)\n' +
  '    REFERENCES `product_category` (`categoryId`)\n' +
  '    ON DELETE NO ACTION\n' +
  '    ON UPDATE NO ACTION,\n' +
  '  CONSTRAINT `unitId`\n' +
  '    FOREIGN KEY (`unitId`)\n' +
  '    REFERENCES `product_unit` (`unitId`)\n' +
  '    ON DELETE NO ACTION\n' +
  '    ON UPDATE NO ACTION\n' +
  ') ENGINE=InnoDB;';

export default products;
