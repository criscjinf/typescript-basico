import { Negociacao } from "./negociacao";

export class ListaNegociacoes {
  private _negociacoes: Negociacao[] = [];

  adiciona(negociacao: Negociacao): void {
    this._negociacoes.push(negociacao);
  }

  lista(): readonly Negociacao[] {
    return this._negociacoes;
  }
}