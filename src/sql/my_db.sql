-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-07-2018 a las 17:05:32
-- Versión del servidor: 10.1.31-MariaDB
-- Versión de PHP: 7.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `my_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `diagram`
--

CREATE TABLE `diagram` (
  `id_diagram` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `code` longtext NOT NULL,
  `author` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `diagram`
--

INSERT INTO `diagram` (`id_diagram`, `name`, `code`, `author`) VALUES
(1, 'diagram process', 'this is a code en sql', 'Magnolia benjamin');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `diagram`
--
ALTER TABLE `diagram`
  ADD PRIMARY KEY (`id_diagram`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `diagram`
--
ALTER TABLE `diagram`
  MODIFY `id_diagram` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
