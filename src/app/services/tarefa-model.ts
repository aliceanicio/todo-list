export class TarefaModel {
  id: number = 0;
  titulo: string = '';
  descricao: string = '';
  concluida: boolean = false;
  editando: boolean = false;
  data: string = '';
  hora: string = '';
  duracao: number = 0;
  editandoTitulo: boolean = false; 
  editandoDescricao: boolean = false;
  editandoData: boolean;
  novaHoraTarefa: string = ''; 
  editandoDuracao?: boolean;
  duracaoEditavel: number; 
  editarHoraTarefa: any;
  editandoInfo: boolean = true;

  constructor() {
    this.editandoData = false;
    this.duracaoEditavel = this.duracao;
  }
}
