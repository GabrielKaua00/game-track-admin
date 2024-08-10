document.addEventListener('DOMContentLoaded', function() {
    // Funções relacionadas à autenticação
    console.log("Página de autenticação carregada!");

    document.querySelector("#login-form").addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.querySelector("#username").value;
        const password = document.querySelector("#password").value;

        fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
        .then(response => response.json())
        .then(data => {
            if (data.token) {
                localStorage.setItem('token', data.token);
                window.location.href = '/profile';
            } else {
                alert('Login falhou!');
            }
        })
        .catch(error => console.error('Erro ao fazer login:', error));
    });
});
