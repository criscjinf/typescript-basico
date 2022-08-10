import { Negociacao } from "../models/negociacao.js";
import { ListaNegociacoes } from "../models/lista-negociacoes.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private listaNegociacoes: ListaNegociacoes;

  constructor() {
    this.inputData = document.querySelector("#data");
    this.inputQuantidade = document.querySelector("#quantidade");
    this.inputValor = document.querySelector("#valor");
    this.listaNegociacoes = new ListaNegociacoes();
    // this.negociacoesView = new NegociacoesView("#negociacoesView");
    // this.negociacoesView.update(this.listaNegociacoes);
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
    this.listaNegociacoes.lista();
    console.log(this.listaNegociacoes.lista());
    
    this.limparFormulario();
  }

  limparFormulario(): void {
    this.inputData.value = "";
    this.inputQuantidade.value = "";
    this.inputValor.value = "";
    this.inputData.focus();
  }
}
