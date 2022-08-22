import { Negociacao } from "./negociacao";

export class ListaNegociacoes {
  private _negociacoes: Negociacao[] = [];

  public adiciona(negociacao: Negociacao): void {
    this._negociacoes.push(negociacao);
  }

  public lista(): readonly Negociacao[] {
    return this._negociacoes;
  }
}