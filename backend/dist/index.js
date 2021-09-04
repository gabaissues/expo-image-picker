"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _server = require('./functions/server'); var _server2 = _interopRequireDefault(_server);






class Core {

    

    constructor(options) {

        this.options = options;
        this.loadServer()

    }

     loadServer() {

        console.log('[express] Express sendo iniciado...')
        new (0, _server2.default)(this.options.port)

    }
}

new Core({
    port: 3333,
    services: false
})