const Tarefa = require('../models/tarefaModel'); 

async function getTarefas(req, res) { 
    const tarefas = await Tarefa.listarTarefas();
    res.render('tarefas', { tarefas }); //'tarefas' = tarefas.ejs, este recebe um objeto chamado tarefas que contem o conteúdo das tarefas
} 

async function addTarefa(req, res) { 
    const { title } = req.body; //const {title, description}=req.body
    const tarefa = new Tarefa(null, title, null); 
    await tarefa.salvar();
    //tarefas.push(tarefa); 
    res.redirect('/tarefas'); 
} 

/*async function removeTarefa(req, res){

}

async function updateTarefa(req, res){

}

async function deleteTarefa(req, res){
    req.query.id; //tarefa?id=5
}*/

module.exports = { getTarefas, addTarefa };//getTarefas, addTarefa, removeTarefa, updateTarefa, deleteTarefa
