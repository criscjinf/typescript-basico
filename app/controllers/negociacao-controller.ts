import { Negociacao } from "../models/negociacao.js";
import { ListaNegociacoes } from "../models/lista-negociacoes.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { MensagemView } from "../views/mensagem-view.js";

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

  criaNegociacao(): Negociacao {
    return new Negociacao(
      new Date(this.inputData.value.replace(/-/g, ",")),
      parseInt(this.inputQuantidade.value),
      parseFloat(this.inputValor.value)
    );
  }

  adiciona(): void {
    const negociacao = this.criaNegociacao();
    this.listaNegociacoes.adiciona(negociacao);
    this.negociacoesView.update(this.listaNegociacoes);
    this.messageView.update("Negociação adicionada com sucesso!");
    
    this.limparFormulario();
  }

  limparFormulario(): void {
    this.inputData.value = "";
    this.inputQuantidade.value = "";
    this.inputValor.value = "";
    this.inputData.focus();
  }
}
