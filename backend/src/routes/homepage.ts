import { Router } from 'express'
const router = Router()

router.get('/', (req, res) => {
    res.json({
        sucess: true
    })
})

export default router;