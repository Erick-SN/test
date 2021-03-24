import { LitElement, html } from 'lit-element';

class QuoteTemplate extends LitElement {
  static get properties() {
    return {
      author: { type: String },
      quote: { type: String },
    };
  }
  constructor() {
    super();
    this.author = '';
    this.quote = '';
  }
  render() {
    return html`<blockquote>
        <p>${this.quote}</p>
        <footer>- ${this.author}</footer>
      </blockquote>
      <button @click=${this._handleNext}>Next</button>`;
  }

  _handleNext() {
    this.dispatchEvent(new CustomEvent('next-quote'));
  }
}

customElements.define('quote-template', QuoteTemplate);
