-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema vipcommercedb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema vipcommercedb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `vipcommercedb` DEFAULT CHARACTER SET utf8 ;
USE `vipcommercedb` ;

-- -----------------------------------------------------
-- Table `vipcommercedb`.`cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vipcommercedb`.`cliente` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NULL,
  `cpf` VARCHAR(11) NULL,
  `sexo` CHAR(1) NULL,
  `email` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `vipcommercedb`.`produto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vipcommercedb`.`produto` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NULL,
  `cor` VARCHAR(100) NULL,
  `tamanho` VARCHAR(45) NULL,
  `valor` DOUBLE NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `vipcommercedb`.`forma_pagamento`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vipcommercedb`.`forma_pagamento` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(90) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `vipcommercedb`.`pedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vipcommercedb`.`pedido` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `cliente_id` INT UNSIGNED NOT NULL,
  `dt_pedido` DATETIME NULL DEFAULT now(),
  `observacao` TEXT NULL,
  `forma_pagamento_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_pedido_forma_pagamento_idx` (`forma_pagamento_id` ASC),
  INDEX `fk_pedido_cliente1_idx` (`cliente_id` ASC),
  CONSTRAINT `fk_pedido_forma_pagamento`
    FOREIGN KEY (`forma_pagamento_id`)
    REFERENCES `vipcommercedb`.`forma_pagamento` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_pedido_cliente1`
    FOREIGN KEY (`cliente_id`)
    REFERENCES `vipcommercedb`.`cliente` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `vipcommercedb`.`pedido_produto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vipcommercedb`.`pedido_produto` (
  `pedido_id` INT NOT NULL,
  `produto_id` INT UNSIGNED NOT NULL,
  `qtde` INT NULL,
  INDEX `fk_pedido_produto_produto1_idx` (`produto_id` ASC),
  INDEX `fk_pedido_produto_pedido1_idx` (`pedido_id` ASC),
  CONSTRAINT `fk_pedido_produto_produto1`
    FOREIGN KEY (`produto_id`)
    REFERENCES `vipcommercedb`.`produto` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_pedido_produto_pedido1`
    FOREIGN KEY (`pedido_id`)
    REFERENCES `vipcommercedb`.`pedido` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `vipcommercedb`.`forma_pagamento`
-- -----------------------------------------------------
START TRANSACTION;
USE `vipcommercedb`;
INSERT INTO `vipcommercedb`.`forma_pagamento` (`id`, `nome`) VALUES (1, 'Dinheiro');
INSERT INTO `vipcommercedb`.`forma_pagamento` (`id`, `nome`) VALUES (2, 'Cartão de Crédito');
INSERT INTO `vipcommercedb`.`forma_pagamento` (`id`, `nome`) VALUES (3, 'Cheque');

COMMIT;

