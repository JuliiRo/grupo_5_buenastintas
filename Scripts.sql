-- MySQL Script generated by MySQL Workbench
-- Tue Oct 27 21:20:12 2020
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema buenasTintasDB
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema buenasTintasDB
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `buenasTintasDB` DEFAULT CHARACTER SET utf8 ;
USE `buenasTintasDB` ;

-- -----------------------------------------------------
-- Table `buenasTintasDB`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `buenasTintasDB`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `category` VARCHAR(15) NOT NULL DEFAULT 'cliente',
  `name` VARCHAR(45) NOT NULL,
  `lastName` VARCHAR(45) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `date` DATE NOT NULL,
  `photo` VARCHAR(100) NULL,
  `phone` INT NOT NULL,
  `password` VARCHAR(150) NOT NULL,
  `created_at` TIMESTAMP NULL,
  `updated_at` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `buenasTintasDB`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `buenasTintasDB`.`categories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `buenasTintasDB`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `buenasTintasDB`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `bodega` VARCHAR(100) NULL,
  `nombre` VARCHAR(100) NULL,
  `varietal` VARCHAR(100) NULL,
  `cosecha` INT NULL,
  `precio` INT NOT NULL,
  `descuento` INT NULL DEFAULT 0,
  `categoria` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(200) NOT NULL,
  `image` VARCHAR(150) NULL DEFAULT 'undefined.jpg',
  `created_at` TIMESTAMP NULL,
  `updated_at` TIMESTAMP NULL,
  `id_categoria` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `idCategoria_idx` (`id_categoria` ASC),
  CONSTRAINT `idCategoria`
    FOREIGN KEY (`id_categoria`)
    REFERENCES `buenasTintasDB`.`categories` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `buenasTintasDB`.`carts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `buenasTintasDB`.`carts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_usuario` INT NOT NULL,
  `id_producto` INT NOT NULL,
  `cantidad` INT NOT NULL,
  `realized_at` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  INDEX `idUsuario_idx` (`id_usuario` ASC),
  INDEX `idProducto_idx` (`id_producto` ASC),
  CONSTRAINT `idUsuario`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `buenasTintasDB`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `idProducto`
    FOREIGN KEY (`id_producto`)
    REFERENCES `buenasTintasDB`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
