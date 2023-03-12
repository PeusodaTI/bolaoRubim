"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const client_1 = require("@prisma/client");
//Aplication
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//DB
const prisma = new client_1.PrismaClient({
    log: ['query']
});
//Routes
//app.use('/app', routes)
//const routes = require("./routes");
app.post('/createClashes', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const body = request.body;
    const date = new Date();
    const create = yield prisma.clashes.createMany({
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
    });
    response.status(201).json(create);
}));
app.get('/getClashes', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const clashes = yield prisma.clashes.findMany({
        orderBy: {
            date: 'desc',
        },
        take: 7,
    });
    return response.json(clashes);
}));
app.get('/busca', (request, response) => {
    //response.send("Cheguei aqui na API");
    const date = new Date();
    const day = date.getDate();
    const month = date.getDay();
    const year = date.getFullYear();
    const dateSave = "`$(day) / $(month) / $(year)`";
    response.json(year);
});
app.listen(3333);
