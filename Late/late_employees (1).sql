-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 03, 2025 at 04:59 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `employee_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `late_employees`
--

CREATE TABLE `late_employees` (
  `DATE` date NOT NULL,
  `EMPLOYEE_ID` int(11) NOT NULL,
  `TIME_IN` time NOT NULL,
  `SCHEDULED_TIME` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `late_employees`
--

INSERT INTO `late_employees` (`DATE`, `EMPLOYEE_ID`, `TIME_IN`, `SCHEDULED_TIME`) VALUES
('2026-11-12', 1007, '11:20:00', '8:00 AM - 4:00 PM'),
('2026-11-12', 1009, '10:20:00', '7:00 AM - 3:00 PM'),
('2026-11-13', 1200, '01:00:00', '1:00 AM - 9:00 AM '),
('2026-11-12', 10012, '03:10:00', '3:00 PM - 12:00 NN'),
('2026-11-12', 10020, '21:50:00', '9:00 AM - 5:00 PM'),
('2026-11-12', 10021, '01:50:00', '12:00 AM - 8:00 PM'),
('2026-11-13', 10022, '13:20:00', '10:00 AM - 6:00 PM'),
('2026-11-14', 20002, '15:00:00', '3:00 PM - 12:00 AM'),
('2026-11-12', 100111, '08:10:00', '8:00 PM - 5:00 AM'),
('2026-11-12', 100211, '22:50:00', '10:00 AM - 6:00 PM');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `late_employees`
--
ALTER TABLE `late_employees`
  ADD PRIMARY KEY (`EMPLOYEE_ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
