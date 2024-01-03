create database Translation_Tool;
use Translation_Tool;
-- User information
CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    password_hash VARCHAR(255) NOT NULL, -- Use proper password hashing
    email VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Translation history
CREATE TABLE translation_history (
    translation_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    original_text TEXT NOT NULL,
    translated_text TEXT NOT NULL,
    source_language VARCHAR(10) NOT NULL,
    target_language VARCHAR(10) NOT NULL,
    translation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Favourite translations
CREATE TABLE favourites (
    favourite_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    translation_id INT,
    favourite_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (translation_id) REFERENCES translation_history(translation_id)
);

-- Language packs for offline translation
CREATE TABLE language_packs (
    pack_id INT PRIMARY KEY AUTO_INCREMENT,
    language_code VARCHAR(10) NOT NULL,
    pack_file BLOB NOT NULL -- Store language pack as binary data
);

-- Security measures
CREATE TABLE security_measures (
    security_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    encryption_key VARCHAR(255) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

drop database translation_tool;

select* from translation_tool;