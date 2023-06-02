-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: May 27, 2023 at 06:09 AM
-- Server version: 5.7.39
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecommerce`
--

DELIMITER $$
--
-- Procedures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `deleteProduct` (IN `productID` INT(8))   DELETE FROM products
WHERE products.id = productID$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `getProductByID` (IN `id` INT(8))   SELECT * 
FROM products
WHERE products.id = id$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `getProducts` ()   SELECT *
FROM products$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `insertNewProduct` (IN `productName` VARCHAR(512), IN `price` INT(8))   BEGIN 
	INSERT INTO products(`productName`, `price`)
	VALUES (productName, price);
    
    SELECT * 
    FROM products
    WHERE products.id = LAST_INSERT_ID();
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `showOnlyOnlineProducts` ()   SELECT *
FROM products
WHERE products.online = 1$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `updateProduct` (IN `id` INT(8), IN `productName` VARCHAR(512), IN `price` INT(8))   BEGIN
    UPDATE products
    SET products.productName = productName, products.price = price
    WHERE products.id = id;
    
    SELECT * 
    FROM products
    WHERE products.id = id;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `validateUser` (IN `email` VARCHAR(128), IN `password` VARCHAR(128))   SELECT *
FROM users
WHERE users.email = email AND users.password = password$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(8) NOT NULL,
  `productName` varchar(512) NOT NULL,
  `price` int(8) NOT NULL,
  `image` varchar(128) NOT NULL,
  `online` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `productName`, `price`, `image`, `online`) VALUES
(1, 'changed product name 1', 99999, '', 1),
(2, 'Xbox One', 399, 'xbox.jpg', 0),
(3, 'new product', 555, '', 0),
(4, '65 inch Sony Bravia', 999, '', 0),
(5, '65 inch LG', 9999, '', 0),
(6, '75 Samsung TV', 4444, '', 1),
(7, 'a new product', 9, '', 0),
(8, 'a very new product', 199, '', 1),
(9, '75 Samsung TV', 4444, '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(8) NOT NULL,
  `email` varchar(128) NOT NULL,
  `password` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`) VALUES
(1, 'j@j.com', '12345'),
(2, 'a@gmail.com', '54321');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
