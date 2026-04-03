CREATE DATABASE belajar_api;

CREATE TABLE menus (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  description TEXT,
  price INTEGER
);