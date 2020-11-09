-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema bemoldb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema bemoldb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `bemoldb` DEFAULT CHARACTER SET utf8 ;
USE `bemoldb` ;

-- -----------------------------------------------------
-- Table `bemoldb`.`tipo_usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bemoldb`.`tipo_usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bemoldb`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bemoldb`.`usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(255) NULL,
  `cpf` VARCHAR(11) NULL,
  `sexo` CHAR(1) NULL,
  `email` VARCHAR(100) NULL,
  `senha` VARCHAR(255) NULL,
  `tipo_usuario_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_usuario_tipo_usuario_idx` (`tipo_usuario_id` ASC),
  CONSTRAINT `fk_usuario_tipo_usuario`
    FOREIGN KEY (`tipo_usuario_id`)
    REFERENCES `bemoldb`.`tipo_usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bemoldb`.`interacao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bemoldb`.`interacao` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `dt_interacao` DATE NULL DEFAULT now(),
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bemoldb`.`contato`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bemoldb`.`contato` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `interacao_id` INT NOT NULL,
  `usuario_id` INT NOT NULL,
  `dt_mensagem` DATE NULL DEFAULT now(),
  `mensagem` TEXT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_contato_interacao1_idx` (`interacao_id` ASC),
  INDEX `fk_contato_usuario1_idx` (`usuario_id` ASC),
  CONSTRAINT `fk_contato_interacao1`
    FOREIGN KEY (`interacao_id`)
    REFERENCES `bemoldb`.`interacao` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_contato_usuario1`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `bemoldb`.`usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
