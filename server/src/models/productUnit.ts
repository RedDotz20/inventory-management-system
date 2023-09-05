const productUnit: string =
  'CREATE TABLE IF NOT EXISTS `product_unit` (\n' +
  '  `unitId` INT NOT NULL AUTO_INCREMENT,\n' +
  '  `unitName` VARCHAR(45) NOT NULL,\n' +
  '  PRIMARY KEY (`unitId`),\n' +
  '  UNIQUE INDEX `idnew_table_UNIQUE` (`unitId` ASC) VISIBLE\n' +
  ') ENGINE=InnoDB;';

export default productUnit;
