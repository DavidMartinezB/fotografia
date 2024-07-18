DROP DATABASE IF EXISTS fotoDB;
CREATE DATABASE fotoDB;
USE fotoDB;

CREATE TABLE Animal (
    id INT AUTO_INCREMENT,
    nombre VARCHAR(255),
    PRIMARY KEY (id)
);

CREATE TABLE Familia (
    id INT AUTO_INCREMENT,
    nombre VARCHAR(255),
    animalId INT,
    PRIMARY KEY (id),
    FOREIGN KEY (animalId) REFERENCES Animal(id)
);

CREATE TABLE Especie (
    id INT AUTO_INCREMENT,
    nombre VARCHAR(255),
    nombreCientifico VARCHAR(255),
    familiaId INT,
    PRIMARY KEY (id),
    FOREIGN KEY (familiaId) REFERENCES Familia(id)
);

CREATE TABLE Fotos (
    id INT AUTO_INCREMENT,
    nombre VARCHAR(255),
    animalId INT,
    familiaId INT,
    especieId INT,
    fecha DATE,
    url VARCHAR(255),
    PRIMARY KEY (id),
    FOREIGN KEY (animalId) REFERENCES Animal(id),
    FOREIGN KEY (familiaId) REFERENCES Familia(id),
    FOREIGN KEY (especieId) REFERENCES Especie(id)
);