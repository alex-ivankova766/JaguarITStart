const db = require('../db');

class FilmControler {

    async createFilm(req, res) {

        const {film_id, title, release_year} = req.body;

        try {
            const newFilm = await db.query(`INSERT INTO film (film_id, title, release_year)
        VALUES ($1, $2, $3) RETURNING *`, [film_id, title,release_year]);

        res.send(newFilm.rows[0]);
        } catch(error) {
            return res.send(error);
        }
    }

    async createFullFilm(req, res) {

        const {film_id, title, subtitles, audio, release_year, country
            , tagline, film_director, screenwriter, producer
            , film_operator, composer, movie_artist, montage, budget
            , marketing, box_office_usa, box_office_world, audience, premiere_russia
            , premiere_world, dvd_release, age, rating_mpaa, duration} = req.body;
            
        try{
            const newFilm = await db.query(`INSERT INTO film 
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25) RETURNING *`
            , [film_id, title, subtitles, audio, release_year, country
            , tagline, film_director, screenwriter, producer
            , film_operator, composer, movie_artist, montage, budget
            , marketing, box_office_usa, box_office_world, audience, premiere_russia
            , premiere_world, dvd_release, age, rating_mpaa, duration]);

            res.send(newFilm.rows[0]);
        } catch(err) {
            return res.send(err);
        }
    }

    async getFilm(req, res) {

        if(req.params.id) {

            const id = req.params.id;
            const film = await db.query(`SELECT * FROM film WHERE film_id = $1 ORDER BY film_id`, [id]); 
            
            return res.send(film.rows[0]);
        }

        const films = await db.query('SELECT * FROM film ORDER BY film_id');
        res.send(films.rows);
    }

    async updateFilmTitle(req, res) {

        const {film_id, title} = req.body;
        const film = await db.query(`UPDATE film SET title = $2 WHERE film_id = $1 RETURNING *`
        , [film_id, title]);

        res.send(film.rows[0]);
    }

    async updateFilmRelease(req, res) {
        
        const {film_id, release_year} = req.body;
        const film = await db.query(`UPDATE film SET release_year = $2 WHERE film_id = $1 RETURNING *`
        , [film_id, release_year]);

        res.send(film.rows[0]);
    }

    async updateFullFilm(req, res) {
        const {film_id, title, subtitles, audio, release_year, country
            , tagline, film_director, screenwriter, producer
            , film_operator, composer, movie_artist, montage, budget
            , marketing, box_office_usa, box_office_world, audience, premiere_russia
            , premiere_world, dvd_release, age, rating_mpaa, duration} = req.body;


        const film = await db.query(`UPDATE film SET title = $2, subtitles = $3, audio = $4, release_year = $5
        , country = $6, tagline = $7, film_director = $8, screenwriter = $9, producer = $10, film_operator = $11
        , composer = $12, movie_artist = $13, montage = $14, budget = $15, marketing = $16, box_office_usa = $17
        , box_office_world = $18, audience = $19, premiere_russia = $20, premiere_world = $21, dvd_release = $22
        , age = $23, rating_mpaa = $24, duration = $25 WHERE film_id = $1 RETURNING *`
        , [film_id, title, subtitles, audio, release_year, country
            , tagline, film_director, screenwriter, producer
            , film_operator, composer, movie_artist, montage, budget
            , marketing, box_office_usa, box_office_world, audience, premiere_russia
            , premiere_world, dvd_release, age, rating_mpaa, duration]);
        res.send(film.rows[0]);
    }

    async deleteFilm(req, res) {
        if(req.params.id) {
            const id = req.params.id;
            const film = await db.query(`DELETE FROM film WHERE film_id = $1`, [id]);
            return res.send(`film with id ${id} was deleted`);
        }
    }
}

module.exports = new FilmControler();
