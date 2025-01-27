//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes. 
// Os colchetes ([]) são usados para criar arrays porque eles são apropriados para armazenar listas de itens. 
// Já os parênteses (()) servem para chamadas de funções, agrupamentos de expressões ou definição de parâmetros. 
let amigos = [];

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Amigo secreto');
    exibirTextoNaTela('h2', 'Digite o nome de seus amigos');
}

exibirMensagemInicial();
// Para que a função funcione é preciso acrescentar uma linha no código HTML
//<script src="https://code.responsivevoice.org/responsivevoice.js"></script>

// Função para adicionar amigos à lista
function adicionarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nome = inputAmigo.value.trim(); // Remove espaços em branco
    // Aqui, "const" pode ser substituída por "let", mas não é necessário, já que a referência ao campo de entrada (inputAmigo) não muda. 
    // Então, nesse caso, usar const é mais adequado.

    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    // Adiciona o nome à lista de amigos
    amigos.push(nome);
    console.log(amigos);

    // Atualiza a lista de amigos na interface
    atualizarListaAmigos();

    // Limpa o campo de entrada
    inputAmigo.value = "";
}


// Função para atualizar a lista exibida na página
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpa a lista anterior

    // Adiciona os nomes como itens da lista
    amigos.forEach((amigo, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = amigo;
        listItem.classList.add("list-item");

        // Botão para remover o nome da lista
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remover";
        removeButton.classList.add("remove-button");
        removeButton.onclick = () => removerAmigo(index);

        listItem.appendChild(removeButton);
        listaAmigos.appendChild(listItem);
    });
}

// Função para remover um amigo da lista
function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarListaAmigos();
}
// O método splice() em JavaScript é usado para remover elementos de um array.

// Função para realizar o sorteio
function sortearAmigo() {
    const resultado = document.getElementById("resultado");

    if (amigos.length === 0) {
        alert("A lista de amigos está vazia. Adicione pelo menos um nome para sortear.");
        return;
    }

    // Sorteia um índice aleatório
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    // Exibe o resultado na página
    resultado.innerHTML = `<li>O amigo secreto é: <strong>${amigoSorteado}</strong></li>`;
}