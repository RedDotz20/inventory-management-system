const products: string =
  'CREATE TABLE IF NOT EXISTS `products` (' +
  '  `productId` INT NOT NULL AUTO_INCREMENT,' +
  '  `productName` VARCHAR(255) NOT NULL,' +
  '  `brandName` VARCHAR(255) NOT NULL,' +
  '  `categoryName` VARCHAR(255) NOT NULL,' +
  '  `unitName` VARCHAR(255) NOT NULL,' +
  '  PRIMARY KEY (`productId`),' +
  '  UNIQUE INDEX `product_id_UNIQUE` (`productId` ASC) VISIBLE' +
  ') ENGINE=InnoDB;';

export default products;
