SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

CREATE SCHEMA IF NOT EXISTS `Ventas` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `Ventas` ;

-- -----------------------------------------------------
-- Table `Ventas`.`Proveedor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Ventas`.`Proveedor` (
  `NITProveedor` VARCHAR(45) NOT NULL,
  `nombre` VARCHAR(100) NOT NULL,
  `direccion` VARCHAR(200) NOT NULL,
  `telefono` VARCHAR(45) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`NITProveedor`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Ventas`.`Producto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Ventas`.`Producto` (
  `idProducto` INT NOT NULL,
  `descripcion` VARCHAR(45) NOT NULL,
  `Venta` DECIMAL(12,2) NOT NULL,
  `costo` DECIMAL(12,2) NOT NULL,
  `iva` DECIMAL(4,2) NOT NULL,
  `stock` DECIMAL(12,2) NOT NULL,
  PRIMARY KEY (`idProducto`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Ventas`.`Venta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Ventas`.`Venta` (
  `idVenta` INT NOT NULL AUTO_INCREMENT,
  `fechaEmision` DATETIME NOT NULL,
  `subtotal` DECIMAL(12,2) NOT NULL,
  `iva` DECIMAL(12,2) NOT NULL,
  `observaciones` LONGTEXT NOT NULL,
  PRIMARY KEY (`idVenta`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Ventas`.`Detalle`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Ventas`.`Detalle` (
  `idProducto` INT NOT NULL,
  `Venta_idVenta` INT NOT NULL,
  `descripcion` VARCHAR(45) NOT NULL,
  `Venta` DECIMAL(12,2) NOT NULL,
  `costo` DECIMAL(12,2) NOT NULL,
  `iva` DECIMAL(4,2) NOT NULL,
  `stock` DECIMAL(12,2) NOT NULL,
  PRIMARY KEY (`idProducto`),
  INDEX `fk_Detalle_Venta_idx` (`Venta_idVenta` ASC),
  CONSTRAINT `fk_Detalle_Venta`
    FOREIGN KEY (`Venta_idVenta`)
    REFERENCES `Ventas`.`Venta` (`idVenta`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
