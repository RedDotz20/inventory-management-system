CREATE TABLE IF NOT EXISTS `product_unit` (
  `unitId` INT NOT NULL,
  `unitName` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`unitId`),
  UNIQUE INDEX `idproduct_unit_UNIQUE` (`unitId` ASC) VISIBLE
) ENGINE=InnoDB;