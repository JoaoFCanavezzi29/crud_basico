const express = require('express');
const router = express.Router();
const { Aluno } = require('../models');

// Listar alunos
router.get("/", async (req, res) => {
    const alunos = await Aluno.findAll();
    res.render("base", {
        title: "Listar Alunos",
        view: "alunos/show",
        alunos,
    });
});

// Formulário para adicionar aluno
router.get("/add", async (req, res) => {
    res.render("base", {
        title: "Adicionar Aluno",
        view: "alunos/add",
    });
});

// Adicionar novo aluno no banco de dados
router.post("/add", async(req, res) =>{
    await Aluno.create({
        nome: req.body.nome,
        data_nascimento: req.body.data_nascimento
    });
    res.redirect("/alunos");
});

router.post("/delete/:id", async (req, res) => { 

await Aluno.destroy({ where: { id: req.params.id } }); 

res.redirect("/alunos"); 

}); 

module.exports = router;
