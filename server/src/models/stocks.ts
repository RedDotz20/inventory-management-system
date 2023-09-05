const stocks: string =
  'CREATE TABLE IF NOT EXISTS `stocks` (\n' +
  '  `itemCodeId` INT NOT NULL,\n' +
  '  `stocksQuantity` INT NOT NULL,\n' +
  '  INDEX `itemCodeId_idx` (`itemCodeId` ASC) VISIBLE,\n' +
  '  CONSTRAINT `itemCodeId`\n' +
  '    FOREIGN KEY (`itemCodeId`)\n' +
  '    REFERENCES `item_codes` (`itemCodeId`)\n' +
  '    ON DELETE NO ACTION\n' +
  '    ON UPDATE NO ACTION\n' +
  ') ENGINE=InnoDB;';

export default stocks;
