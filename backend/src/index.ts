import Express from './functions/server'

interface Options {
    port: number;
    services: boolean;
}

class Core {

    options: Options;

    constructor(options: Options) {

        this.options = options;
        this.loadServer()

    }

    private loadServer() {

        console.log('[express] Express sendo iniciado...')
        new Express(this.options.port)

    }
}

new Core({
    port: 3333,
    services: false
})