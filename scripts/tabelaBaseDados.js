const menu = document.getElementById('menu-coluna');
const inputNome = document.getElementById('input-nome-coluna');
const selectTipo = document.getElementById('select-tipo-coluna');

let colunaAtiva = null;

const iconesTipo = {
  'texto': 'Aa',
  'numero': '#',
  'boolean': '☑',
  'escolha': '≡'
};

function abrirMenu(e) {
  const th = e.target.closest('.th-interativo');
  if (!th) return;

  colunaAtiva = th;

  // Pega as coordenadas do TH para posicionar o menu exatamente embaixo dele
  const rect = th.getBoundingClientRect();

  // Mostra o menu (ajustando a posição considerando o scroll da página)
  menu.classList.remove('oculto');
  menu.style.top = (rect.bottom + window.scrollY + 5) + 'px';
  menu.style.left = (rect.left + window.scrollX) + 'px';

  // Preenche o menu com os dados atuais da coluna clicada
  inputNome.value = th.querySelector('.th-name').textContent;
  selectTipo.value = th.getAttribute('data-type') || 'texto';
}

// Fechar Menu ao Clicar Fora
document.addEventListener('click', function (e) {
  // Se o clique NÃO foi dentro do menu e NÃO foi em um TH, fecha o menu
  if (!menu.contains(e.target) && !e.target.closest('.th-interativo')) {
    menu.classList.add('oculto');
    colunaAtiva = null;
  }
});
function alterarNome() {
  if (colunaAtiva) {
    colunaAtiva.querySelector('.th-name').textContent = document.getElementById('input-nome-coluna').value;
  }
}

function alterarDado() {
  if (colunaAtiva) {
    const novoTipo = document.getElementById('input-nome-coluna').value;
    colunaAtiva.setAttribute('data-type', novoTipo);
    colunaAtiva.querySelector('.th-icon').textContent = iconesTipo[novoTipo];
  }
}

function addColuna() {
  // 1. Buscamos a tabela e as linhas exatamente na hora do clique!
  const tabela = document.getElementById('minha-tabela');
  const theadRow = tabela.querySelector('thead tr');
  const tbodyRows = tabela.querySelectorAll('tbody tr');

  const numColunasAtuais = theadRow.children.length; // Conta com a coluna de índice

  // Cria o novo th com a estrutura interna
  const novoTh = document.createElement('th');
  novoTh.classList.add('th-interativo');
  novoTh.setAttribute('data-type', 'texto');

  novoTh.innerHTML = `
      <div class="th-content">
          <span class="th-icon">Aa</span>
          <span class="th-name">Coluna ${numColunasAtuais}</span>
      </div>
  `;

  theadRow.appendChild(novoTh);

  // Adiciona células vazias no corpo da tabela
  tbodyRows.forEach(linha => {
    const novoTd = document.createElement('td');
    novoTd.setAttribute('contenteditable', 'true');
    novoTd.classList.add('celula-dado');
    linha.appendChild(novoTd);
  });
}