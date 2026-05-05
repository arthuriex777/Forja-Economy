// Exemplos
class MeuCard extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <style>
                .card { border: 1px solid black; padding: 10px; }
            </style>
            <div class="card">
                <p>Sou um Web Component!</p>
            </div>
        `;
    }
}

class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <h1 class="Header">Forja Films</h1>
            </header>
        `
    }
}

class Credits extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <h4>Esse é o footer</h4>
            <h4>Esse é o footer 2</h4>
        `
    }
}

class Navg extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav>
                <button>Dash</button>
                <button>Base de Dados</button>
                <button>Home</button>
                <button>To Do</button>
                <button>Tema</button>
            </nav>
        `
    }
}

customElements.define('meu-card', MeuCard);
customElements.define('hea-der', Header);
customElements.define('cre-dits', Credits);
customElements.define('nav-bar', Navg);