-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema vipcommercedb_test
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema vipcommercedb_test
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `vipcommercedb_test` DEFAULT CHARACTER SET utf8 ;
USE `vipcommercedb_test` ;

-- -----------------------------------------------------
-- Table `vipcommercedb_test`.`cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vipcommercedb_test`.`cliente` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NULL,
  `cpf` VARCHAR(11) NULL,
  `sexo` CHAR(1) NULL,
  `email` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `vipcommercedb_test`.`produto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vipcommercedb_test`.`produto` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NULL,
  `cor` VARCHAR(100) NULL,
  `tamanho` VARCHAR(45) NULL,
  `valor` DOUBLE NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `vipcommercedb_test`.`forma_pagamento`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vipcommercedb_test`.`forma_pagamento` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(90) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `vipcommercedb_test`.`pedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vipcommercedb_test`.`pedido` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `cliente_id` INT UNSIGNED NOT NULL,
  `dt_pedido` DATETIME NULL DEFAULT now(),
  `observacao` TEXT NULL,
  `forma_pagamento_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_pedido_forma_pagamento_idx` (`forma_pagamento_id` ASC),
  INDEX `fk_pedido_cliente1_idx` (`cliente_id` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `vipcommercedb_test`.`pedido_produto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vipcommercedb_test`.`pedido_produto` (
  `pedido_id` INT NOT NULL,
  `produto_id` INT UNSIGNED NOT NULL,
  `qtde` INT NULL,
  INDEX `fk_pedido_produto_produto1_idx` (`produto_id` ASC),
  INDEX `fk_pedido_produto_pedido1_idx` (`pedido_id` ASC))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `vipcommercedb_test`.`forma_pagamento`
-- -----------------------------------------------------
START TRANSACTION;
USE `vipcommercedb_test`;
INSERT INTO `vipcommercedb_test`.`forma_pagamento` (`id`, `nome`) VALUES (1, 'Dinheiro');
INSERT INTO `vipcommercedb_test`.`forma_pagamento` (`id`, `nome`) VALUES (2, 'Cartão de Crédito');
INSERT INTO `vipcommercedb_test`.`forma_pagamento` (`id`, `nome`) VALUES (3, 'Cheque');

COMMIT;

