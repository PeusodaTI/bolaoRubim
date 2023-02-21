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
    const date = new Date();
    
    const create = await prisma.clashes.createMany({
        data: [
            { clubA: request.body.data.club1, clubB: request.body.data.club2, date },
            { clubA: request.body.data.club3, clubB: request.body.data.club4, date },
            { clubA: request.body.data.club5, clubB: request.body.data.club6, date },
            { clubA: request.body.data.club7, clubB: request.body.data.club8, date },
            { clubA: request.body.data.club9, clubB: request.body.data.club10, date },
            { clubA: request.body.data.club11, clubB: request.body.data.club12, date },
            { clubA: request.body.data.club13, clubB: request.body.data.club14, date },
        ],
        skipDuplicates: true, 
    }) 

    response.status(201).json(create);
});

app.get('/getClashes', async (request, response) => {
    const clashes = await prisma.clashes.findMany({
        orderBy: {
            date: 'desc',
        },
        take: 7,
    })

    return response.json(clashes)
})

app.get('/busca', (request, response) => {
    //response.send("Cheguei aqui na API");
    const date = new Date();

    const day = date.getDate();
    const month = date.getDay();
    const year = date.getFullYear();

    const dateSave = "`$(day) / $(month) / $(year)`"
    response.json(year)
});

app.listen(3333)

