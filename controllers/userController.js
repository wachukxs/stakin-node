const express = require('express');
let router = express.Router();

const userService = require('./../services/userService')

// can import auth services as middle for routes
router.get('/', userService.serveIndexPage);

// will re-name routes
router.get('/d3-js', userService.serveD3Page);

router.get('/chart-js', userService.serveIndexPage);

router.get('/service-report', userService.getServiceReport);

module.exports = router;