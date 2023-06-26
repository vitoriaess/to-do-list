const Tarefa = require('../models/tarefaModel'); 

const tarefas = []; //ou pode ser: let

function getTarefas(req, res) { 
    //tarefas=Tarefa.listarTarefa();
    res.render('tarefas', { tarefas }); //'tarefas' = tarefas.ejs, este recebe um objeto chamado tarefas que contem o conteúdo das tarefas
} 

function addTarefa(req, res) { 
    const { title } = req.body; //const {title, description}=req.body
    const tarefa = new Tarefa(Date.now(), title, false); 
    tarefas.push(tarefa); 
    res.redirect('/tarefas'); 
} 

module.exports = { getTarefas, addTarefa, };
