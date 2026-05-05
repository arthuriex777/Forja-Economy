let bases = {
    base1: [
        ["KEY", "NOME", "IDADE", "SEXO"],
        [1, "Arthur", 18, "M"],
        [2, "Guilherme", 27, "M"],
        [3, "João", 20, "M"],
        [4, "Ana", 16, "F"]
    ],
    base2: [
        ["KEY", "NOME", "IDADE", "SEXO"],
        [1, "Julia", 19, "F"],
        [2, "Rafael", 32, "M"],
        [3, "Cristian", 16, "M"],
        [4, "Luan", 29, "M"]
    ]
}

class Tabela extends HTMLElement {
    connectedCallback() {

        const linhas = this.getAttribute('linhas') || '1';
        const colunas = this.getAttribute('colunas') || '1';

        // const conteudo = bases.flat().map((item, index) => {
        //     return `<p>${item}</p>`;
        // }).join('');

        this.innerHTML = Object.entries(bases).map(([nomeDaBase, matriz]) => {
            return `
            <div>
                <h1>${nomeDaBase}</h1>
                <div class="tabela" style="grid-template-columns: 1fr repeat(${colunas-1}, 3fr)">
                    ${matriz.flat().map((item, index) => {
                        return `<p>${item}</p>`
                    }).join('')}
                </div>
                <a href="">Acessar Tabela</a>
            </div>`
        }).join('');
            
    }
}

customElements.define('tabela-cus', Tabela);