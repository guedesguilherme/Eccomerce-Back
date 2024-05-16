const express = require("express");
const router = express.Router();
const Cliente = require("../model/modelCliente");

router.get('/', async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.status(200).json(clientes);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});
// Cadastra um novo cliente (POST)
router.post('/post', async (req, res) => {
    try {
        const {
            nomeCliente,
            cpfCliente,
            idadeCliente,
            emailCliente
        } = req.body;
        const newCliente = new Cliente({
            nomeCliente,
            cpfCliente,
            idadeCliente,
            emailCliente
        });
        await newCliente.save();
        res.status(201).json({
            message: 'Cliente cadastrado com sucesso'
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});
// Busca um cliente por ID (GET)
router.get('/:id', async (req, res) => {
    try {
        const cliente = await Cliente.findById(req.params.id);
        res.status(200).json(cliente);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});
// Deleta um cliente por ID (DELETE)
router.delete('/delete/:id', async (req, res) => {
    try {
        await Cliente.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: 'Cliente excluído com sucesso'
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});
// Altera um cliente por ID (PUT)
router.put('/put/:id', async (req, res) => {
    try {
        const {
            nomeCliente,
            cpfCliente,
            idadeCliente,
            emailCliente
        } = req.body;
        await Cliente.findByIdAndUpdate(req.params.id, {
            nomeCliente,
            cpfCliente,
            idadeCliente,
            emailCliente
        });
        res.status(200).json({
            message: 'Cliente atualizado com sucesso'
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});

module.exports = router;