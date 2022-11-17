const express = require('express')

const router = express.Router()

router.get('/teste', function (req, res) {
    res.send('GET request to the homepage');
});

module.exports = router;