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
    animal_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (animal_id) REFERENCES Animal(id)
);

CREATE TABLE Especie (
    id INT AUTO_INCREMENT,
    nombre VARCHAR(255),
    nombre_cientifico VARCHAR(255),
    familia_id INT,
    animal_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (familia_id) REFERENCES Familia(id)
);
CREATE TABLE Fotos (
    id INT AUTO_INCREMENT,
    nombre VARCHAR(255),
    animal_id INT,
    familia_id INT,
    especie_id INT,
    fecha DATE,
    url VARCHAR(255),
    PRIMARY KEY (id),
    FOREIGN KEY (animal_id) REFERENCES Animal(id),
    FOREIGN KEY (familia_id) REFERENCES Familia(id),
    FOREIGN KEY (especie_id) REFERENCES Especie(id)
);