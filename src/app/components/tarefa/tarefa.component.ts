import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TarefaModel } from '../../services/tarefa-model';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css'],
})

export class TarefaComponent implements OnInit {
  @Input() tarefa: TarefaModel = new TarefaModel(); // Recebe a tarefa do componente pai

  // Define o evento de saída para notificar quando a tarefa for concluída
  @Output() tarefaConcluida: EventEmitter<TarefaModel> = new EventEmitter<TarefaModel>();

  constructor() {}

  ngOnInit(): void {}

  // Método para marcar a tarefa como concluída e emitir o evento
  marcarComoConcluida(): void {
    this.tarefa.concluida = true;
    // Emite o evento indicando que a tarefa foi concluída
    this.tarefaConcluida.emit(this.tarefa);
  }
}