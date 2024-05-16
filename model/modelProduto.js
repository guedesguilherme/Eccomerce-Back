require("./db");
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ProdutoSchema = new Schema({
    nomeProduto: {
        type: String,
        required: true
    },
    qtdProduto: {
        type: Number,
        required: true,
        /*validate: {
            validator: Number.isIntegers
        }*/
    },
    precoProduto: {
        type: Number,
        required: true
    }
}, { collection: "produto" });

const Produto = mongoose.model("Produto", ProdutoSchema);

module.exports = Produto;