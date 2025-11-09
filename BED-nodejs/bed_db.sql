-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 09, 2025 at 05:02 AM
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
-- Database: `bed_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `members`
--

CREATE TABLE `members` (
  `id` int(11) NOT NULL,
  `member_id` varchar(20) NOT NULL,
  `member_type` varchar(50) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `profile_picture` varchar(255) DEFAULT NULL,
  `address` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `members`
--

INSERT INTO `members` (`id`, `member_id`, `member_type`, `name`, `email`, `phone`, `profile_picture`, `address`) VALUES
(2, 'MEM202510300001', 'Student', 'John Doe', 'john@test.com', '9998887776', 'https://example.com/john.jpg', 'Chennai, India'),
(3, 'MEM202510300002', 'Student', 'John Doe', 'john@test.com', '9998887776', 'https://example.com/john.jpg', 'Chennai, India'),
(4, 'MEM011FFF7311', 'Student', 'John Doe', 'john@test.com', '9998887776', 'https://example.com/john.jpg', 'Chennai, India'),
(9, 'MEM6B37C73414', 'Gold', 'aruntest', 'arun@terralogic.com', '7204566321', 'profile.jpg', '123 Main Street');

-- --------------------------------------------------------

--
-- Table structure for table `member_logs`
--

CREATE TABLE `member_logs` (
  `id` int(11) NOT NULL,
  `action` varchar(50) DEFAULT NULL,
  `member_id` varchar(20) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `ip_address` varchar(50) DEFAULT NULL,
  `timestamp` datetime DEFAULT NULL,
  `data` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`data`)),
  `immutable` tinyint(1) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `member_logs`
--

INSERT INTO `member_logs` (`id`, `action`, `member_id`, `name`, `email`, `phone`, `ip_address`, `timestamp`, `data`, `immutable`) VALUES
(1, 'REGISTER', '1', 'John Doe', 'john@test.com', '9998887776', '::ffff:127.0.0.1', NULL, '{\"member_type\":\"Student\",\"name\":\"John Doe\",\"email\":\"john@test.com\",\"phone\":\"9998887776\",\"profile_picture\":\"https://example.com/john.jpg\",\"address\":\"Chennai, India\",\"token\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5AdGVzdC5jb20iLCJuYW1lIjoiSm9obiBEb2UiLCJtZW1iZXJfdHlwZSI6IlN0dWRlbnQiLCJtZW1iZXJfaWQiOjEsImlhdCI6MTc2MTc5MzYyOCwiZXhwIjoxNzYxNzk3MjI4fQ.asNzDOahHUop_AKIniVF1I1Tj9v0zwkHjk77p9K24XU\"}', 1),
(2, 'REGISTER', 'MEM202510300001', 'John Doe', 'john@test.com', '9998887776', '::ffff:127.0.0.1', '2025-10-30 08:40:22', '{\"member_type\":\"Student\",\"name\":\"John Doe\",\"email\":\"john@test.com\",\"phone\":\"9998887776\",\"profile_picture\":\"https://example.com/john.jpg\",\"address\":\"Chennai, India\"}', 1),
(3, 'REGISTER', 'MEM202510300002', 'John Doe', 'john@test.com', '9998887776', '::ffff:127.0.0.1', '2025-10-30 08:40:49', '{\"member_type\":\"Student\",\"name\":\"John Doe\",\"email\":\"john@test.com\",\"phone\":\"9998887776\",\"profile_picture\":\"https://example.com/john.jpg\",\"address\":\"Chennai, India\"}', 1),
(4, 'REGISTER', 'MEM011FFF7311', 'John Doe', 'john@test.com', '9998887776', '::ffff:127.0.0.1', '2025-10-30 08:43:25', '{\"member_type\":\"Student\",\"name\":\"John Doe\",\"email\":\"john@test.com\",\"phone\":\"9998887776\",\"profile_picture\":\"https://example.com/john.jpg\",\"address\":\"Chennai, India\"}', 1),
(5, 'DELETE', '', 'John Doe', 'john@test.com', '9998887776', '::ffff:127.0.0.1', '2025-10-30 08:58:20', '{\"id\":1,\"member_id\":\"\",\"member_type\":\"Student\",\"name\":\"John Doe\",\"email\":\"john@test.com\",\"phone\":\"9998887776\",\"profile_picture\":\"https://example.com/john.jpg\",\"address\":\"Chennai, India\"}', 1),
(6, 'REGISTER', 'MEM89BC8CE4AC', 'John Doe', 'john@example.com', '9876543210', '::ffff:127.0.0.1', '2025-10-30 08:58:32', '{\"member_type\":\"Gold\",\"name\":\"John Doe\",\"email\":\"john@example.com\",\"phone\":\"9876543210\",\"profile_picture\":\"profile.jpg\",\"address\":\"123 Main Street\"}', 1),
(7, 'REGISTER', 'MEM4BF182A3E1', 'aruntest', 'arun@terralogic.com', '7204566321', '::ffff:127.0.0.1', '2025-10-30 09:00:00', '{\"member_type\":\"Gold\",\"name\":\"aruntest\",\"email\":\"arun@terralogic.com\",\"phone\":\"7204566321\",\"profile_picture\":\"profile.jpg\",\"address\":\"123 Main Street\"}', 1),
(8, 'DELETE', 'MEM4BF182A3E1', 'aruntest', 'arun@terralogic.com', '7204566321', '::ffff:127.0.0.1', '2025-10-30 09:00:23', '{\"id\":6,\"member_id\":\"MEM4BF182A3E1\",\"member_type\":\"Gold\",\"name\":\"aruntest\",\"email\":\"arun@terralogic.com\",\"phone\":\"7204566321\",\"profile_picture\":\"profile.jpg\",\"address\":\"123 Main Street\"}', 1),
(9, 'REGISTER', 'MEMBCF412BEF7', 'aruntest', 'arun@terralogic.com', '7204566321', '::ffff:127.0.0.1', '2025-10-30 09:01:16', '{\"member_type\":\"Gold\",\"name\":\"aruntest\",\"email\":\"arun@terralogic.com\",\"phone\":\"7204566321\",\"profile_picture\":\"profile.jpg\",\"address\":\"123 Main Street\"}', 1),
(10, 'DELETE', 'MEMBCF412BEF7', 'aruntest', 'arun@terralogic.com', '7204566321', '::ffff:127.0.0.1', '2025-10-30 09:01:28', '{\"id\":7,\"member_id\":\"MEMBCF412BEF7\",\"member_type\":\"Gold\",\"name\":\"aruntest\",\"email\":\"arun@terralogic.com\",\"phone\":\"7204566321\",\"profile_picture\":\"profile.jpg\",\"address\":\"123 Main Street\"}', 1),
(11, 'DELETE', 'MEM89BC8CE4AC', 'John Doe', 'john@example.com', '9876543210', '::ffff:127.0.0.1', '2025-10-30 09:25:56', '{\"id\":5,\"member_id\":\"MEM89BC8CE4AC\",\"member_type\":\"Gold\",\"name\":\"John Doe\",\"email\":\"john@example.com\",\"phone\":\"9876543210\",\"profile_picture\":\"profile.jpg\",\"address\":\"123 Main Street\"}', 1),
(12, 'REGISTER', 'MEMAC7DBC037A', 'aruntest', 'arun@terralogic.com', '7204566321', '::ffff:127.0.0.1', '2025-11-09 08:21:58', '{\"member_type\":\"Gold\",\"name\":\"aruntest\",\"email\":\"arun@terralogic.com\",\"phone\":\"7204566321\",\"profile_picture\":\"profile.jpg\",\"address\":\"123 Main Street\"}', 1),
(13, 'DELETE', 'MEMAC7DBC037A', 'aruntest', 'arun@terralogic.com', '7204566321', '::ffff:127.0.0.1', '2025-11-09 08:22:44', '{\"id\":8,\"member_id\":\"MEMAC7DBC037A\",\"member_type\":\"Gold\",\"name\":\"aruntest\",\"email\":\"arun@terralogic.com\",\"phone\":\"7204566321\",\"profile_picture\":\"profile.jpg\",\"address\":\"123 Main Street\"}', 1),
(14, 'REGISTER', 'MEM6B37C73414', 'aruntest', 'arun@terralogic.com', '7204566321', '::ffff:127.0.0.1', '2025-11-09 09:19:46', '{\"member_type\":\"Gold\",\"name\":\"aruntest\",\"email\":\"arun@terralogic.com\",\"phone\":\"7204566321\",\"profile_picture\":\"profile.jpg\",\"address\":\"123 Main Street\"}', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `member_id` (`member_id`);

--
-- Indexes for table `member_logs`
--
ALTER TABLE `member_logs`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `members`
--
ALTER TABLE `members`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `member_logs`
--
ALTER TABLE `member_logs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
