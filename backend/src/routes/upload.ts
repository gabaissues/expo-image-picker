import fs from "fs";
import { Router } from "express";

const router = Router();

interface User {
    username: string;
}


router.post("/avatar", async (req, res) => {

    if (!req.body.user || !req.body.file) return res.status(401).json({ sucess: false, message: 'Não foi possivel realizar o UPLOAD do arquivo, o mesmo não foi inserido.' })
    let base64Image = req.body.file.split(";base64,").pop()

    const user: User[] = [{
        username: 'gbxxy'
    }]

    if (!user.map((a) => a.username).includes(req.body.user)) return res.status(404).send({ sucess: false, message: 'Não consegui encontrar o usuário que você deseja mudar o avatar.' })
    fs.writeFile(`src/uploads/${req.body.user}.png`, base64Image, { encoding: "base64" }, (err) => {

        if (err) return res.status(501).json({ sucess: false, message: 'Houve um erro interno do servidor ao salvar o arquivo.' }), console.log(err)
        
        res.status(200).json({
            sucess: true,
            message: 'Avatar alterado com sucesso.'
        })

    })

});
export default router;
