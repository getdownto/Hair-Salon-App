const controllers = require('../controllers/');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.team.get.all);

// router.get('/:id', controllers.team.get.single);

router.post('/',  controllers.team.post);

// router.put('/:id', auth(), controllers.team.put);

// router.delete('/:id', auth(), controllers.team.delete);

module.exports = router;