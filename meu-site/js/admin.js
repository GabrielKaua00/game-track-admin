document.addEventListener('DOMContentLoaded', function() {
    // Funções específicas para a área de administração
    console.log("Administração carregada!");

    // Exemplo de função para atualizar conteúdo
    function atualizarConteudo() {
        // Lógica para atualizar conteúdo
        console.log("Conteúdo atualizado!");
    }

    document.querySelector("#update-content").addEventListener("click", atualizarConteudo);
});
