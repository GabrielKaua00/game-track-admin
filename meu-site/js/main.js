document.getElementById('generate-pix-button').addEventListener('click', async () => {
    const pixKey = 'SUA_CHAVE_PIX';  // Substitua pela chave PIX real
    const amount = parseFloat(document.getElementById('amount-input').value);

    try {
        const response = await fetch('/generate-pix-qr-code', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ pixKey, amount })
        });
        const data = await response.json();
        document.getElementById('pix-qr-code').src = data.qrCodeUrl;
    } catch (error) {
        console.error('Erro ao gerar QR Code PIX:', error);
    }
});
