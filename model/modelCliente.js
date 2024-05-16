require("./db");
const mongoose = require("mongoose");
const Schema = mongoose.Schema

const ClienteSchema  = new Schema ({
    nomeCliente: {
        type: String,
        required: true
    },
    cpfCliente: {
        type: String,
        required: true
    },
    idadeCliente: {
        type: String,
        required: false
    },
    emailCliente: {
        type: String,
        required: true
    }
}, { collection: "cliente" })

const Cliente = mongoose.model("cliente", ClienteSchema);

module.exports = Cliente;