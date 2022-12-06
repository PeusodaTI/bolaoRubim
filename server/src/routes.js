const express = require('express')

const router = express.Router()

router.post('/create', (request, response) => {
    response.send([request.body]);
});

router.get('/busca', (request, response) => {
    response.send("Cheguei aqui na API");
});

module.exports = router;