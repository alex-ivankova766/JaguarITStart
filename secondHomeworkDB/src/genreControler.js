const db = require('../db');

class GenreControler {

    async createGenre(req, res) {

        const {genre_id, title} = req.body;

        const newGenre = await db.query(`INSERT INTO genre (genre_id, title)
        VALUES ($1, $2) RETURNING *`
        , [genre_id, title]);

        res.send(newGenre.rows[0]);
    }

    async getGenre(req, res) {
        if(req.params.id) {
            const id = req.params.id;
            const genre = await db.query(`SELECT * FROM genre WHERE genre_id = $1`, [id]); 
            return res.send(genre.rows[0]);
        }
        const genres = await db.query('SELECT * FROM genre');
        res.send(genres.rows);
    }

    async updateGenre(req, res) {
        const {genre_id, title} = req.body;

        const genre = await db.query(`UPDATE genre SET title = $2 WHERE genre_id = $1 RETURNING *`
        , [genre_id, title]);
        res.send(genre.rows[0]);
    }

    async deleteGenre(req, res) {
        if(req.params.id) {
            const id = req.params.id;
            const genre = await db.query(`DELETE FROM genre WHERE genre_id = $1`, [id]);
            return res.send(`genre with id ${id} was deleted`);
        }
    }
}

module.exports = new GenreControler();
