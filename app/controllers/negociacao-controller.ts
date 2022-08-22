import { Negociacao } from "../models/negociacao.js";
import { ListaNegociacoes } from "../models/lista-negociacoes.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { MensagemView } from "../views/mensagem-view.js";
import { DayOfWeek } from "../enums/day-of-week.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private listaNegociacoes: ListaNegociacoes;
  private negociacoesView = new NegociacoesView("#negociacoesView");
  private messageView = new MensagemView("#mensagemView");

  constructor() {
    this.inputData = document.querySelector("#data");
    this.inputQuantidade = document.querySelector("#quantidade");
    this.inputValor = document.querySelector("#valor");
    this.listaNegociacoes = new ListaNegociacoes();
    this.negociacoesView.update(this.listaNegociacoes);
  }

  private criaNegociacao(): Negociacao {
    return new Negociacao(
      new Date(this.inputData.value.replace(/-/g, ",")),
      parseInt(this.inputQuantidade.value),
      parseFloat(this.inputValor.value)
    );
  }

  public adiciona(): void {
    const negociacao = this.criaNegociacao();
    if (!this.isAnUtilDay(negociacao.data)) {
      this.messageView.update("Somente negociações em dias úteis são aceitas!");
      return;
    }

    this.listaNegociacoes.adiciona(negociacao);
    this.updateView();    
    this.limparFormulario();
  }

  private isAnUtilDay(data: Date): boolean {
    return data.getDay() > DayOfWeek.Sunday && data.getDay() < DayOfWeek.Saturday;
  }

  private limparFormulario(): void {
    this.inputData.value = "";
    this.inputQuantidade.value = "";
    this.inputValor.value = "";
    this.inputData.focus();
  }

  private updateView() {
    this.negociacoesView.update(this.listaNegociacoes);
    this.messageView.update("Negociação adicionada com sucesso!");
  }
}
