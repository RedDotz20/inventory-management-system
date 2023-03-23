const users: string =
  'CREATE TABLE IF NOT EXISTS `users` (\n' +
  '  `id` INT NOT NULL AUTO_INCREMENT,\n' +
  '  `username` VARCHAR(255) NOT NULL,\n' +
  '  `password` VARCHAR(255) NOT NULL,\n' +
  '  PRIMARY KEY (`id`),\n' +
  '  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE\n' +
  ') ENGINE=InnoDB;';

export default users;
