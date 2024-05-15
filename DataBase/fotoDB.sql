DROP DATABASE IF EXISTS fotoDB;
CREATE DATABASE fotoDB;
USE fotoDB;

CREATE TABLE Categorias (
    id INT AUTO_INCREMENT,
    nombre VARCHAR(255),
    PRIMARY KEY (id)
);

CREATE TABLE Subcategorias (
    id INT AUTO_INCREMENT,
    nombre VARCHAR(255),
    categoria_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (categoria_id) REFERENCES Categorias(id)
);

CREATE TABLE Fotos (
    id INT AUTO_INCREMENT,
    nombre VARCHAR(255),
    categoria_id INT,
    subcategoria_id INT,
    fecha DATE,
    url VARCHAR(255),
    PRIMARY KEY (id),
    FOREIGN KEY (categoria_id) REFERENCES Categorias(id),
    FOREIGN KEY (subcategoria_id) REFERENCES Subcategorias(id)
);