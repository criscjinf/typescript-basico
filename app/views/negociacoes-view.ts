import { ListaNegociacoes } from "../models/lista-negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<ListaNegociacoes> {
  protected template(listaNegociacoes: ListaNegociacoes): string {
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
            <td>${this.formatDate(negociacao.data)}</td>
            <td>${negociacao.quantidade}</td>
            <td>${negociacao.valor}</td>
            <td>${negociacao.volume}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
    `;
  }

  private formatDate(date: Date): string {
    return new Intl.DateTimeFormat("pt-BR").format(date);
  }

}