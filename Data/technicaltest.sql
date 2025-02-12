-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 19, 2025 at 02:45 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `technicaltest`
--

-- --------------------------------------------------------

--
-- Table structure for table `data`
--

CREATE TABLE `data` (
  `id` int(11) NOT NULL,
  `productID` varchar(10) DEFAULT NULL,
  `productName` varchar(100) DEFAULT NULL,
  `amount` int(100) DEFAULT NULL,
  `customerName` varchar(100) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `transactionDate` datetime DEFAULT NULL,
  `createBy` varchar(100) DEFAULT NULL,
  `createOn` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `data`
--

INSERT INTO `data` (`id`, `productID`, `productName`, `amount`, `customerName`, `status`, `transactionDate`, `createBy`, `createOn`) VALUES
(1372, '10001', 'Test 1', 1000, 'abc', 0, '2022-07-10 11:14:52', 'abc', '2022-07-10 11:14:52'),
(1373, '10002', 'Test 2', 2000, 'abc', 0, '2022-07-11 13:14:52', 'abc', '2022-07-10 13:14:52'),
(1374, '10001', 'Test 1', 1000, 'abc', 0, '2022-08-10 12:14:52', 'abc', '2022-07-10 12:14:52'),
(1375, '10002', 'Test 2', 1000, 'abc', 1, '2022-08-10 13:10:52', 'abc', '2022-07-10 13:10:52'),
(1376, '10001', 'Test 1', 1000, 'abc', 0, '2022-08-10 13:11:52', 'abc', '2022-07-10 13:11:52'),
(1377, '10002', 'Test 2', 2000, 'abc', 0, '2022-08-12 13:14:52', 'abc', '2022-07-10 13:14:52'),
(1378, '10001', 'Test 1', 1000, 'abc', 0, '2022-08-12 14:11:52', 'abc', '2022-07-10 14:11:52'),
(1379, '10002', 'Test 2', 1000, 'abc', 1, '2022-09-13 11:14:52', 'abc', '2022-07-10 11:14:52'),
(1380, '10001', 'Test 1', 1000, 'abc', 0, '2022-09-13 13:14:52', 'abc', '2022-07-10 13:14:52'),
(1381, '10002', 'Test 2', 2000, 'abc', 0, '2022-09-14 09:11:52', 'abc', '2022-07-10 09:11:52'),
(1382, '10001', 'Test 1', 1000, 'abc', 0, '2022-09-14 10:14:52', 'abc', '2022-07-10 10:14:52'),
(1383, '10002', 'Test 2', 1000, 'abc', 1, '2022-08-15 13:14:52', 'abc', '2022-07-10 13:14:52'),
(1384, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1385, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1386, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1387, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1388, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1389, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1390, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1391, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1392, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1393, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1394, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(1395, '12345', 'Baju', 2, 'Daniel', 0, '2025-01-18 02:57:00', 'Edited By Daniel2', '2025-01-18 02:58:00'),
(1396, '11111', 'Parfum', 10, 'Lila', 0, '2025-01-18 05:07:00', 'Daniel Himawan', '2025-01-18 05:07:00');

-- --------------------------------------------------------

--
-- Table structure for table `status`
--

CREATE TABLE `status` (
  `id` int(11) NOT NULL,
  `name` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `status`
--

INSERT INTO `status` (`id`, `name`) VALUES
(0, 'SUCCESS'),
(1, 'FAILED');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `data`
--
ALTER TABLE `data`
  ADD PRIMARY KEY (`id`),
  ADD KEY `status` (`status`);

--
-- Indexes for table `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `data`
--
ALTER TABLE `data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1397;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `data`
--
ALTER TABLE `data`
  ADD CONSTRAINT `data_ibfk_1` FOREIGN KEY (`status`) REFERENCES `status` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
