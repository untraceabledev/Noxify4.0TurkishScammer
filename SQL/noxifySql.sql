-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.32-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.6.0.6765
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for noxify
CREATE DATABASE IF NOT EXISTS `noxify` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `noxify`;

-- Dumping structure for table noxify.abdultaxi_duty
CREATE TABLE IF NOT EXISTS `abdultaxi_duty` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `src` int(255) DEFAULT 0,
  `cid` int(255) DEFAULT 0,
  `name` varchar(255) DEFAULT NULL,
  `drivers` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `phoneNumber` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=248 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

-- Data exporting was unselected.

-- Dumping structure for table noxify.account
CREATE TABLE IF NOT EXISTS `account` (
  `acc_numb` int(11) NOT NULL AUTO_INCREMENT,
  `id` int(11) DEFAULT NULL,
  `name` varchar(255) NOT NULL DEFAULT 'Personal Account',
  `account_type` int(11) DEFAULT NULL,
  `account_balance` int(10) DEFAULT 0,
  `is_frozen` tinyint(1) DEFAULT 0,
  `is_monitored` tinyint(4) DEFAULT 0,
  PRIMARY KEY (`acc_numb`),
  UNIQUE KEY `id` (`id`),
  KEY `account_type_fk_idx` (`account_type`) USING BTREE,
  CONSTRAINT `account_type_fk` FOREIGN KEY (`account_type`) REFERENCES `account_type` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

-- Data exporting was unselected.

-- Dumping structure for table noxify.account_access
CREATE TABLE IF NOT EXISTS `account_access` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `account_id` int(11) DEFAULT NULL,
  `character_id` int(11) unsigned DEFAULT NULL,
  `access_level` tinyint(5) DEFAULT NULL,
  `is_owner` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.account_type
CREATE TABLE IF NOT EXISTS `account_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `public_permission` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.article
CREATE TABLE IF NOT EXISTS `article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `type_id` int(11) NOT NULL,
  `images` text DEFAULT NULL,
  `creation_date` datetime NOT NULL,
  `modification_date` datetime NOT NULL,
  `author_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.article_authors
CREATE TABLE IF NOT EXISTS `article_authors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `article_id` int(11) NOT NULL,
  `author_id` int(11) NOT NULL,
  `is_deleted` tinyint(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.bank_transactions
CREATE TABLE IF NOT EXISTS `bank_transactions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `identifier` varchar(40) NOT NULL,
  `sender` varchar(50) NOT NULL,
  `target` varchar(50) NOT NULL,
  `label` varchar(255) NOT NULL DEFAULT '',
  `amount` int(11) NOT NULL,
  `iden` varchar(50) NOT NULL DEFAULT '',
  `type` varchar(50) NOT NULL DEFAULT 'income',
  `date` varchar(255) DEFAULT NULL,
  `business_id` varchar(255) DEFAULT NULL,
  `transaction_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=48751 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.bans
CREATE TABLE IF NOT EXISTS `bans` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `banid` varchar(500) NOT NULL DEFAULT '0',
  `steam` varchar(500) NOT NULL DEFAULT '0',
  `name` varchar(500) NOT NULL DEFAULT '0',
  `license` varchar(500) NOT NULL DEFAULT '0',
  `license2` varchar(500) NOT NULL DEFAULT '0',
  `xbox` varchar(500) DEFAULT '0',
  `live` varchar(500) DEFAULT '0',
  `discord` varchar(500) DEFAULT '0',
  `cfx` varchar(500) NOT NULL DEFAULT '0',
  `ip` varchar(50) NOT NULL DEFAULT '0',
  `token` longtext NOT NULL,
  `bannedby` varchar(500) NOT NULL DEFAULT '0',
  `bannedon` int(11) NOT NULL DEFAULT 0,
  `expire` longtext NOT NULL DEFAULT '0',
  `reason` varchar(500) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.beehives
CREATE TABLE IF NOT EXISTS `beehives` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `coords` longtext NOT NULL,
  `heading` int(11) DEFAULT 0,
  `timestamp` int(11) DEFAULT 0,
  `has_queen` varchar(50) DEFAULT '0',
  `last_harvest` int(11) DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci AVG_ROW_LENGTH=16384;

-- Data exporting was unselected.

-- Dumping structure for table noxify.boosting
CREATE TABLE IF NOT EXISTS `boosting` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `identifier` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `vehicle` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `owner` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `expires` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `units` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `ExtraVin` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `coords` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.boosting_users
CREATE TABLE IF NOT EXISTS `boosting_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `identifier` int(11) DEFAULT NULL,
  `level` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `cooldown` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.businesses
CREATE TABLE IF NOT EXISTS `businesses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `business_id` varchar(255) NOT NULL,
  `business_name` varchar(255) DEFAULT NULL,
  `employees` longtext DEFAULT NULL,
  `roles` longtext DEFAULT NULL,
  `bank_id` varchar(950) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=119 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.casino_log
CREATE TABLE IF NOT EXISTS `casino_log` (
  `character_id` int(11) DEFAULT NULL,
  `action` varchar(50) DEFAULT NULL,
  `amount` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.casino_wheelspins
CREATE TABLE IF NOT EXISTS `casino_wheelspins` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cid` int(11) DEFAULT NULL,
  `roll` int(11) DEFAULT NULL,
  `prize_index` int(11) DEFAULT NULL,
  `prize` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=10972 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.cerberus_center
CREATE TABLE IF NOT EXISTS `cerberus_center` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `offices_business_id` varchar(255) NOT NULL,
  `offices_business_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=188 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.characters
CREATE TABLE IF NOT EXISTS `characters` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `owner` varchar(50) DEFAULT NULL,
  `first_name` varchar(50) NOT NULL DEFAULT 'John',
  `last_name` varchar(50) NOT NULL DEFAULT 'Doe',
  `date_created` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `dob` varchar(50) DEFAULT 'NULL',
  `cash` int(9) DEFAULT 500,
  `bank` int(9) NOT NULL DEFAULT 5000,
  `bankid` int(11) NOT NULL DEFAULT 12,
  `licenses` longtext DEFAULT '{}',
  `phone_number` varchar(15) DEFAULT NULL,
  `story` text NOT NULL,
  `is_burner` varchar(15) DEFAULT 'false',
  `job` varchar(255) DEFAULT 'unemployed',
  `job2` varchar(255) DEFAULT 'none',
  `new` int(1) NOT NULL DEFAULT 1,
  `deleted` int(11) NOT NULL DEFAULT 0,
  `gender` int(1) NOT NULL DEFAULT 0,
  `jail_time` int(11) NOT NULL DEFAULT 0,
  `is_dead` varchar(50) DEFAULT NULL,
  `deathes` int(11) DEFAULT 1,
  `jail_time_mobster` int(11) DEFAULT 0,
  `overwrites` mediumtext DEFAULT NULL,
  `dirty_money` int(11) NOT NULL DEFAULT 0,
  `gang_type` int(11) NOT NULL DEFAULT 0,
  `judge_type` int(11) NOT NULL DEFAULT 0,
  `iswjob` int(11) NOT NULL DEFAULT 0,
  `metaData` varchar(1520) DEFAULT '{}',
  `stress_level` int(11) DEFAULT 0,
  `bones` mediumtext DEFAULT '{}',
  `emotes` varchar(4160) DEFAULT '{}',
  `paycheck` int(11) DEFAULT 0,
  `rehab` int(12) DEFAULT 0,
  `meta` mediumtext NOT NULL DEFAULT 'move_m@casual@d',
  `dna` text DEFAULT '{}',
  `casino_chip_count` int(11) DEFAULT 0,
  `gallery` longtext DEFAULT NULL,
  `profilepic` varchar(255) DEFAULT NULL,
  `information` longtext DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `keys` varchar(50) DEFAULT NULL,
  `cards` longtext DEFAULT '{}',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=762 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.characters_cars
CREATE TABLE IF NOT EXISTS `characters_cars` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `vin` varchar(50) DEFAULT NULL,
  `cid` int(11) DEFAULT NULL,
  `model` varchar(50) DEFAULT NULL,
  `state` longtext DEFAULT NULL,
  `plate` varchar(255) NOT NULL DEFAULT '',
  `garage` varchar(50) DEFAULT 'garage_alta',
  `name` varchar(50) DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `size` varchar(50) DEFAULT NULL,
  `degradation` longtext DEFAULT '100,100,100,100,100,100,100,100',
  `metadata` longtext DEFAULT NULL,
  `damage` longtext DEFAULT NULL,
  `mods` longtext NOT NULL,
  `appearance` longtext DEFAULT NULL,
  `records` longtext DEFAULT NULL,
  `vinScratched` varchar(50) DEFAULT 'false',
  `purchase_price` float DEFAULT NULL,
  `financed` int(11) NOT NULL DEFAULT 0,
  `last_payment` int(11) DEFAULT 0,
  `payments_left` int(3) DEFAULT 0,
  `repoed` int(11) NOT NULL DEFAULT 0,
  `garage_info` varchar(50) DEFAULT NULL,
  `newcoords` longtext DEFAULT NULL,
  `location` longtext DEFAULT NULL,
  `vehiclepic` varchar(255) DEFAULT NULL,
  `information` longtext DEFAULT NULL,
  `shared_job` varchar(255) DEFAULT NULL,
  `veh_outfit` longtext DEFAULT NULL,
  `sellable` varchar(255) DEFAULT 'false',
  `spawnable` varchar(255) DEFAULT 'false',
  PRIMARY KEY (`id`),
  UNIQUE KEY `vin` (`vin`) USING BTREE,
  KEY `cid` (`cid`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.characters_weapons
CREATE TABLE IF NOT EXISTS `characters_weapons` (
  `id` int(11) NOT NULL DEFAULT 0,
  `type` varchar(255) DEFAULT NULL,
  `ammo` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.character_current
CREATE TABLE IF NOT EXISTS `character_current` (
  `owner` varchar(50) DEFAULT NULL,
  `cid` int(11) DEFAULT NULL,
  `model` varchar(50) DEFAULT NULL,
  `hairColor` mediumtext DEFAULT NULL,
  `drawables` mediumtext DEFAULT NULL,
  `props` mediumtext DEFAULT NULL,
  `fade` mediumtext DEFAULT '{"overlay":false,"collection":false,"layer":0}',
  `features` mediumtext DEFAULT NULL,
  `headblend` mediumtext DEFAULT NULL,
  `overlays` mediumtext DEFAULT NULL,
  `eyeColor` mediumtext DEFAULT NULL,
  `fadeLayer` mediumtext DEFAULT NULL,
  `tattoos` mediumtext DEFAULT NULL,
  `decorations` mediumtext DEFAULT NULL,
  `isNew` mediumtext DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.character_emails
CREATE TABLE IF NOT EXISTS `character_emails` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cid` varchar(255) NOT NULL,
  `from` varchar(255) DEFAULT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `message` varchar(255) DEFAULT NULL,
  `time` int(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28464 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.character_face
CREATE TABLE IF NOT EXISTS `character_face` (
  `cid` int(11) DEFAULT NULL,
  `hairColor` mediumtext DEFAULT NULL,
  `headBlend` mediumtext DEFAULT NULL,
  `headOverlay` mediumtext DEFAULT NULL,
  `headStructure` mediumtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.character_motel
CREATE TABLE IF NOT EXISTS `character_motel` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cid` int(11) NOT NULL,
  `roomnum` int(11) DEFAULT NULL,
  `building_type` int(11) DEFAULT NULL,
  `ptype` text DEFAULT NULL,
  `btype` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.character_outfits
CREATE TABLE IF NOT EXISTS `character_outfits` (
  `cid` int(11) DEFAULT NULL,
  `model` varchar(50) DEFAULT NULL,
  `name` text DEFAULT NULL,
  `tag` text DEFAULT NULL,
  `slot` tinyint(5) DEFAULT NULL,
  `drawables` text DEFAULT '{}',
  `props` text DEFAULT '{}',
  `hairColor` text DEFAULT '{}',
  `fadeLayer` int(11) DEFAULT 0,
  `status` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.character_passes
CREATE TABLE IF NOT EXISTS `character_passes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cid` int(11) NOT NULL,
  `rank` int(11) NOT NULL DEFAULT 1,
  `name` text NOT NULL,
  `giver` text NOT NULL,
  `pass_type` text NOT NULL,
  `business_name` text NOT NULL,
  `bank` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.character_tattoos
CREATE TABLE IF NOT EXISTS `character_tattoos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cid` int(11) NOT NULL DEFAULT 0,
  `tattoos` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.cryptos
CREATE TABLE IF NOT EXISTS `cryptos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cryptoid` int(255) NOT NULL,
  `cryptoname` varchar(255) DEFAULT NULL,
  `cryptotag` varchar(255) DEFAULT NULL,
  `cryptoicon` varchar(255) DEFAULT NULL,
  `buyable` int(1) DEFAULT NULL,
  `exchangeable` int(1) DEFAULT NULL,
  `sellable` int(1) DEFAULT NULL,
  `value` int(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.dark_market
CREATE TABLE IF NOT EXISTS `dark_market` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(255) NOT NULL,
  `product_price` varchar(255) DEFAULT NULL,
  `product_itemid` varchar(255) DEFAULT NULL,
  `cryptoid` int(1) DEFAULT NULL,
  `product_icon` varchar(255) DEFAULT NULL,
  `zone` varchar(255) DEFAULT 'heist1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.debt
CREATE TABLE IF NOT EXISTS `debt` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cid` int(11) DEFAULT NULL,
  `type` varchar(50) DEFAULT 'vehicle',
  `data` text DEFAULT NULL,
  `amount` int(11) DEFAULT 1000,
  `nextPayment` int(11) DEFAULT NULL,
  `totalPayments` int(11) DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=4263 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.document
CREATE TABLE IF NOT EXISTS `document` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cid` int(11) DEFAULT NULL,
  `type_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` varchar(255) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.document_access
CREATE TABLE IF NOT EXISTS `document_access` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `document_id` int(11) NOT NULL,
  `character_id` int(11) NOT NULL,
  `can_sign` tinyint(1) NOT NULL DEFAULT 0,
  `signed` tinyint(1) NOT NULL DEFAULT 0,
  `is_deleted` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.document_type
CREATE TABLE IF NOT EXISTS `document_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `editable` varchar(50) NOT NULL DEFAULT '',
  `shareable` varchar(50) NOT NULL DEFAULT '',
  `can_sign` varchar(50) NOT NULL DEFAULT '',
  `max_signatures` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.doj_duty
CREATE TABLE IF NOT EXISTS `doj_duty` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `src` int(255) DEFAULT 0,
  `cid` int(255) DEFAULT 0,
  `name` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `job` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=248 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.driving_tests
CREATE TABLE IF NOT EXISTS `driving_tests` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cid` int(11) DEFAULT NULL,
  `icid` int(11) DEFAULT NULL,
  `instructor` varchar(255) DEFAULT NULL,
  `timestamp` text DEFAULT NULL,
  `points` varchar(255) DEFAULT '0',
  `passed` varchar(255) DEFAULT 'false',
  `results` text DEFAULT '{}',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.fine_types
CREATE TABLE IF NOT EXISTS `fine_types` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `label` varchar(255) DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  `jailtime` int(11) DEFAULT 0,
  `category` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=203 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.gangs
CREATE TABLE IF NOT EXISTS `gangs` (
  `cid` int(11) NOT NULL DEFAULT 0,
  `gang_name` mediumtext NOT NULL,
  `reputation` int(11) NOT NULL DEFAULT 0,
  `leader` mediumtext NOT NULL DEFAULT '0',
  `ingang` mediumtext NOT NULL,
  `mission_complete` mediumtext DEFAULT NULL,
  PRIMARY KEY (`cid`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.gas_stations
CREATE TABLE IF NOT EXISTS `gas_stations` (
  `num` int(11) NOT NULL AUTO_INCREMENT,
  `id` varchar(255) NOT NULL,
  `gas_station_name` varchar(255) NOT NULL,
  `upgrades` longtext NOT NULL,
  `data` longtext NOT NULL,
  `settings` longtext DEFAULT NULL,
  `fuel` int(11) DEFAULT 0,
  PRIMARY KEY (`num`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.gloveboxitems
CREATE TABLE IF NOT EXISTS `gloveboxitems` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `plate` varchar(255) NOT NULL,
  `items` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`plate`),
  KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.graffiti
CREATE TABLE IF NOT EXISTS `graffiti` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `model` varchar(255) NOT NULL DEFAULT '',
  `coordinates` longtext DEFAULT NULL,
  `rotation` longtext DEFAULT NULL,
  `metaData` longtext DEFAULT NULL,
  `randomId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.hospital_patients
CREATE TABLE IF NOT EXISTS `hospital_patients` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cid` int(11) NOT NULL,
  `level` int(11) NOT NULL,
  `illness` text NOT NULL DEFAULT '',
  `time` int(11) NOT NULL,
  `icu` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.hotels
CREATE TABLE IF NOT EXISTS `hotels` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `owner` int(11) DEFAULT NULL,
  `main` varchar(50) DEFAULT NULL,
  `room` varchar(50) NOT NULL DEFAULT '0',
  `tenants` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL DEFAULT '[]',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.housing
CREATE TABLE IF NOT EXISTS `housing` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `hid` varchar(255) NOT NULL,
  `cid` int(11) NOT NULL,
  `street` varchar(255) DEFAULT NULL,
  `status` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT 'locked',
  `information` text DEFAULT NULL,
  `objects` text DEFAULT NULL,
  `last_payment` int(11) NOT NULL DEFAULT 0,
  `upfront` int(11) DEFAULT NULL,
  `garages` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT '{}',
  `force_locked` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT 'unlocked',
  `due` int(11) DEFAULT NULL,
  `overall` int(11) DEFAULT NULL,
  `days` int(11) DEFAULT NULL,
  `can_pay` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT 'true',
  `category` varchar(250) NOT NULL DEFAULT 'housing',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `hid` (`hid`),
  UNIQUE KEY `street` (`street`),
  KEY `cid_housing_fk_idx` (`cid`),
  CONSTRAINT `cid_housing_fk` FOREIGN KEY (`cid`) REFERENCES `characters` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.housing_keys
CREATE TABLE IF NOT EXISTS `housing_keys` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `hid` varchar(255) NOT NULL,
  `cid` int(11) NOT NULL,
  `housename` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `name` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `garages` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `hid_housing_keys_fk_idx` (`hid`),
  KEY `cid_housing_keys_fk_idx` (`cid`),
  CONSTRAINT `cid_housing_keys_fk` FOREIGN KEY (`cid`) REFERENCES `characters` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `hid_housing_keys_fk` FOREIGN KEY (`hid`) REFERENCES `housing` (`hid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.housing_price
CREATE TABLE IF NOT EXISTS `housing_price` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `hid` varchar(50) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `street` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=967 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.inventory
CREATE TABLE IF NOT EXISTS `inventory` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `item_id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL DEFAULT '0',
  `information` text DEFAULT NULL,
  `slot` int(11) NOT NULL,
  `dropped` tinyint(1) NOT NULL DEFAULT 0,
  `creationDate` bigint(20) NOT NULL DEFAULT 0,
  `quality` int(11) DEFAULT 100,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=38090 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.jobs_whitelist
CREATE TABLE IF NOT EXISTS `jobs_whitelist` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `owner` varchar(50) DEFAULT NULL,
  `cid` int(11) DEFAULT NULL,
  `job` varchar(50) DEFAULT 'unemployed',
  `rank` int(11) DEFAULT 0,
  `callsign` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `department` varchar(50) DEFAULT 'police',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.logs
CREATE TABLE IF NOT EXISTS `logs` (
  `type` text DEFAULT NULL,
  `log` text DEFAULT NULL,
  `data` text DEFAULT NULL,
  `cid` int(11) DEFAULT NULL,
  `steamid` varchar(255) DEFAULT NULL,
  `date` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.mdw_charges
CREATE TABLE IF NOT EXISTS `mdw_charges` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(255) NOT NULL,
  `color` varchar(255) DEFAULT NULL,
  `charges` longtext DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.mdw_evidence
CREATE TABLE IF NOT EXISTS `mdw_evidence` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(255) NOT NULL,
  `identifier` longtext DEFAULT NULL,
  `description` longtext DEFAULT NULL,
  `cid` int(255) DEFAULT NULL,
  `incidentId` int(255) DEFAULT NULL,
  `tags` longtext DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2150 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.mdw_incidents
CREATE TABLE IF NOT EXISTS `mdw_incidents` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `author` varchar(255) DEFAULT NULL,
  `unix` varchar(255) DEFAULT NULL,
  `info` longtext DEFAULT NULL,
  `evidence` longtext DEFAULT NULL,
  `officers` longtext DEFAULT NULL,
  `persons` longtext DEFAULT NULL,
  `tags` longtext DEFAULT NULL,
  `vehicles` longtext DEFAULT NULL,
  `criminals` longtext DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.mdw_incidents_ems
CREATE TABLE IF NOT EXISTS `mdw_incidents_ems` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `author` varchar(255) DEFAULT NULL,
  `unix` varchar(255) DEFAULT NULL,
  `info` longtext DEFAULT NULL,
  `ems` longtext DEFAULT NULL,
  `persons` longtext DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.mdw_warrants
CREATE TABLE IF NOT EXISTS `mdw_warrants` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cid` int(255) DEFAULT 0,
  `incidentid` int(255) DEFAULT 0,
  `expiry` longtext DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.music_plays
CREATE TABLE IF NOT EXISTS `music_plays` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `song_id` int(11) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `plays` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.music_record
CREATE TABLE IF NOT EXISTS `music_record` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `artist` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.nlts_duty
CREATE TABLE IF NOT EXISTS `nlts_duty` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `src` int(255) DEFAULT 0,
  `cid` int(255) DEFAULT 0,
  `name` varchar(255) DEFAULT NULL,
  `drivers` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `phoneNumber` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=248 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

-- Data exporting was unselected.

-- Dumping structure for table noxify.objects
CREATE TABLE IF NOT EXISTS `objects` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `model` varchar(255) NOT NULL,
  `coordinates` longtext DEFAULT NULL,
  `metaData` longtext NOT NULL DEFAULT '{"isAdmin":true}',
  `group` varchar(255) NOT NULL,
  `randomId` int(255) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.paychecks
CREATE TABLE IF NOT EXISTS `paychecks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cid` int(255) DEFAULT NULL,
  `job` varchar(255) DEFAULT NULL,
  `amount` int(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16870 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.phone_calendar
CREATE TABLE IF NOT EXISTS `phone_calendar` (
  `id` int(255) NOT NULL DEFAULT 0,
  `cid` int(255) DEFAULT 0,
  `host` varchar(50) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `timestamp` timestamp NULL DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `attendees` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `shareable` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

-- Data exporting was unselected.

-- Dumping structure for table noxify.phone_calls
CREATE TABLE IF NOT EXISTS `phone_calls` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `citizenid` int(255) NOT NULL,
  `number` varchar(255) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.phone_contacts
CREATE TABLE IF NOT EXISTS `phone_contacts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `character_id` varchar(50) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `number` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `citizenid` (`character_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.phone_email_contacts
CREATE TABLE IF NOT EXISTS `phone_email_contacts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `character_id` varchar(50) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  KEY `citizenid` (`character_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

-- Data exporting was unselected.

-- Dumping structure for table noxify.phone_message
CREATE TABLE IF NOT EXISTS `phone_message` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `number_from` varchar(10) NOT NULL,
  `number_to` varchar(10) NOT NULL,
  `message` varchar(255) NOT NULL DEFAULT '',
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp(),
  `received` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=171 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.phone_twatter_blue
CREATE TABLE IF NOT EXISTS `phone_twatter_blue` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cid` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.phone_tweets
CREATE TABLE IF NOT EXISTS `phone_tweets` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cid` int(11) DEFAULT NULL,
  `text` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `timestamp` timestamp NULL DEFAULT current_timestamp(),
  `character` varchar(1520) DEFAULT '{}',
  `isBlue` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4339 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci CHECKSUM=1 ROW_FORMAT=COMPACT;

-- Data exporting was unselected.

-- Dumping structure for table noxify.phone_yp
CREATE TABLE IF NOT EXISTS `phone_yp` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cid` int(255) DEFAULT 0,
  `character` varchar(255) DEFAULT NULL,
  `number` varchar(255) DEFAULT NULL,
  `text` varchar(255) DEFAULT NULL,
  `timestamp` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3928 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.pickups
CREATE TABLE IF NOT EXISTS `pickups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cid` varchar(255) NOT NULL,
  `itemid` varchar(255) DEFAULT NULL,
  `information` varchar(255) DEFAULT '{}',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1102 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.playerstattoos
CREATE TABLE IF NOT EXISTS `playerstattoos` (
  `identifier` int(11) DEFAULT NULL,
  `tattoos` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.player_skins
CREATE TABLE IF NOT EXISTS `player_skins` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `citizenid` varchar(50) NOT NULL DEFAULT '',
  `model` varchar(50) NOT NULL DEFAULT '0',
  `skin` text NOT NULL,
  `tatoos` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=21686 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.player_vehicles
CREATE TABLE IF NOT EXISTS `player_vehicles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `license` varchar(50) DEFAULT NULL,
  `citizenid` varchar(50) DEFAULT NULL,
  `vehicle` varchar(50) DEFAULT NULL,
  `hash` varchar(50) DEFAULT NULL,
  `mods` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `plate` varchar(50) NOT NULL,
  `fakeplate` varchar(50) DEFAULT NULL,
  `garage` varchar(50) DEFAULT NULL,
  `fuel` int(11) DEFAULT 100,
  `engine` float DEFAULT 1000,
  `body` float DEFAULT 1000,
  `state` int(11) DEFAULT 1,
  `depotprice` int(11) NOT NULL DEFAULT 0,
  `drivingdistance` int(50) DEFAULT NULL,
  `status` text DEFAULT NULL,
  `balance` int(11) NOT NULL DEFAULT 0,
  `paymentamount` int(11) NOT NULL DEFAULT 0,
  `paymentsleft` int(11) NOT NULL DEFAULT 0,
  `financetime` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `plate` (`plate`),
  KEY `citizenid` (`citizenid`),
  KEY `license` (`license`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.progression
CREATE TABLE IF NOT EXISTS `progression` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cid` int(11) DEFAULT 0,
  `rep` longtext DEFAULT '{"hackexp":0,"streetrep":0,"craftingrep":0,"guncrafting":0,"bootsting":0}',
  `buffs` longtext DEFAULT '{"stressblock":0, "stressgain":0, "fullness":0, "jobluck":0, "alert":0, "swimming":0, "stamina":0}',
  `skills` longtext DEFAULT '{"strength":0, "intelligence":0}',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.racing_aliases
CREATE TABLE IF NOT EXISTS `racing_aliases` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `alias` varchar(50) DEFAULT NULL,
  `cid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.racing_races
CREATE TABLE IF NOT EXISTS `racing_races` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `creator` varchar(255) NOT NULL,
  `distance` int(11) NOT NULL,
  `type` varchar(255) NOT NULL,
  `thumbnail` varchar(255) NOT NULL,
  `checkpoints` longtext NOT NULL,
  `fastest_time` int(11) DEFAULT 0,
  `fastest_name` varchar(255) DEFAULT 'N/A',
  `races` int(11) DEFAULT 0,
  `isPolice` int(11) DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `id` (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.racing_tracks
CREATE TABLE IF NOT EXISTS `racing_tracks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `checkpoints` text DEFAULT NULL,
  `track_name` text DEFAULT NULL,
  `creator` text DEFAULT NULL,
  `distance` text DEFAULT NULL,
  `races` text DEFAULT NULL,
  `fastest_car` text DEFAULT NULL,
  `fastest_name` text DEFAULT NULL,
  `fastest_lap` int(11) DEFAULT NULL,
  `fastest_sprint` int(11) DEFAULT NULL,
  `fastest_sprint_name` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `data` text DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.restaurants
CREATE TABLE IF NOT EXISTS `restaurants` (
  `pId` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `foodItems` longtext DEFAULT '[]',
  `menu` longtext DEFAULT '[]',
  `safeCash` int(11) DEFAULT 0,
  `openHour` varchar(255) DEFAULT '0:00',
  `closeHour` varchar(255) DEFAULT '0:00',
  `paycheck` longtext DEFAULT NULL,
  PRIMARY KEY (`pId`),
  KEY `code` (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.scenes
CREATE TABLE IF NOT EXISTS `scenes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `coords` longtext NOT NULL,
  `text` varchar(255) DEFAULT NULL,
  `distance` varchar(255) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `caret` varchar(255) DEFAULT NULL,
  `font` varchar(255) DEFAULT NULL,
  `solid` varchar(255) DEFAULT NULL,
  `background` longtext DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3168 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.stashitems
CREATE TABLE IF NOT EXISTS `stashitems` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `stash` varchar(255) NOT NULL,
  `items` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`stash`),
  KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.storage
CREATE TABLE IF NOT EXISTS `storage` (
  `id` int(11) NOT NULL,
  `size` varchar(255) DEFAULT NULL,
  `coordinates` text DEFAULT NULL,
  `placed_by` varchar(500) DEFAULT NULL,
  `placed_at` int(11) DEFAULT unix_timestamp(),
  `despawn_at` int(11) DEFAULT unix_timestamp(),
  `is_locked` varchar(500) DEFAULT NULL,
  `key_code` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.storages_units
CREATE TABLE IF NOT EXISTS `storages_units` (
  `id` int(11) NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `buy` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.tax_asset
CREATE TABLE IF NOT EXISTS `tax_asset` (
  `id` int(11) NOT NULL,
  `base_price` int(11) NOT NULL,
  `tax_category_id` int(11) NOT NULL,
  `asset_type` enum('vehicle','property') NOT NULL DEFAULT 'vehicle',
  `asset_id` int(11) unsigned NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.tax_category
CREATE TABLE IF NOT EXISTS `tax_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci AVG_ROW_LENGTH=16384;

-- Data exporting was unselected.

-- Dumping structure for table noxify.tax_history
CREATE TABLE IF NOT EXISTS `tax_history` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mayor_cid` int(11) unsigned NOT NULL,
  `end_date` int(11) DEFAULT unix_timestamp(current_timestamp()),
  `tax_level` int(11) DEFAULT NULL,
  `tax_category_id` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.tax_level
CREATE TABLE IF NOT EXISTS `tax_level` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL DEFAULT '',
  `level` int(11) DEFAULT NULL,
  `new_level` int(11) DEFAULT NULL,
  `date` timestamp NULL DEFAULT current_timestamp(),
  `is_editable` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.tax_payment
CREATE TABLE IF NOT EXISTS `tax_payment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tax_payment_id` int(11) DEFAULT NULL,
  `amount` decimal(8,2) DEFAULT NULL,
  `due_date` int(11) DEFAULT NULL,
  `is_paid` bit(1) NOT NULL DEFAULT unix_timestamp(current_timestamp() + interval 7 day),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.transaction_log
CREATE TABLE IF NOT EXISTS `transaction_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `transaction_id` varchar(36) NOT NULL DEFAULT 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxx',
  `payee_account_id` int(11) DEFAULT NULL,
  `receiver_account_id` int(11) DEFAULT NULL,
  `change` int(11) DEFAULT NULL,
  `comment` varchar(255) DEFAULT NULL,
  `triggered_by` int(11) DEFAULT NULL,
  `updated_at` int(11) DEFAULT unix_timestamp(),
  `tax_level` int(11) NOT NULL,
  `tax_category` int(11) NOT NULL,
  `transaction_type` enum('deposit','withdraw','transfer','payslip','venmo','purchase','forfeiture','grant') NOT NULL DEFAULT 'deposit',
  PRIMARY KEY (`id`) USING BTREE,
  KEY `transaction_id` (`transaction_id`) USING BTREE,
  KEY `transaction_log_ibfk_3` (`payee_account_id`) USING BTREE,
  KEY `transaction_log_ibfk_2` (`payee_account_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.trunkitems
CREATE TABLE IF NOT EXISTS `trunkitems` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `plate` varchar(255) NOT NULL,
  `items` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`plate`),
  KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `hex_id` varchar(100) DEFAULT NULL,
  `steam_id` varchar(50) DEFAULT NULL,
  `community_id` varchar(100) DEFAULT NULL,
  `license` varchar(255) DEFAULT NULL,
  `name` varchar(255) NOT NULL DEFAULT 'Uknown',
  `ip` varchar(50) NOT NULL DEFAULT 'Uknown',
  `rank` varchar(50) NOT NULL DEFAULT 'dev',
  `date_created` timestamp NOT NULL DEFAULT current_timestamp(),
  `controls` text DEFAULT '{}',
  `settings` text DEFAULT '{}',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.user_crypto
CREATE TABLE IF NOT EXISTS `user_crypto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cryptoid` varchar(255) NOT NULL,
  `cryptoamount` int(11) DEFAULT NULL,
  `cryptocid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.user_licenses
CREATE TABLE IF NOT EXISTS `user_licenses` (
  `owner` longtext NOT NULL,
  `type` longtext NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.user_messages
CREATE TABLE IF NOT EXISTS `user_messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sender` varchar(10) NOT NULL,
  `receiver` varchar(10) NOT NULL,
  `message` varchar(255) NOT NULL DEFAULT '0',
  `date` timestamp NOT NULL DEFAULT current_timestamp(),
  `isRead` int(11) NOT NULL DEFAULT 0,
  `time` longtext DEFAULT 0,
  `unix` longtext DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=24943 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.user_priors
CREATE TABLE IF NOT EXISTS `user_priors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cid` int(255) NOT NULL,
  `charge` varchar(255) DEFAULT NULL,
  `times` int(255) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.user_settings
CREATE TABLE IF NOT EXISTS `user_settings` (
  `hex_id` varchar(255) NOT NULL DEFAULT '',
  `settings` varchar(255) DEFAULT '{}',
  PRIMARY KEY (`hex_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.vehicle_display
CREATE TABLE IF NOT EXISTS `vehicle_display` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `model` varchar(60) NOT NULL,
  `name` varchar(60) NOT NULL,
  `commission` int(11) NOT NULL DEFAULT 10,
  `baseprice` int(11) NOT NULL DEFAULT 25,
  `price` int(11) DEFAULT 25000,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_turkish_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.vehicle_mdt
CREATE TABLE IF NOT EXISTS `vehicle_mdt` (
  `dbid` int(11) NOT NULL,
  `plate` varchar(255) DEFAULT NULL,
  `notes` varchar(50) DEFAULT NULL,
  `image` varchar(255) DEFAULT 'https://cdn.discordapp.com/attachments/832371566859124821/881624386317201498/Screenshot_1607.png',
  `code` int(11) DEFAULT 0,
  `stolen` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.weed
CREATE TABLE IF NOT EXISTS `weed` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `x` int(11) DEFAULT 0,
  `y` int(11) DEFAULT 0,
  `z` int(11) DEFAULT 0,
  `growth` int(11) DEFAULT 0,
  `type` varchar(50) DEFAULT NULL,
  `time` longtext DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.weed_plants
CREATE TABLE IF NOT EXISTS `weed_plants` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `timestamp` varchar(255) DEFAULT NULL,
  `x` varchar(255) DEFAULT NULL,
  `y` varchar(255) DEFAULT NULL,
  `z` varchar(255) DEFAULT NULL,
  `gender` int(1) DEFAULT 1,
  `water` varchar(255) DEFAULT NULL,
  `n` double DEFAULT NULL,
  `p` double DEFAULT NULL,
  `k` double DEFAULT NULL,
  `last_harvest` int(255) DEFAULT 0,
  `maleseeds` int(255) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.wenmo
CREATE TABLE IF NOT EXISTS `wenmo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sender` int(11) DEFAULT NULL,
  `receiver` int(11) DEFAULT NULL,
  `comment` varchar(50) DEFAULT NULL,
  `amount` int(11) NOT NULL DEFAULT 0,
  `unix` bigint(20) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.whitelist
CREATE TABLE IF NOT EXISTS `whitelist` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `hex` varchar(255) NOT NULL,
  `priority` int(11) DEFAULT 0,
  `discord_id` varchar(50) DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `hex` (`hex`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify._restaurants
CREATE TABLE IF NOT EXISTS `_restaurants` (
  `pId` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `foodItems` longtext DEFAULT '[]',
  `menu` longtext DEFAULT '[]',
  `safeCash` int(11) DEFAULT 0,
  `openHour` varchar(255) DEFAULT '0:00',
  `closeHour` varchar(255) DEFAULT '0:00',
  `paycheck` longtext DEFAULT NULL,
  PRIMARY KEY (`pId`),
  KEY `code` (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify._yellowpages
CREATE TABLE IF NOT EXISTS `_yellowpages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `character_id` int(11) DEFAULT NULL,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `number` int(11) DEFAULT NULL,
  `text` text DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table noxify.__housedata
CREATE TABLE IF NOT EXISTS `__housedata` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `hid` varchar(255) DEFAULT NULL,
  `cid` int(11) DEFAULT NULL,
  `house_model` int(11) DEFAULT NULL,
  `data` varchar(250) DEFAULT '{}',
  `upfront` int(11) DEFAULT NULL,
  `housename` longtext DEFAULT NULL,
  `garages` varchar(250) DEFAULT '{}',
  `objects` mediumtext DEFAULT NULL,
  `status` varchar(250) DEFAULT 'locked',
  `force_locked` varchar(250) DEFAULT 'unlocked',
  `due` int(11) DEFAULT NULL,
  `overall` int(11) DEFAULT NULL,
  `last_payment` int(11) DEFAULT NULL,
  `days` int(11) DEFAULT NULL,
  `can_pay` varchar(250) DEFAULT 'true',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `house_id` (`hid`) USING BTREE,
  KEY `cid` (`cid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- Data exporting was unselected.

-- Dumping structure for table noxify.__housekeys
CREATE TABLE IF NOT EXISTS `__housekeys` (
  `cid` int(11) DEFAULT NULL,
  `house_id` int(11) DEFAULT NULL,
  `house_model` int(11) DEFAULT NULL,
  `housename` longtext DEFAULT NULL,
  `name` mediumtext DEFAULT NULL,
  `garages` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin ROW_FORMAT=DYNAMIC;

-- Data exporting was unselected.

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
