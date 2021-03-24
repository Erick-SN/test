import { LitElement, html } from 'lit-element';

class navMenu extends LitElement {
  render() {
    return html` <nav>
      <ul>
        <li>
          <a href="/">Home</a>
          <a href="/quotes">Quotes</a>
        </li>
      </ul>
    </nav>`;
  }
}

customElements.define('nav-menu', navMenu);
