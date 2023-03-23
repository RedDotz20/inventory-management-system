const itemCodes: string =
  'CREATE TABLE IF NOT EXISTS `item_codes` (\n' +
  '  `itemCodeId` INT NOT NULL,\n' +
  '  `productId` INT NOT NULL,\n' +
  '  `itemCodes` VARCHAR(255) NOT NULL,\n' +
  '  PRIMARY KEY (`itemCodeId`),\n' +
  '  UNIQUE INDEX `itemCodeId_UNIQUE` (`itemCodeId` ASC) VISIBLE,\n' +
  '  INDEX `productId_idx` (`productId` ASC) VISIBLE,\n' +
  '  CONSTRAINT `productId`\n' +
  '    FOREIGN KEY (`productId`)\n' +
  '    REFERENCES `products` (`productId`)\n' +
  '    ON DELETE NO ACTION\n' +
  '    ON UPDATE NO ACTION\n' +
  ') ENGINE=InnoDB;';

export default itemCodes;
