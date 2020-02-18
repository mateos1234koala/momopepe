import express = require("express");
import {Calculadora} from "./calculadora"

const PORT =  process.env.PORT || 3000

let main = () => {
    let app: express.Application = express()

    app.set('view engine', 'pug')
    app.set('views', './views')

    app.get('/calculadora', function (req: any, res: any) {
        res.render('calculadora', {
            suma: "0"
        })
    })

    app.get('/sumar', function (req: any, res: any) {
        let op1: string = req.query.op1
        let op2: string = req.query.op2
        let calculadora = new Calculadora()

        res.render('calculadora', {
            suma: calculadora.sumar(parseInt(op1), parseInt(op2))
        })
    })

    app.listen(PORT, () => {
        console.log(`Server running in port ${PORT}`);
    })
}

main()