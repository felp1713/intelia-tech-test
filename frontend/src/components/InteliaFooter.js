class InteliaFooter extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const wrapper = document.createElement('footer');

    const style = document.createElement('style');
    style.textContent = `
      footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 30px;
        margin-top: 20px;
        font-family: 'League Spartan', sans-serif;
        color: #888888;
      }
      img {
        height: 24px;
        margin-bottom: 12px;
        opacity: 0.8;
        transition: opacity 0.3s;
      }
      img:hover {
        opacity: 1;
      }
      p {
        margin: 0;
        font-size: 14px;
        font-weight: 400;
      }
    `;

    const currentYear = new Date().getFullYear();
    wrapper.innerHTML = `
      <a href="https://intelia.com.br" target="_blank" rel="">
        <img src="/logo_intelia_login.png" alt="Logo Intelia" />
      </a>
      <p>© ${currentYear} Intelia. Todos os direitos reservados.</p>
    `;

    shadow.appendChild(style);
    shadow.appendChild(wrapper);
  }
}

customElements.define('intelia-footer', InteliaFooter);