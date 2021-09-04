"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);

var _homepage = require('../routes/homepage'); var _homepage2 = _interopRequireDefault(_homepage);
var _user = require('../routes/user'); var _user2 = _interopRequireDefault(_user);

 class App {

    
    

    constructor(port) {

        this.port = port;

        this.express = _express2.default.call(void 0, )

        this.listen()
        this.middlewares()

        this.routes()

        console.log('[express] Express iniciado com sucesso.')

    }

     middlewares() {

        this.express.use(_express2.default.json())
        this.express.use(_cors2.default.call(void 0, ))

    }

     listen() {

        this.express.listen(this.port, () => console.log(`[express] Servidor iniciado na porta ${this.port}`))

    }

     routes() {

        console.log('[express] Carregando rotas...')

        this.express.use('/', _homepage2.default)
        this.express.use('/user', _user2.default)

    }


} exports.default = App;