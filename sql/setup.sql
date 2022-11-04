-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
-- This table is for All ALiens
DROP TABLE IF EXISTS alien_model;

CREATE TABLE alien_model (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL,
    type VARCHAR NOT NULL,
    year INT NOT NULL
);

INSERT INTO alien_model (name, type, year)
VALUES
('Felixoid', 'Tuxedo', 1892),
('Garfieldoid', 'Orange Tabby', 1978),
('Ducheisty', 'Angora', 1970),
('Stim', 'Fulcrom', 1990),
('Sylvester', 'Boxer', 1945),
('Tigger', 'Tiger', 1928),
('Pina', 'Colada', 1974),
('Hobbes', 'chef', 1985);


-- This table is for all Cowboys

DROP TABLE IF EXISTS cowboy_model;

CREATE TABLE cowboy_model (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL,
    type VARCHAR NOT NULL
);

INSERT INTO cowboy_model (name, type)
VALUES
('McCree', 'Outlaw'),
('Brian', 'Sherriff'),
('Carlos', 'Banker'),
('Genghis', 'Khan'),
('Arthur', 'Outlaw'),
('John', 'Citizen'),
('Cassidy', 'Outlaw');