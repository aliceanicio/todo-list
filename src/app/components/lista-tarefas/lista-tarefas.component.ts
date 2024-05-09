import { Component, OnInit } from '@angular/core';
import { ListaTarefasService } from '../../services/lista-tarefas.service';
import { TarefaModel } from '../../services/tarefa-model';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css']
})
export class ListaTarefasComponent implements OnInit {

  tituloNovaTarefa = '';
  descricaoNovaTarefa = '';
  dataNovaTarefa: string = ''; 
  horaNovaTarefa: string = '00:00'; 
  duracaoNovaTarefa: number = 0; 
  dataMinima: string = '';
  novaDataTarefa: string = '';
  editarHoraTarefa: boolean = false;
  horaEditavel: string = ''; 
  editarDuracaoTarefa: boolean = false;
  duracaoEditavel: number = 0;


  constructor(public svc: ListaTarefasService) {
    const hoje = new Date();
    const ano = hoje.getFullYear();
    const mes = hoje.getMonth() + 1 < 10 ? '0' + (hoje.getMonth() + 1) : hoje.getMonth() + 1;
    const dia = hoje.getDate() < 10 ? '0' + hoje.getDate() : hoje.getDate();
    this.dataNovaTarefa = `${ano}-${mes}-${dia}`;
  }

  ngOnInit(): void {}

  adicionar(): void {
    if (this.tituloNovaTarefa.trim() === '') {
      alert('Por favor, preencha o campo de título.');
      return;
    }

    // Adiciona a nova tarefa
    this.svc.adicionar(this.tituloNovaTarefa, this.descricaoNovaTarefa, this.dataNovaTarefa, this.horaNovaTarefa, this.duracaoNovaTarefa);
    
    // Reseta os campos após adicionar a tarefa
    this.tituloNovaTarefa = '';
    this.descricaoNovaTarefa = '';
    this.dataNovaTarefa = ''; 
    this.horaNovaTarefa = '00:00'; 
    this.duracaoNovaTarefa = 0; 

    // Atualiza a dataNovaTarefa para a data atual novamente
    const hoje = new Date();
    const ano = hoje.getFullYear();
    const mes = hoje.getMonth() + 1 < 10 ? '0' + (hoje.getMonth() + 1) : hoje.getMonth() + 1;
    const dia = hoje.getDate() < 10 ? '0' + hoje.getDate() : hoje.getDate();
    this.dataNovaTarefa = `${ano}-${mes}-${dia}`;
  }

  alterarStatus(tarefa: TarefaModel): void {
    this.svc.alterarStatus(tarefa);
  }

  editarTarefa(item: TarefaModel): void {
    item.editando = true;
  }

  editarTitulo(tarefa: TarefaModel): void {
  tarefa.editandoTitulo = !tarefa.editandoTitulo;
}


  salvarEdicaoTitulo(item: TarefaModel): void {
  item.editandoTitulo = false;
  
}
editarDescricao(item: TarefaModel): void {
  item.editandoDescricao = true; // Entra no modo de edição da descrição
}

editarDataTarefa(item: TarefaModel): void {
  item.editandoData = true; 
}

salvarDataTarefa(item: TarefaModel): void {
  item.data = this.novaDataTarefa;
  item.editandoData = false; 
}

salvarEdicaoDescricao(item: TarefaModel): void {
  item.editandoDescricao = false;
}

 editarHora(item: TarefaModel): void { // Adicione esse método
    this.editarHoraTarefa = true;
    this.horaEditavel = item.hora;
  }

  salvarEdicaoHora(item: TarefaModel): void {
  item.hora = this.horaEditavel;
  this.editarHoraTarefa = false; // Define editarHoraTarefa como falso para desabilitar o modo de edição
}

  excluirTarefa(tarefa: TarefaModel): void {
    const confirmacao = window.confirm('Deseja apagar a tarefa?');
    if (confirmacao) {
      const index = this.svc.lista.indexOf(tarefa);
      if (index !== -1) {
        this.svc.lista.splice(index, 1);
      }
    }
  }
}
