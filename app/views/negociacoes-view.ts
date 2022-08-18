import { ListaNegociacoes } from "../models/lista-negociacoes.js";

export class NegociacoesView {
  private elemento: HTMLElement;
  constructor(selector: string) {
    this.elemento = document.querySelector(selector);
  }

  template(listaNegociacoes: ListaNegociacoes): string {
    return `
    <table class="table table-hover table-bordered">
      <thead>
        <tr>
          <th>DATA</th>
          <th>QUANTIDADE</th>
          <th>VALOR</th>
          <th>VOLUME</th>
        </tr>
      </thead>

      <tbody>
        ${listaNegociacoes.lista().map(negociacao => `
          <tr>
            <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
            <td>${negociacao.quantidade}</td>
            <td>${negociacao.valor}</td>
            <td>${negociacao.volume}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
    `;
  }
  update(listaNegociacoes: ListaNegociacoes): void {
    this.elemento.innerHTML = this.template(listaNegociacoes);
  }
}