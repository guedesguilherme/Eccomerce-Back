const mongoose = require("mongoose")

mongoose.Promise = global.Promise;
db = mongoose.connect("mongodb://localhost:27017/App-Desenvolvimento-Web-10-05-2024")
.then(() => console.log('MongoDB conectado com sucesso!'))
.catch(err => console.error('Falha ao conectar com MongoDB:', err));