const Router = require('../framework/Router');
const filmControler = require('./filmControler')

const router = new Router();

router.post('/films', filmControler.createFilm);
router.post('/films/full', filmControler.createFullFilm);
router.get('/films', filmControler.getFilm);
router.put('/films/full', filmControler.updateFullFilm);
router.put('/films/title', filmControler.updateFilmTitle);
router.put('/films/release', filmControler.updateFilmRelease);
router.delete('/films', filmControler.deleteFilm);

module.exports = router;