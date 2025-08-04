const express = require('express');

const { InfoController } = require('../../controllers');
const { AuthRequestMiddlewares } = require('../../middlewares');

const userRoutes = require('./user-routes');
const router = express.Router();

router.get('/info', InfoController.info);

// router.use('/signup', userRoutes);
router.use('/user', userRoutes)

module.exports = router;
