-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 28-12-2022 a las 23:24:57
-- Versión del servidor: 8.0.31-0ubuntu0.20.04.2
-- Versión de PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ejemplo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personas`
--

CREATE TABLE `personas` (
  `dni` varchar(10) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `clave` varchar(20) NOT NULL,
  `tfno` varchar(20) NOT NULL,
  `edad` int NOT NULL DEFAULT 18
);

--
-- Volcado de datos para la tabla `personas`
--

INSERT INTO `personas` (`dni`, `nombre`, `clave`, `tfno`, `edad`) VALUES
('12K', 'Jesús', '013', '555 661 022',17),
('10A', 'Sergio', '123', '555 123 635',23),
('4D', 'Víctor', '123', '555 128 3394',43),
('13H', 'CarlosP', '1234', '555 238 392',92),
('14F', 'Jaime', '4321', '555 238 272',71),
('18U', 'JuanC', '1111', '555 238 492',57),
('19I', 'CarlosR', '12', '555 353 445',27),
('1A', 'Cristina', '123', '555 123 489',31),
('1E', 'Alberto', '1234', '555 345 243',39),
('200RE', 'Javier', '1234', '555 425 423',15),
('20Z', 'Antonio', '', '555 272 332',12),
('2B', 'José', '123', '555 234 352',20),
('3C', 'José E', '3', '555 234 343',30),
('5E', 'Diego', '4', '555 545 345',42),
('6F', 'Noelia', '4', '555 345 436',40),
('7G', 'Ramón', '5', '555 324 337',51),
('8H', 'Marta', '1', '555 487 438',37),
('90TE', 'Álvaro', '1234', '555 859 342',52),
('999M', 'Marco', '1234', '555 263 891',45),
('9I', 'Alfredo', '', '555 328 329',19);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int NOT NULL,
  `descripcion` varchar(20) NOT NULL
) ;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `descripcion`) VALUES
(1, 'Administrador'),
(2, 'Usuario');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rolesasignados`
--

CREATE TABLE `rolesasignados` (
  `idra` int NOT NULL,
  `dni_persona` varchar(10) NOT NULL,
  `id_rol` int NOT NULL
);

--
-- Volcado de datos para la tabla `rolesasignados`
--

INSERT INTO `rolesasignados` (`idra`, `dni_persona`, `id_rol`) VALUES
(1, '10A', 1),
(2, '10A', 2),
(3, '11B', 2),
(4, '2B', 1),
(5, '3C', 1),
(6, '4D', 2),
(7, '5E', 1),
(8, '5E', 2),
(9, '6F', 2),
(10, '7G', 1),
(11, '8H', 2),
(12, '9I', 1),
(13, '9I', 2),
(14, '13H', 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `personas`
--
ALTER TABLE `personas`
  ADD PRIMARY KEY (`DNI`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `rolesasignados`
--
ALTER TABLE `rolesasignados`
  ADD PRIMARY KEY (`idra`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `rolesasignados`
--
ALTER TABLE `rolesasignados`
  MODIFY `idra` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
