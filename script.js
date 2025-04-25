// Armazena as informações do livro
const livro = ["O Pequeno Príncipe", "1943"];

// Função que preenche os elementos HTML
function preencherDadosLivro() {
    document.getElementById("nome").textContent = livro[0];
    document.getElementById("ano").textContent = livro[1];
}

// Chama a função quando a página estiver carregada
window.onload = preencherDadosLivro;
