CREATE DATABASE  IF NOT EXISTS `buenastintasdb` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `buenastintasdb`;
-- MariaDB dump 10.17  Distrib 10.4.14-MariaDB, for Win64 (AMD64)
--
-- Host: 127.0.0.1    Database: buenastintasdb
-- ------------------------------------------------------
-- Server version	10.4.14-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idUsuario_idx` (`id_usuario`),
  KEY `idProducto_idx` (`id_producto`),
  CONSTRAINT `idProducto` FOREIGN KEY (`id_producto`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `idUsuario` FOREIGN KEY (`id_usuario`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Vino'),(2,'Espumante'),(3,'Whiskie'),(4,'Aperitivo'),(5,'Cerveza');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `bodega` varchar(100) DEFAULT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `varietal` varchar(100) DEFAULT NULL,
  `cosecha` int(11) DEFAULT NULL,
  `precio` int(11) NOT NULL,
  `descuento` int(11) DEFAULT 0,
  `descripcion` varchar(200) NOT NULL,
  `image` varchar(150) DEFAULT 'undefined.jpg',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `id_categoria` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idCategoria_idx` (`id_categoria`),
  CONSTRAINT `idCategoria` FOREIGN KEY (`id_categoria`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Trapiche','reserva','Malbec',2016,750,10,'Trapiche Reserva Malbec:\r\nDe color rojo violáceo de aroma ahumado y avainillado de final dulce y largo. Las uvas son cosechadas en forma manual, provenientes de racimos seleccionados. El vino está cri','image-1605744522208.jpg','2020-11-17 16:47:28','2020-11-19 00:08:42',1),(2,'Fernet','Branca','',0,1000,15,'Fernandoooo','image-1605727604766.jpg','2020-11-17 20:59:03','2020-11-18 19:26:44',4),(3,'Concha y Toro','Casillero del Diablo','chardonnay',2016,700,0,'Lorem ipsum','image-1605646952147.jpg','2020-11-17 21:02:32','2020-11-17 21:02:32',1),(4,'','Campari','',0,850,5,'Campari','image-1605743732261.jpg','2020-11-18 23:55:32','2020-11-18 23:55:32',4),(5,'','Gancia','',0,450,0,'Gancia','image-1605743777687.jpg','2020-11-18 23:56:17','2020-11-18 23:56:17',4),(6,'Dom Perignon','Brut Extra','Chardonnay',0,40000,5,'Dom Perignon','image-1605743926489.jpeg','2020-11-18 23:58:46','2020-11-18 23:58:46',2),(7,'Rutini','Brut Natural','50% Chardonnay, 50% Pinot Noir de Gualtallary',2016,3000,10,'Dorado con reflejos amarillo verdosos. Burbuja pequeña, perezosa y muy persistente. Nariz compleja, donde se integran armoniosamente el aroma de pan sin hornear con frutas ( ananá, durazno blanco). En','image-1605744094988.webp','2020-11-19 00:01:34','2020-11-19 00:01:34',2),(8,'Johnnie Walker','Blue Label','',0,25000,15,'Johnnie Walker Blue Label es mezclado para recrear el auténtico sabor y carácter de algunas de las mezclas de whisky mas tempranas creadas en el siglo 19, otorgandole un rico y turboso gusto combinado','image-1605744202249.jpg','2020-11-19 00:03:22','2020-11-19 00:03:22',3),(9,'Jack Daniels','N° 7','Bourbon',0,3500,0,'Jack Daniel\'s es una destilería y marca de whiskey estadounidense de Tennessee. La diferencia más notable es que el whisky Tennessee es filtrado en carbón de arce sacarino, dándole un sabor y aroma di','image-1605744328148.jpg','2020-11-19 00:05:28','2020-11-19 00:05:28',3),(14,'','Peroni','',0,150,5,'La verdadera birra italiana','image-1605744623218.jpg','2020-11-19 00:10:23','2020-11-19 00:10:23',5),(15,'','Corona','',0,200,5,'Cerveza Corona','image-1605744675057.webp','2020-11-19 00:11:15','2020-11-19 00:11:15',5);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(15) NOT NULL DEFAULT 'cliente',
  `name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `email` varchar(100) NOT NULL,
  `date` date NOT NULL,
  `photo` varchar(100) DEFAULT NULL,
  `phone` int(11) NOT NULL,
  `password` varchar(150) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'administrador','Nico','Caputo','nico@caputo.com','1995-05-20',NULL,1153796531,'123456',NULL,NULL),(3,'','Nico','Caputo','nicolas@caputo.com','1995-05-20',NULL,1153796531,'$2b$10$ZW/A/haBD9ziHtr99x0ncOAE.3Ai02I7QBZSpj5d0UEYwL07OIKTO','2020-11-13 17:49:52','2020-11-13 17:49:52'),(4,'administrador','nico','caputo','nico@caputo.com.ar','1995-05-20','photo-1605726763107.png',1153796531,'$2b$10$SmoZK/.bjZBmZeB0yVlq7.3fEdmgxK5ecp9MFPPOjrCfmRCgEiq5O','2020-11-16 22:30:14','2020-11-18 19:12:43'),(5,'cliente','Nico','Caputo','nico@capu.com','1995-05-20','foto-undefined.png',1153796531,'$2b$10$ov084mG0RArofrqIztFS4eJ4.rQOQlOtfHjvHqlVw1tqlgEAACpGO','2020-11-17 22:21:38','2020-11-17 22:21:38'),(6,'cliente','Nico','Caputo','nicolas@capu.com','1995-05-20','photo-1605743598079.png',1153796531,'$2b$10$hb0PqF9twFnZSzXEyYhLMeiHRfI5JwwnuOag2QM74Scygxrn9AQH6','2020-11-18 23:53:18','2020-11-18 23:53:18'),(7,'administrador','Admin','Buenas Tintas','admin@buenastintas.com','1995-05-20','photo-1605744978652.png',1153796531,'$2b$10$/O3vFz4ltuZq2db6nvRkL.BkrOh9PT0asrIX.atQj17x0mjxArBoa','2020-11-19 00:16:18','2020-11-19 00:16:18');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-18 21:18:40
