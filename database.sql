-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema viatick-test
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema viatick-test
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `viatick-test` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `viatick-test` ;

-- -----------------------------------------------------
-- Table `viatick-test`.`attendances`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `viatick-test`.`attendances` (
  `id` INT NOT NULL,
  `userId` INT NOT NULL,
  `loginAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `viatick-test`.`membershipTypes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `viatick-test`.`membershipTypes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL DEFAULT NULL,
  `isActive` TINYINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `viatick-test`.`roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `viatick-test`.`roles` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `isActive` TINYINT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `viatick-test`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `viatick-test`.`users` (
  `id` VARCHAR(200) NOT NULL,
  `email` VARCHAR(200) NOT NULL,
  `password` VARCHAR(200) NOT NULL,
  `firstName` VARCHAR(45) NOT NULL,
  `lastName` VARCHAR(45) NOT NULL,
  `membershipType` INT NOT NULL,
  `companyName` VARCHAR(200) NOT NULL,
  `designation` VARCHAR(45) NULL DEFAULT NULL,
  `membershipPeriod` INT NOT NULL,
  `startDate` DATETIME NOT NULL,
  `endDate` DATETIME NOT NULL,
  `status` TINYINT NOT NULL,
  `attendance_status` TINYINT NOT NULL,
  `roleId` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  INDEX `fk_role_id` (`roleId` ASC) VISIBLE,
  INDEX `fk_membershipType_id_idx` (`membershipType` ASC) VISIBLE,
  CONSTRAINT `fk_membershipType_id`
    FOREIGN KEY (`membershipType`)
    REFERENCES `viatick-test`.`membershipTypes` (`id`),
  CONSTRAINT `fk_role_id`
    FOREIGN KEY (`roleId`)
    REFERENCES `viatick-test`.`roles` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

INSERT INTO `viatick-test`.`roles`
(`id`,
`name`,
`isActive`)
VALUES
(1, "admin", 1),
(2, "employee", 1),
(3, "customer", 1);

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
