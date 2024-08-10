const express = require('express');
const router = express.Router();
const { generatePixQRCode } = require('../utils/pix');

// Rota para gerar QR Code PIX
router.post('/generate-pix-qr-code', async (req, res) => {
    const { pixKey, amount } = req.body;

    try {
        const qrCodeUrl = await generatePixQRCode(pixKey, amount);
        res.json({ qrCodeUrl });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao gerar QR Code PIX' });
    }
});

module.exports = router;
