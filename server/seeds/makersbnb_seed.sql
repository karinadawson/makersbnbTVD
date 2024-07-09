DROP TABLE IF EXISTS bookings;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS spaces;


CREATE TABLE bookings (
id SERIAL PRIMARY KEY,
name_of_guest TEXT,
place_name TEXT,
host_id TEXT
);


CREATE TABLE users (
id SERIAL PRIMARY KEY,
username TEXT,
user_password TEXT
);


CREATE TABLE spaces (
id SERIAL PRIMARY KEY,
place_name TEXT,
location TEXT,
description TEXT,
price INTEGER,
host_id TEXT
);



INSERT INTO spaces (place_name, location, description, price, host_id) VALUES ('Charming Castle', 'Edinburgh', 'Beautiful Castle in Old Town', 300, 'one');
INSERT INTO spaces (place_name, location, description, price, host_id) VALUES ('Fun Treehouse', 'Bali', 'Unique Stay In The Trees', 80, 'two');


INSERT INTO bookings (name_of_guest, place_name, host_id) VALUES ('Karina', 'Charming Castle', 'one');
INSERT INTO bookings (name_of_guest, place_name, host_id) VALUES ('Maz', 'Fun Treehouse', 'two');


INSERT INTO users (username, user_password) VALUES ('Pete', 'petespassword');
INSERT INTO users (username, user_password) VALUES ('Glory', 'gloryspassword'); 








