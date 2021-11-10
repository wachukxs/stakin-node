const express = require('express');
const cors = require('cors') // or https://stackoverflow.com/a/68971146/9259701
const app = express();

// before using routes
app.use(cors())
app.use(express.json());

// routes
let userRoutes = require('../controllers/userController')

app.use('/api/v1/user', userRoutes)

module.exports = app