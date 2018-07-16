-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Час створення: Лип 16 2018 р., 11:33
-- Версія сервера: 10.1.30-MariaDB
-- Версія PHP: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База даних: `structure_companies`
--

-- --------------------------------------------------------

--
-- Структура таблиці `Company`
--

CREATE TABLE `Company` (
  `id` int(11) NOT NULL,
  `name` varchar(20) DEFAULT NULL,
  `earnings` int(10) NOT NULL,
  `parent_id` int(11) NOT NULL,
  `total` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп даних таблиці `Company`
--

INSERT INTO `Company` (`id`, `name`, `earnings`, `parent_id`, `total`) VALUES
(17, 'Company 1', 10333, 0, 48110),
(18, 'Company 2', 23555, 17, 0),
(19, 'Company 3', 23667, 18, 0),
(20, 'Company 4', 24555, 18, 0),
(21, 'Company 5', 32000, 17, 0),
(22, 'Company 6', 25555, 0, 119888),
(23, 'Company 7', 55555, 22, 64333),
(24, 'Company 8', 40999, 23, 0),
(25, 'Company 9', 23334, 24, 0),
(26, 'Company 10', 22332, 24, 0),
(27, 'Company 11', 10000, 0, 0),
(28, 'Company 12', 55555, 0, 0),
(29, 'Company 13', 34669, 28, 0),
(30, 'Company 14', 43789, 28, 0),
(31, 'Company 15', 99999, 0, 0);

--
-- Індекси збережених таблиць
--

--
-- Індекси таблиці `Company`
--
ALTER TABLE `Company`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для збережених таблиць
--

--
-- AUTO_INCREMENT для таблиці `Company`
--
ALTER TABLE `Company`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
