import express from 'express'

const app = express()

app.use(express.json())

const usuarios = []


//criar as rotas

app.get("/cadastro",(req, res)=>{
    //res.send('Ok')
    res.status(200).json(usuarios)
})

app.post("/cadastro",(req,res)=>{
    //console.log(req.body)
    //res.send("OK 2.0")
    usuarios.push(req.body)
    res.status(201).json(req.body)
})

//cibfugyrar porta do servidor
app.listen(3000,()=>{console.log('Primal Ok')})