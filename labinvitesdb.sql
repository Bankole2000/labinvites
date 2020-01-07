-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 07, 2020 at 05:03 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `labinvites`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `user_id` int(10) NOT NULL,
  `firstname` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `lastname` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `email` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `pass` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `role` int(10) NOT NULL,
  `last_login` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`user_id`, `firstname`, `lastname`, `email`, `pass`, `role`, `last_login`) VALUES
(1, 'Bankole', 'Esan', 'techybanky@gmail.com', 'Bankole1.', 1, '2020-01-07 15:01:14');

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `event_id` int(100) NOT NULL,
  `event_type_id` int(100) NOT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `venue` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `from_date` datetime NOT NULL,
  `to_date` datetime DEFAULT NULL,
  `features` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `image_url` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `date_posted` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`event_id`, `event_type_id`, `title`, `venue`, `from_date`, `to_date`, `features`, `image_url`, `date_posted`) VALUES
(1, 1, 'Modern Digital blah blah blah ', 'The Hillton Abuja', '2020-01-03 09:00:00', NULL, 'Talks by really cool people ', 'https://i.imgur.com/WCky8tl.jpg', '2020-01-02 05:54:14'),
(2, 1, 'Modern Digital blah blah blah ', 'The Hillton Abuja', '2020-01-10 09:00:00', NULL, 'Here\'s some gist about the whole things', 'https://i.imgur.com/WCky8tl.jpg', '2020-01-02 06:17:49'),
(3, 3, 'Modern Digital blah blah blah ', 'The Hillton Abuja', '2020-01-10 09:00:00', '2020-02-14 23:00:00', 'Here\'s some gist about stuff that\'s going down there', 'https://i.imgur.com/WCky8tl.jpg', '2020-01-02 06:20:14'),
(4, 1, 'BlueTooth 5.0 and the Nigerian Tech Space', 'Sheraton Hotels Abuja', '2020-01-08 09:00:00', '0000-00-00 00:00:00', 'Featuring Discussions and demonstrations on bluetooth 5.0 and special whatever', 'https://i.imgur.com/WXqHv2G.jpg', '2020-01-06 10:13:29');

-- --------------------------------------------------------

--
-- Table structure for table `event_type`
--

CREATE TABLE `event_type` (
  `event_type_id` int(100) NOT NULL,
  `type_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `date_added` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `event_type`
--

INSERT INTO `event_type` (`event_type_id`, `type_name`, `date_added`) VALUES
(1, 'Technical Excursion Series', '2020-01-02 01:35:04'),
(3, 'PEF DAFMIS', '2020-01-02 02:14:15'),
(4, 'PEF DAFMIS', '2020-01-02 02:17:21'),
(5, 'TCI Conference', '2020-01-02 02:17:52'),
(6, 'TCI Conference', '2020-01-02 02:18:12'),
(7, 'TCI Conference', '2020-01-02 02:19:29'),
(8, 'Technical Excursion Series', '2020-01-02 03:54:23');

-- --------------------------------------------------------

--
-- Table structure for table `invites`
--

CREATE TABLE `invites` (
  `invite_id` int(100) NOT NULL,
  `event_id` int(100) NOT NULL,
  `from_email` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `to_email` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `cc_email` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `bc_email` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `notes` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `date_sent` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `rsvp`
--

CREATE TABLE `rsvp` (
  `rsvp_id` int(100) NOT NULL,
  `event_id` int(100) NOT NULL,
  `firstname` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `lastname` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `organization` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `phone` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `questions` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `linkedin` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `will_attend` int(10) NOT NULL,
  `date_posted` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`event_id`);

--
-- Indexes for table `event_type`
--
ALTER TABLE `event_type`
  ADD PRIMARY KEY (`event_type_id`);

--
-- Indexes for table `invites`
--
ALTER TABLE `invites`
  ADD PRIMARY KEY (`invite_id`);

--
-- Indexes for table `rsvp`
--
ALTER TABLE `rsvp`
  ADD PRIMARY KEY (`rsvp_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `user_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `event_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `event_type`
--
ALTER TABLE `event_type`
  MODIFY `event_type_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `invites`
--
ALTER TABLE `invites`
  MODIFY `invite_id` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `rsvp`
--
ALTER TABLE `rsvp`
  MODIFY `rsvp_id` int(100) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
