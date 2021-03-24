import { LitElement, html } from 'lit-element';

class DataRender extends LitElement {
  static get properties() {
    return {
      data: {
        type: Array,
        reflect: true,
      },
    };
  }

  constructor() {
    super();
    this.data = [];
  }

  render() {
    return html`
      <ul>
        ${this.data.map(
          (card) => html`
            <h3>${card.ocid}</h3>
            ${card.releases.map(
              ({ publisher, date }) => html`
                <ol>
                  <li>${date}</li>
                  <li>${publisher.name}</li>
                  <li>${publisher.uri}</li>
                </ol>
              `
            )}
          `
        )}
      </ul>
    `;
  }
}

customElements.define('data-render', DataRender);
