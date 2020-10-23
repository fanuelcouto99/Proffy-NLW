const { pageLanding, pageStudy, pageGiveClasses, saveClasses, pageSucess } = require('./pages');

// Chamando o servidor para ser usado nesse arquivo
const express = require('express');
const server = express();

// Configurando nunjucks para automatizar a criação dos campos das paginas
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
});

// Configurando servidor
server
    .use(express.urlencoded({ extended: true }))

    //configurando servidor para aceitar css e img 
    .use(express.static("public"))

    //traçando as rotas, passando a requisicao e resposta
    .get("/", pageLanding)

    .get("/study", pageStudy)

    .get("/give-classes", pageGiveClasses)

    .get("/page-sucess", pageSucess)

    .post("/save-classes", saveClasses)

    // sendo ouvido na porta 5500
    .listen(5500);