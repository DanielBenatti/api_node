import express from 'express';

import pkg from '@prisma/client';
const { PrismaClient } = pkg;
const prisma = new PrismaClient();
const app = express()

app.use(express.json())

//criar as rotas

app.get("/cadastro",async(req, res)=>{
    const usuarios = await prisma.usuario.findMany();
    res.status(200).json(usuarios)
})

app.post("/cadastro",async(req,res)=>{
    await prisma.usuario.create({
        data:{
            email: req.body.email,
            nome: req.body.nome,
            idade: req.body.idade,
        }
    })
    res.status(201).json(req.body)
})

//cibfugyrar porta do servidor
app.listen(3000,()=>{console.log('Primal Ok')})