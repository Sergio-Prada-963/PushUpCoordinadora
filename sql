--dataBase

DROP DATABASE IF EXISTS `coordinadoraDb`;

CREATE DATABASE `coordinadoraDb`;

USE `coordinadoraDb`;

CREATE TABLE `empleados` (
	Id INT PRIMARY KEY AUTO_INCREMENT,
	`nombre` VARCHAR(50) NOT NULL,
	`edad` INT(10) NOT NULL,
	`direccion` TEXT(100) NOT NULL,
	`yearsWork` INT(10) NOT NULL,
	`IdCargofk` INT(11) NOT NULL
);

CREATE TABLE `cargos` (
	Id INT PRIMARY KEY AUTO_INCREMENT,
	`descripcion` TEXT(100) NOT NULL,
	`ocupacion` VARCHAR(11) NOT NULL
);

CREATE TABLE `envios` (
	Id INT PRIMARY KEY AUTO_INCREMENT,
	`tipo` VARCHAR(50) NOT NULL,
	`veiculo` VARCHAR(25) NOT NULL,
	`IdRutaFk` INT(11) NOT NULL,
	`IdBodegaFk` INT(11) NOT NULL,
	`IdCargoFk` INT(11) NOT NULL
);

CREATE TABLE `bodegas` (
	Id INT PRIMARY KEY AUTO_INCREMENT,
	`ubicacion` VARCHAR(50) NOT NULL,
	`capacidad` VARCHAR(25) NOT NULL,
	`estado` text(100) NOT NULL,
	`IdInventarioFk` INT(11) NOT NULL,
	`IdcargoFk` INT(11) NOT NULL
);

CREATE TABLE `inventarios` (
	Id INT PRIMARY KEY AUTO_INCREMENT,
	`IdBodegaFk` INT(11) NOT NULL,
	`IdPaquetes_InventarioFk` INT(11) NOT NULL
);

CREATE TABLE `Paquete_inventario` (
	Id INT PRIMARY KEY AUTO_INCREMENT,
	`IdInventarioFk` INT(11) NOT NULL,
	`IdPaqueteFk` INT(11) NOT NULL
);

CREATE TABLE `rutas` (
	Id INT PRIMARY KEY AUTO_INCREMENT,
	`descripcion` text(100),
	`nombre_ruta` VARCHAR(25) NOT NULL,
	`rutaGPS` VARCHAR(50),
	`ruta` VARCHAR(50) NOT NULL
);

CREATE TABLE `detalles` (
	Id INT PRIMARY KEY AUTO_INCREMENT,
	`IdPaqueteFk` INT(11),
	`tamano` VARCHAR(25),
	`peso` VARCHAR(25),
	`volumen` VARCHAR(25),
	`estado` TEXT(50) NOT NULL,
	`IdrutaFk` INT(11) NOT NULL,
	`IdEnvioFk` INT(11) NOT NULL
);

CREATE TABLE `paquetes` (
	Id INT PRIMARY KEY AUTO_INCREMENT,
	`nombre` VARCHAR(50) NOT NULL,
	`marca` VARCHAR(25) NOT NULL,
	`Nacional_interNac` VARCHAR(50) NOT NULL,
	`costoProducto` INT(25) NOT NULL,
	`costoEnvio` INT(50) NOT NULL,
	`IdDetallesFk` INT(11) NOT NULL,
	`tipo_paquete` VARCHAR(50) NOT NULL
);

CREATE TABLE `pedidos` (
	Id INT PRIMARY KEY AUTO_INCREMENT,
	`fechaPedido` VARCHAR(50) NOT NULL,
	`IdClienteFk` INT(25) NOT NULL,
	`fechaEntrega` VARCHAR(50) NOT NULL,
	`direccionEntrega` INT(25) NOT NULL,
	`costoProducto` INT(50) NOT NULL,
	`CostoEnvio` INT(11) NOT NULL,
	`IdPaqueteFk` INT(50) NOT NULL,
	`observacioneDetalles` VARCHAR(50) NOT NULL
);

CREATE TABLE `clientes` (
	Id INT PRIMARY KEY AUTO_INCREMENT,
	`nombre` VARCHAR(50) NOT NULL,
	`edad` INT(10) NOT NULL,
	`direccion` TEXT(100) NOT NULL,
	`IdTipoClienteFk` INT(11) NOT NULL
);

CREATE TABLE `tipoCliente` (
	Id INT PRIMARY KEY AUTO_INCREMENT,
	`descripcion` VARCHAR(50) NOT NULL,
	`tipo` VARCHAR(10) NOT NULL
);

--Foraneas

ALTER TABLE clientes ADD FOREIGN KEY (IdTipoClienteFk) REFERENCES tipoCliente(Id);

ALTER TABLE pedidos ADD FOREIGN KEY (IdClienteFk) REFERENCES clientes(Id);

ALTER TABLE pedidos ADD FOREIGN KEY (IdPaqueteFk) REFERENCES paquetes(Id);

ALTER TABLE Paquete_inventario ADD FOREIGN KEY (IdInventarioFk) REFERENCES inventarios(Id);

ALTER TABLE Paquete_inventario ADD FOREIGN KEY (IdPaqueteFk) REFERENCES paquetes(Id);

ALTER TABLE inventarios ADD FOREIGN KEY (IdBodegaFk) REFERENCES bodegas(Id);

ALTER TABLE inventarios ADD FOREIGN KEY (IdPaquetes_InventarioFk) REFERENCES Paquete_inventario(Id);

ALTER TABLE detalles ADD FOREIGN KEY (IdPaqueteFk) REFERENCES paquetes(Id);

ALTER TABLE detalles ADD FOREIGN KEY (IdRutaFk) REFERENCES rutas(Id);

ALTER TABLE envios ADD FOREIGN KEY (IdBodegaFk) REFERENCES bodegas(Id);

ALTER TABLE envios ADD FOREIGN KEY (IdCargoFk) REFERENCES cargos(Id);

ALTER TABLE bodegas ADD FOREIGN KEY (IdCargoFk) REFERENCES cargos(Id);

ALTER TABLE empleados ADD FOREIGN KEY (IdCargoFk) REFERENCES cargos(Id);

