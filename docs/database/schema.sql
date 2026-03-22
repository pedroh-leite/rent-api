CREATE DATABASE `rentDB` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

-- rentDB.users definição

CREATE TABLE `users` (
  `guid` char(36) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `lastname` varchar(50) DEFAULT NULL,
  `birth_date` date DEFAULT NULL,
  `email` varchar(75) DEFAULT NULL,
  `cellphone` char(11) DEFAULT NULL,
  PRIMARY KEY (`guid`),
  UNIQUE KEY `guid` (`guid`),
  UNIQUE KEY `unique_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- rentDB.properties definição

CREATE TABLE `properties` (
  `guid` char(36) NOT NULL,
  `owner_guid` char(36) NOT NULL,
  `address` char(75) DEFAULT NULL,
  `number` char(6) DEFAULT NULL,
  `complement` char(50) DEFAULT NULL,
  `neighborhood` char(50) DEFAULT NULL,
  `city` char(25) DEFAULT NULL,
  `country` char(50) DEFAULT NULL,
  `cep` char(8) DEFAULT NULL,
  `number_of_rooms` char(3) DEFAULT NULL,
  PRIMARY KEY (`guid`),
  UNIQUE KEY `guid` (`guid`),
  KEY `fk_propertie_x_user` (`owner_guid`),
  CONSTRAINT `fk_propertie_x_user` FOREIGN KEY (`owner_guid`) REFERENCES `users` (`guid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

