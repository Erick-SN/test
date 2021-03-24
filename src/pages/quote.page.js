import { LitElement, html } from 'lit-element';
import '../components/nav-menu';
import '../components/quotesComponents/quotes-component';
class QuotePage extends LitElement {
  render() {
    return html`
      <nav-menu></nav-menu>
      <quote-component></quote-component>
    `;
  }
}

customElements.define('quote-page', QuotePage);
