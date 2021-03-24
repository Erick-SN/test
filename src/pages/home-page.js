import { LitElement, html } from 'lit-element';
import '../components/dataComponents/data-component';
import '../components/dataComponents/data-render';
import '../components/nav-menu';

class HomePage extends LitElement {
  dataRecived(e) {
    const data = e.detail.map((info) => ({
      releases: info.releases,
      ocid: info.ocid,
    }));
    const dataRender = this.shadowRoot.querySelector('data-render');
    dataRender.setAttribute('data', JSON.stringify(data));
  }

  render() {
    return html`
      <nav-menu></nav-menu>
      <data-component @data-recived=${this.dataRecived}></data-component>
      <data-render></data-render>
    `;
  }
}

customElements.define('home-page', HomePage);
