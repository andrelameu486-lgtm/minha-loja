```javascript
let carrinho = [];

function adicionarCarrinho(nome, preco) {
    carrinho.push({
        nome: nome,
        preco: preco
    });

    atualizarCarrinho();
}

function atualizarCarrinho() {
    const lista = document.getElementById("itensCarrinho");
    const quantidade = document.getElementById("quantidade");
    const total = document.getElementById("total");

    lista.innerHTML = "";

    let soma = 0;

    if (carrinho.length === 0) {
        lista.innerHTML = '<p class="vazio">Seu carrinho está vazio.</p>';
    }

    carrinho.forEach((item, indice) => {
        soma += item.preco;

        lista.innerHTML += `
            <div class="item-carrinho">
                <div>
                    <strong>${item.nome}</strong>
                    <p>R$ ${item.preco.toFixed(2).replace(".", ",")}</p>
                </div>

                <button class="remover-item" onclick="removerItem(${indice})">
                    Remover
                </button>
            </div>
        `;
    });

    quantidade.textContent = carrinho.length;
    total.textContent = soma.toFixed(2).replace(".", ",");
}

function mostrarCarrinho() {
    document.getElementById("painelCarrinho").classList.add("aberto");
    document.getElementById("fundoCarrinho").classList.add("aberto");
}

function fecharCarrinho() {
    document.getElementById("painelCarrinho").classList.remove("aberto");
    document.getElementById("fundoCarrinho").classList.remove("aberto");
}

function removerItem(indice) {
    carrinho.splice(indice, 1);
    atualizarCarrinho();
}

function limparCarrinho() {
    carrinho = [];
    atualizarCarrinho();
}

atualizarCarrinho();
```