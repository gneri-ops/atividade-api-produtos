async function carregarDados() {

    const url = 'https://verbose-zebra-xrv7pg7w7qxx3vj4w-3000.app.github.dev/';

    try {

        const resposta = await fetch(url);

        const produtos = await resposta.json();

        const listaProdutos = document.getElementById('lista-produtos');

        listaProdutos.innerHTML = produtos.map((produto, index) => `
            
            <div class="card" style="animation-delay: ${index * 0.2}s">

                <div class="imagem-container">

                    <img
                        src="${produto.imagem}"
                        alt="${produto.nome}"
                        class="imagem-produto"
                    >

                </div>

                <div class="informacoes">

                    <h2>${produto.nome}</h2>

                    <p class="categoria">
                        ${produto.categoria}
                    </p>

                    <p class="preco">
                        R$ ${produto.preco.toFixed(2).replace('.', ',')}
                    </p>

                    <button>
                        Ver produto
                    </button>

                </div>

            </div>

        `).join('');

    } catch (erro) {

        console.error('Erro ao carregar os produtos:', erro);

        document.getElementById('lista-produtos').innerHTML = `
            <p class="erro">
                Não foi possível carregar os produtos.
            </p>
        `;
    }
}

carregarDados();