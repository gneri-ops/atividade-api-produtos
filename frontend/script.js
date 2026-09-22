async function carregarDados() {
    const url = 'https://verbose-zebra-xrv7pg7w7qxx3vj4w-3000.app.github.dev/';

    const resposta = await fetch(url);

    const produto = await resposta.json();

    const listaProdutos = document.getElementById('lista-produtos');

    listaProdutos.innerHTML = `
        <div class="card">
            <h2>${produto.nome}</h2>

            <p>
                <strong>Categoria:</strong>
                ${produto.categoria}
            </p>

            <p class="preco">
                R$ ${produto.preco.toFixed(2).replace('.', ',')}
            </p>
        </div>
    `;
}

carregarDados();