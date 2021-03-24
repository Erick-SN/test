import { LitElement, html } from 'lit-element';
import './quote-template';
class QuotesComponent extends LitElement {
  static get properties() {
    return {
      loading: { type: Boolean },
      quote: { type: Array },
      state: { type: Number },
    };
  }

  constructor() {
    super();
    this.loading = false;
    this.quote = [];
    this.state = 1;
  }

  connectedCallback() {
    super.connectedCallback();
    if (!this.fetchData()) this.fetchData(this.state);
  }

  async fetchData(state = 1) {
    this.loading = true;
    const response = await fetch(
      `https://www.breakingbadapi.com/api/quotes/${state}`
    );
    this.quote = await response.json();
    this.loading = false;
  }

  render() {
    const { author, quote } = !!this.quote && this.quote[0];

    const loading = html`<p>loading</p>`;

    if (this.loading) return loading;
    return html` <quote-template
      .author=${author}
      .quote=${quote}
      @next-quote=${this._handleNext}
    ></quote-template>`;
  }

  _handleNext() {
    this.state++;
    this.fetchData(this.state);
  }
}

customElements.define('quote-component', QuotesComponent);
