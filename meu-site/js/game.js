const socket = io();

socket.on('gameUpdate', function(data) {
    console.log("Atualização do jogo recebida:", data);
    // Atualizar a interface com os dados do jogo
    document.querySelector("#game-status").textContent = data.status;
});
