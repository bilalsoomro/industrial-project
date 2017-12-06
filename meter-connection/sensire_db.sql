-- phpMyAdmin SQL Dump
-- version 4.6.6deb4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 06, 2017 at 06:10 PM
-- Server version: 10.1.23-MariaDB-9+deb9u1
-- PHP Version: 7.0.19-1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sensire_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `Measurements`
--

CREATE TABLE `Measurements` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `unit` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Measurements`
--

INSERT INTO `Measurements` (`id`, `name`, `unit`) VALUES
(1, 'ACTIVE ENERGY L1', 'wH * 100'),
(2, 'ACTIVE ENERGY L2', 'wH * 100'),
(3, 'ACTIVE ENERGY L3', 'wH * 100'),
(4, 'REACTIVE ENERGY L1', 'VArh * 100'),
(5, 'REACTIVE ENERGY L2', 'VArh * 100'),
(6, 'REACTIVE ENERGY L3', 'VArh * 100'),
(7, 'PHASE VOLTAGE L1-N', 'volt'),
(8, 'PHASE VOLTAGE L2-N', 'volt'),
(9, 'PHASE VOLTAGE L3-N', 'volt'),
(10, 'LINE VOLTAGE L3-1', 'volt'),
(11, 'LINE VOLTAGE L3-2', 'volt'),
(12, 'LINE VOLTAGE L3-3', 'volt'),
(13, 'LINE CURRENT L1', 'mA'),
(14, 'LINE CURRENT L2', 'mA'),
(15, 'LINE CURRENT L3', 'mA');

-- --------------------------------------------------------

--
-- Table structure for table `Readings`
--

CREATE TABLE `Readings` (
  `id` int(11) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `measurement_id` int(11) NOT NULL,
  `value` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Readings`
--

INSERT INTO `Readings` (`id`, `timestamp`, `measurement_id`, `value`) VALUES
(3, '2017-12-06 18:09:51', 2, 100);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Measurements`
--
ALTER TABLE `Measurements`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Readings`
--
ALTER TABLE `Readings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `measurement_id` (`measurement_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Measurements`
--
ALTER TABLE `Measurements`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT for table `Readings`
--
ALTER TABLE `Readings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `Readings`
--
ALTER TABLE `Readings`
  ADD CONSTRAINT `Readings_ibfk_1` FOREIGN KEY (`measurement_id`) REFERENCES `Measurements` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
