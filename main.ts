import express =  require("express");

<<<<<<< HEAD
const PORT = 3000
=======
export class Calculadora
{
    sumar(op1:number, op2 : number)
    {
        return op1 + op2
    }
}
>>>>>>> 1698b347ecd9bfd29d033a0c7083459dfb09c752

let main = () =>
{
    let app : express.Application = express()

    app.set('view engine', 'pug')
    app.set('views', './views')

    app.get('/calculadora', function(req: any, res : any){
        res.render('calculadora', {
            suma : "0"
        })
    })
    app.get('/sumar', function(req: any, res : any){
        let op1 : string = req.query.op1
        let op2 : string = req.query.op2
<<<<<<< HEAD
        res.render('calculadora', {
            suma : parseInt(op1) + parseInt(op2)
=======
        let calculadora = new Calculadora()
        res.render('calculadora', {
            suma : calculadora.sumar(parseInt(op1), parseInt(op2))
>>>>>>> 1698b347ecd9bfd29d033a0c7083459dfb09c752
        })
    })

    // Iniciamos la ejecucion del server
<<<<<<< HEAD
    app.listen(PORT, ()=>{
        console.log(`Server running in port ${PORT}`);
=======
    let puerto = process.env.PORT || 3000

    app.listen(puerto, ()=>{
        console.log(`Server running in port ${puerto}`);
>>>>>>> 1698b347ecd9bfd29d033a0c7083459dfb09c752
    })
}

main()