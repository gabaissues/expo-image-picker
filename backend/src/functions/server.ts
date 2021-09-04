import express from 'express';
import cors from 'cors'
import bodyparser from 'body-parser'

import homepage from '../routes/homepage';
import upload from '../routes/upload'

export default class App {

    private express: express.Application;
    private port: number;

    constructor(port: number) {

        this.port = port;

        this.express = express()

        this.listen()
        this.middlewares()

        this.routes()

        console.log('[express] Express iniciado com sucesso.')

    }

    private middlewares(): void {

        this.express.use(express.json({ 
            limit: '50mb'
        }))

        this.express.use(cors())

    }

    private listen(): void {

        this.express.listen(this.port, () => console.log(`[express] Servidor iniciado na porta ${this.port}`))

    }

    private routes() {

        console.log('[express] Carregando rotas...')

        this.express.use('/', homepage)
        this.express.use('/upload', upload)

    }


}