API REST feita com NodeJS e MongoDB com duas collections e todos os métodos CRUD.

Como instalar:
1 - Dê um git clone no repositório;
2 - npm i
3 - npx nodemon index.js

As rotas foram padronizadas para a seguinte maneira:
http://localhost:{PORT}}/{cliente}/{método}/{:id}

PORT: A porta que você quer rodar o projeto.
Cliente: caso você queira acessar os métodos do cliente, para acessar o do produto basta trocar por "produto".
Método: Literalmente o método. Post, put ou delete. 
Id: Para alterar ou deletar, a API que faz essa parte.
