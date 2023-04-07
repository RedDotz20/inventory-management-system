const productCategory: string =
  'CREATE TABLE IF NOT EXISTS `product_category` (\n' +
  '  `category_id` INT NOT NULL AUTO_INCREMENT,\n' +
  '  `categoryName` VARCHAR(40) NOT NULL,\n' +
  '  PRIMARY KEY (`category_id`),\n' +
  '  UNIQUE INDEX `category_id_UNIQUE` (`category_id` ASC) VISIBLE\n' +
  ') ENGINE=InnoDB;';

export default productCategory;
