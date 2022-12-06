import express from 'express'
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

//Aplication
const app = express()

app.use(express.json())

app.use(cors())

//DB
const prisma = new PrismaClient({
    log: ['query']
})

//Routes
//app.use('/app', routes)
//const routes = require("./routes");
app.post('/createClashes', async (request, response) => {
    const body: any = request.body;

   const create = await prisma.clashes.createMany({
        data: [
            { clubA: request.body.data.club1, clubB: request.body.data.club2 },
            { clubA: request.body.data.club3, clubB: request.body.data.club4 },
            { clubA: request.body.data.club5, clubB: request.body.data.club6 },
            { clubA: request.body.data.club7, clubB: request.body.data.club8 },
            { clubA: request.body.data.club9, clubB: request.body.data.club10 },
            { clubA: request.body.data.club11, clubB: request.body.data.club12 },
            { clubA: request.body.data.club13, clubB: request.body.data.club14 },
        ],
        skipDuplicates: true, // Skip 'Bobo'
    }) 

    response.status(201).json(create);
});

app.get('/busca', (request, response) => {
    response.send("Cheguei aqui na API");
});

app.listen(3333)
