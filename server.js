import express from 'express'

import pkg from '@prisma/client';
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

const app = express()
app.use(express.json())

//criar as rotas
app.post('/cadastro', async (req,res)=>{
    await prisma.usuario.create({
        data:{
            email: req.body.email,
            nome: req.body.nome,
            idade: req.body.idade
        }
    })

    res.status(201).json(req.body)
})

app.get('/cadastro', async(req,res)=>{
    const usuarios = await prisma.usuario.findMany();
    //res.send('Funfou no get :)')
    res.status(200).json(usuarios)
})

app.put('/cadastro/:id', async(req,res)=>{
    //console.log(req.params.id)   
    
    await prisma.usuario.update({
        where:{
            id:req.params.id
        },
        data:{
            email: req.body.email,
            nome: req.body.nome,
            idade: req.body.idade
        }
    })

    res.status(201).json(req.body)
})

app.delete('/cadastro/:id', async(req,res)=>{
    //console.log(req.params.id)   
    
    await prisma.usuario.delete({
        where:{
            id:req.params.id
        },
    })
    
    res.status(201).json({"message":"Usuário Removido"})
})

//configurar porta do servidor
app.listen(3000,()=>{console.log('Servidor Rodando!')})


//npm i
//npx prisma db push
//node --watch server.js