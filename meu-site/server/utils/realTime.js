const io = require('socket.io')(3000);

io.on('connection', (socket) => {
    console.log('Usuário conectado');
    
    socket.on('disconnect', () => {
        console.log('Usuário desconectado');
    });

    // Outros eventos
});
