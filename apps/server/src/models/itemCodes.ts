const itemCodes: string =
  'CREATE TABLE IF NOT EXISTS `item_codes` (' +
  '  `item_code_id` INT NOT NULL AUTO_INCREMENT,' +
  '  `item_code` VARCHAR(255) NOT NULL,' +
  '  `variant` VARCHAR(255) NOT NULL,' +
  '  `productId` INT NOT NULL,' +
  '  `price` DECIMAL(5,2) NOT NULL,' +
  '  `stockQuantity` INT NULL,' +
  '  PRIMARY KEY (`item_code_id`),' +
  '  UNIQUE INDEX `iditemCode_UNIQUE` (`item_code_id` ASC) VISIBLE,' +
  '  UNIQUE INDEX `item_code_UNIQUE` (`item_code` ASC) VISIBLE,' +
  '  INDEX `productId_idx` (`productId` ASC) VISIBLE,' +
  '  CONSTRAINT `productId`' +
  '    FOREIGN KEY (`productId`)' +
  '    REFERENCES `sad24_ims_system`.`products` (`productId`)' +
  '    ON DELETE NO ACTION' +
  '    ON UPDATE NO ACTION' +
  ') ENGINE=InnoDB;';

export default itemCodes;
