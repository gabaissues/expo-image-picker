"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');


const router = _express.Router.call(void 0, )

class User {
    index(req, res) {

        res.json({
            sucess: true,
            location: '/user'
        })

    }
}

router.get('/', new User().index)
exports. default = router;