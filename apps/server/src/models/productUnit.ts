const productUnit: string =
  'CREATE TABLE IF NOT EXISTS `product_unit` (' +
  '  `unit_id` INT NOT NULL AUTO_INCREMENT,' +
  '  `unitName` VARCHAR(255) NOT NULL,' +
  '  PRIMARY KEY (`unit_id`),' +
  '  UNIQUE INDEX `unit_id_UNIQUE` (`unit_id` ASC) VISIBLE' +
  ') ENGINE=InnoDB;';

export default productUnit;
