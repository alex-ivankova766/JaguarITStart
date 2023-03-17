const Router = require('../framework/Router');
const genreControler = require('./genreControler')

const router = new Router();

router.post('/genres', genreControler.createGenre);
router.get('/genres', genreControler.getGenre);
router.put('/genres', genreControler.updateGenre);
router.delete('/genres', genreControler.deleteGenre);

module.exports = router;