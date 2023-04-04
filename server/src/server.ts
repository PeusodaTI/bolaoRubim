import express, { request } from 'express'
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
app.post('/createClashes', async (request, response) => {
    const body: any = request.body;
    const date = new Date();

    try {
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
    } catch {
        response.status(501).json("error");
    }
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

interface Guess {
    id: string,
    clubA: number,
    clubB: number
}

app.post('/createGuesses', async (request, response) => {
    const body: any = request.body;
    let validate = false
    const date = new Date();
    
    if(request.body.validate == 'on') {
        validate = true
    }
    console.log(validate)
    try {
        const user = await prisma.players.create({
            data: {
                name: request.body.name,
                phoneNumber: request.body.phoneNumber,
                date: date,
            }
        })

        for(const guess of request.body.guess as Guess[]) {
            const create = await prisma.guesses.create({
                data: {
                    resultClubA: guess.clubA,
                    resultClubB: guess.clubB,
                    validation: validate,
                    clashesId: guess.id,
                    playersId: user.id,
                    date: date,
                }
            })
        }

        response.status(201).json("Palpite cadastrado com sucesso!")
    } catch {
        response.status(501).json("Erro ao cadastrar o Palpite!")
    }
})

app.get('/getGuesses', async(request, response) => {

    const players = await prisma.guesses.findMany({
        include: {
                Players: true,
        }
    })

    console.log(players)

    return response.json(players)
})

app.listen(3333)

