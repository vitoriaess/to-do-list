class Tarefa { 
    constructor(id, title, description) { 
    this.id = id; 
    this.title = title; 
    this.description = description; 
    } 

    static async listarTarefas(){
        const Database = require('./Database');
        return await Database.query("SELECT * FROM tarefas");
    }

    async salvar(){
        const Database = require('./Database');
        let resp = await Database.query(`INSERT INTO tarefas (nome_tarefa, descricao) VALUES('${this.title}','${this.description}')`);
        this.id=resp.insertId;
    }
} 
module.exports = Tarefa;
    