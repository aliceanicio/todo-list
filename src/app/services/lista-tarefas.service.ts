import { Injectable } from '@angular/core';
import { TarefaModel } from './tarefa-model';
​
@Injectable({
providedIn: 'root',
})

export class ListaTarefasService {
public lista: Array<TarefaModel> = [];
private proximoId = 1; 
​
public adicionar(titulo: string, descricao: string, data: string, hora: string, duracao: number): void {
    const novaTarefa = new TarefaModel();
    novaTarefa.id = this.proximoId;
    novaTarefa.titulo = titulo; // Adicionando o título
    novaTarefa.descricao = descricao;
    novaTarefa.data = data; // Adicionando a data
    novaTarefa.hora = hora; // Adicionando a hora
    novaTarefa.duracao = duracao; // Adicionando a duração
    this.lista.push(novaTarefa);
    this.proximoId++;
  }

public alterarStatus(tarefa: TarefaModel): void {
  tarefa.concluida = !tarefa.concluida; // Alterna o status da tarefa
}

}