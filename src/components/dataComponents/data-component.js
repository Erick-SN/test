import { LitElement, html } from 'lit-element';

class DataComponent extends LitElement {
  static get properties() {
    return {
      loading: { type: Boolean },
      data: { type: Array },
    };
  }
  connectedCallback() {
    super.connectedCallback();
    if (!this.data) {
      this.getData();
    }
  }

  async getData() {
    this.loading = true;
    const response = await fetch(`https://api.datos.gob.mx/v2/Records`);
    const { results } = await response.json();
    this.data = results.map((obj) => obj);
    this._event();
    this.loading = false;
  }

  _event() {
    const event = new CustomEvent('data-recived', {
      detail: this.data,
    });
    this.dispatchEvent(event);
  }
}

customElements.define('data-component', DataComponent);
