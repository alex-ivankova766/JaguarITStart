const Router = require('../framework/Router');
const controller = require('./user-controller')

const router = new Router();

router.get('/users', controller.getUsers);
router.post('/users', controller.createUser);

// router.get('/users', (req, res) => {
//     if(req.params.id) {
//         return res.send(users.find(user => user.id == req.params.id))
//     }
//     res.send(users);
// });

// router.post('/users', (req, res) => {
//     console.log(req.body);
//     const user = req.body;
//     users.push(user);
//     res.send(user);
// });

module.exports = router;