CREATE TABLE lang
(
    lang_id SERIAL PRIMARY KEY,
    title VARCHAR(64)
);

CREATE TABLE country 
(
    country_id SERIAL PRIMARY KEY,
    title VARCHAR(32),
    resident VARCHAR(32)
);

CREATE TABLE genre 
(
    genre_id SERIAL PRIMARY KEY,
    title VARCHAR(32)
);

CREATE TABLE person
(
    person_id SERIAL PRIMARY KEY,
    first_name VARCHAR(32),
    last_name VARCHAR(32)
);

CREATE TABLE relation 
(
    relation_id SERIAL PRIMARY KEY,
    relation_name VARCHAR(255)
);

CREATE TABLE film
(
    film_id SERIAL PRIMARY KEY,
	title VARCHAR(64) NOT NULL, 
    subtitles INTEGER,
    FOREIGN KEY (subtitles) REFERENCES lang(lang_id),
    audio INTEGER,
    FOREIGN KEY (audio) REFERENCES lang(lang_id),
    release_year INTEGER NOT NULL,
    country INTEGER,
    FOREIGN KEY (country) REFERENCES country(country_id),
    tagline TEXT,
    film_director INTEGER,
    FOREIGN KEY (film_director) REFERENCES person(person_id),
    screenwriter INTEGER,
    FOREIGN KEY (screenwriter) REFERENCES person(person_id),
    producer INTEGER,
    FOREIGN KEY (producer) REFERENCES person(person_id),
    film_operator INTEGER,
    FOREIGN KEY (film_operator) REFERENCES person(person_id),
    composer INTEGER,
    FOREIGN KEY (composer) REFERENCES person(person_id),
    movie_artist INTEGER,
    FOREIGN KEY (movie_artist) REFERENCES person(person_id),
    montage INTEGER,
    FOREIGN KEY (montage) REFERENCES person(person_id),
    budget VARCHAR(32),
    marketing VARCHAR(32),
    box_office_usa VARCHAR(32),
    box_office_world VARCHAR(32),
    audience VARCHAR(255),
    premiere_russia TIMESTAMP,
    premiere_world TIMESTAMP,
    dvd_release TIMESTAMP,
    age VARCHAR(3),
    rating_mpaa VARCHAR(1),
    duration TIME

);

CREATE TABLE person_film
(
    ratio_id SERIAL PRIMARY KEY,
    person INTEGER,
	FOREIGN KEY (person) REFERENCES person(person_id),
    film INTEGER,
	FOREIGN KEY (film) REFERENCES film(film_id),
    relation INTEGER,
	FOREIGN KEY (relation) REFERENCES relation(relation_id)
);

CREATE TABLE genre_film
(
    ratio_id SERIAL PRIMARY KEY,
    genre INTEGER,
	FOREIGN KEY (genre) REFERENCES genre(genre_id),
    film INTEGER,
	FOREIGN KEY (film) REFERENCES film(film_id)
);

INSERT INTO lang(title)
VALUES ('Russian'), ('English');

INSERT INTO country(title, resident)
VALUES ('Russia', 'russian'), ('USA', 'american');

INSERT INTO person(first_name, last_name)
VALUES ('Tom', 'Hanks'), 
('David', 'Mors'), 
('Bonny', 'Hunt'), 
('Michael Clark', 'Dunkan'), 
('James', 'Cromuel'),
('Micheal', 'Jitter'),
('Всеволод', 'Кузннецов'),
('Владимир', 'Антоник'),
('Любовь', 'Германова'),
('Валентин', 'Голубенко'),
('Terence', 'Marcsh'), 
('William', 'Crus'), 
('Kerin', 'Wagner'), 
('Frank', 'Darabont'), 
('David', 'Tettersoul'),
('Tomhas', 'Newman'),
('Richard', 'Francis-Brus')
;

INSERT INTO relation (relation_name)
VALUES ('Starring'), ('Roles were duplicated');

INSERT INTO genre (title)
VALUES ('Drama'), ('Fantasy'), ('Criminal');

INSERT INTO film
-- (film_id, title, subtitles, audio, release_year, country, genre, tagline, film_director, screenwriter, producer, film_operator, composer, movie_artist, montage, budget, marketing, box_office_usa, box_office_world, audience, premiere_russia, premiere_world, dvd_release, age, rating_mpaa, duration)
VALUES 
(1, 'The Green Mile', 2, 1, 1999, 2, '«Пол Эджкомб не верил в чудеса. Пока не столкнулся с одним из них»',
5, 6, 8, 3, 4, 9, 12, '1000000$', '12225555$', '2342424$', '2342424$', 'США26 млн , Германия2.1 млн , Италия1.7 млн',
'01/02/03', '01/02/03', '01/02/03', '16+', 'R', '04:05:06');

INSERT INTO person_film 
VALUES (1, 1, 1, 1), (2, 5, 1, 1), (3, 7, 1, 2), (4, 9, 1, 2), (5, 2, 1, 2);

INSERT INTO genre_film 
VALUES (1, 1, 1), (2, 2, 1), (3, 3, 1);
