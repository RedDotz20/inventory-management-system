CREATE TABLE IF NOT EXISTS `stocks` (
  `itemCodeId` INT NOT NULL,
  `stocksQuantity` INT NOT NULL,
  INDEX `itemCodeId_idx` (`itemCodeId` ASC) VISIBLE,
  CONSTRAINT `itemCodeId`
    FOREIGN KEY (`itemCodeId`)
    REFERENCES `item_codes` (`itemCodeId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) ENGINE=InnoDB;
