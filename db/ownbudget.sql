-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 27, 2021 at 01:20 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.4.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ownbudget`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `firstname` varchar(100) DEFAULT NULL,
  `lastname` varchar(100) DEFAULT NULL,
  `phone_no` varchar(30) DEFAULT NULL,
  `email_id` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `firstname`, `lastname`, `phone_no`, `email_id`, `password`, `created_at`, `updated_at`) VALUES
(1, 'jaffer', 'sathik', '8825755143', 'jaffersathik225@gmail.com', 'qwerty', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `transaction`
--

CREATE TABLE `transaction` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `sourcename` varchar(150) NOT NULL,
  `type` int(11) NOT NULL,
  `amount` float NOT NULL,
  `description` text NOT NULL,
  `transaction_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `transaction`
--

INSERT INTO `transaction` (`id`, `user_id`, `sourcename`, `type`, `amount`, `description`, `transaction_at`) VALUES
(1, 1, 'salary', 1, 20000, 'jan salary', '0000-00-00 00:00:00'),
(2, 1, 'bike repair', 2, 1000, 'fitting guad', '0000-00-00 00:00:00'),
(3, 1, 'bonus', 1, 2000, 'bonus', '0000-00-00 00:00:00'),
(4, 1, 'food', 1, 500, 'lunch with family', '0000-00-00 00:00:00'),
(5, 1, 'food', 2, 1000, 'lunch with family', '0000-00-00 00:00:00'),
(6, 1, 'shoes', 2, 123, 'good morining', '0000-00-00 00:00:00'),
(7, 1, 'shoes', 2, 123, 'good morining', '0000-00-00 00:00:00'),
(8, 1, 'sathya', 1, 200, 'friend gift', '0000-00-00 00:00:00'),
(9, 1, 'to sathya', 2, 300, 'unnesscary expenses', '0000-00-00 00:00:00'),
(10, 1, 'mom gift', 1, 400, 'bday treat', '0000-00-00 00:00:00'),
(11, 1, 'muthu', 1, 30, 'mass income', '0000-00-00 00:00:00'),
(12, 1, 'kanith', 1, 300, 'mass geth', '2021-02-17 05:13:07'),
(13, 1, 'kanith', 1, 500, 'dfvstg', '2021-02-22 05:36:02'),
(14, 1, 'kanith', 2, 400, 'qwerty', '2021-02-22 05:36:29');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transaction`
--
ALTER TABLE `transaction`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `transaction`
--
ALTER TABLE `transaction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
