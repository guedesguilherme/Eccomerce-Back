const express = require("express");
const router = express.Router();
const Produto = require("../model/modelProduto");

router.get('/', async (req, res) => {
    try {
        const produto = await Produto.find();
        res.status(200).json(produto);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});
// Cadastra um novo produto (POST)
router.post('/post', async (req, res) => {
    try {
        const {
            nomeProduto,
            qtdProduto,
            precoProduto
        } = req.body;
        const newProduto = new Produto({
            nomeProduto,
            qtdProduto,
            precoProduto
        });
        await newProduto.save();
        res.status(201).json({
            message: 'Produto cadastrado com sucesso'
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});
// Busca um produto por ID (GET)
router.get('/:id', async (req, res) => {
    try {
        const produto = await Produto.findById(req.params.id);
        res.status(200).json(produto);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});
// Deleta um produto por ID (DELETE)
router.delete('/delete/:id', async (req, res) => {
    try {
        await Produto.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: 'Produto excluído com sucesso'
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});
// Altera um produto por ID (PUT)
router.put('/put/:id', async (req, res) => {
    try {
        const {
            nomeProduto,
            qtdProduto,
            precoProduto
        } = req.body;
        await Produto.findByIdAndUpdate(req.params.id, {
            nomeProduto,
            qtdProduto,
            precoProduto
        });
        res.status(200).json({
            message: 'Produto atualizado com sucesso'
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});

module.exports = router;