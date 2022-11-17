import express from 'express'

const app = express()
const routes = require("./routes");

//Routes
app.use('/routes', routes)

app.listen(3333)

