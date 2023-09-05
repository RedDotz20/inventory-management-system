const productCategory: string =
  'CREATE TABLE IF NOT EXISTS `product_category` (\n' +
  '  `categoryId` INT NOT NULL AUTO_INCREMENT,\n' +
  '  `categoryName` VARCHAR(45) NOT NULL,\n' +
  '  PRIMARY KEY (`categoryId`),\n' +
  '  UNIQUE INDEX `categoryId_UNIQUE` (`categoryId` ASC) VISIBLE\n' +
  ') ENGINE=InnoDB;';

export default productCategory;
