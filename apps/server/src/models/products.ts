const products: string =
  'CREATE TABLE IF NOT EXISTS `products` (' +
  '  `productId` INT NOT NULL AUTO_INCREMENT,' +
  '  `productName` VARCHAR(40) NOT NULL,' +
  '  `brand` VARCHAR(40) NOT NULL,' +
  '  `category_id` INT NOT NULL,' +
  '  `unit_id` INT NOT NULL,' +
  '  PRIMARY KEY (`productId`),' +
  '  UNIQUE INDEX `product_id_UNIQUE` (`productId` ASC) VISIBLE,' +
  '  INDEX `category_id_idx` (`category_id` ASC) VISIBLE,' +
  '  INDEX `unit_id_idx` (`unit_id` ASC) VISIBLE,' +
  '  CONSTRAINT `category_id`' +
  '    FOREIGN KEY (`category_id`)' +
  '    REFERENCES `sad24_ims_system`.`product_category` (`category_id`)' +
  '    ON DELETE NO ACTION' +
  '    ON UPDATE NO ACTION,' +
  '  CONSTRAINT `unit_id`' +
  '    FOREIGN KEY (`unit_id`)' +
  '    REFERENCES `sad24_ims_system`.`product_unit` (`unit_id`)' +
  '    ON DELETE NO ACTION' +
  '    ON UPDATE NO ACTION' +
  ') ENGINE=InnoDB;';

export default products;
