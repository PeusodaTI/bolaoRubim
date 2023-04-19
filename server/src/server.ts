import express, { request } from 'express'
import cors from 'cors';
import { PrismaClient, Prisma } from '@prisma/client';

//Aplication
const app = express()

app.use(express.json())

app.use(cors({
    
}))

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
    date.setHours(0, 0, 0 ,0)
    
    if(request.body.validate == 'on') {
        validate = true
    }
    console.log(validate)
    try {
        const user = await prisma.players.create({
            data: {
                name: request.body.name,
                phoneNumber: request.body.phoneNumber,
                validation: validate,
                date: date,
            }
        })

        for(const guess of request.body.guess as Guess[]) {
            const create = await prisma.guesses.create({
                data: {
                    resultClubA: guess.clubA,
                    resultClubB: guess.clubB,
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

app.get('/getPlayers', async(request, response) => {
    const now = new Date()
    now.setUTCHours(0, 0, 0 ,0)
  
    const filter: Prisma.GuessesWhereInput = {
      date: {
        gte: now,
        lt: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1),
      },
    };

    console.log(filter)

    const players = await prisma.players.findMany({
/*        include: {
            Guesses: true,
        },*/
        where: filter,
    })

    console.log(players)

    return response.json(players)
})

app.get('/getGuess/:id', async(request, response) => {
    const id = request.params.id

    const guess = await prisma.guesses.findMany({
        include: {
            Clashes: true,
            Players: true,
        },
        where: {
            playersId: id
        }
    })

    console.log(guess)

    return response.json(guess)
})

app.get('/routing', (request, response) => {
    response.send("Hello Docker!!!")
})
app.listen(3333)

