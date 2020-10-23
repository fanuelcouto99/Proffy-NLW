# Proffy
Sistema desenvolvido durante a Semana Discovery 12, que visa facilitar estudantes com a busca de professores.

<p align="center">
    <img src="https://github.com/fanuelcouto99/Proffy-NLW/blob/main/public/assets/landing.svg" width="600">
</p>

<hr>

### :scroll: Sobre o projeto

<p>O projeto foi desenvolvido durante a Semana Discovery 12, que tem por objetivo facilitar estudades a encontrarem professores de diversas áres para obterem aulas particulares.</p>
<p>Com isso foi criada uma aplicação Web, usando NodeJs para servidor, e JavaScript para backend além do CSS ser feito especificamente para o projeto.</p>

<p align="center">
    <img src="https://github.com/fanuelcouto99/Proffy-NLW/blob/main/public/assets/node-js.png" width="400">
    <img src="https://github.com/fanuelcouto99/Proffy-NLW/blob/main/public/assets/logo-js.png" width="200" height="200">
</p>  

<p> Ao acessar a plataforma, poderá ser visualizado as opções da ferramenta e escolher entre Estudar ou Dar aulas.</p>

<p align="center">
    <img src="https://github.com/fanuelcouto99/Proffy-NLW/blob/main/public/assets/img/index.png" width="1200">
</p>

<p> Navegação entre as telas do Projeto</p>

<p align="center">
    <img src="https://github.com/fanuelcouto99/Proffy-NLW/blob/main/public/assets/img/navigaton.gif" width="1200">
</p>

### :factory: Executando o servidor (Aplicação em NodeJs)

<p>Por padrão a aplicação já esta com uma base de dados SQLite sendo enviada junto ao projeto, com a configura já para start do servidor feita dentro do arquivo package.json</p>

<p>Depois de configurado acesse a pasta src/database pelo terminal, será preciso executar a criação das tabelas na base de dados, executando o comando:</p>

```bash
  node src/database/db.js
```

<p>Depois de configurado, acesse a pasta raiz pelo terminal e será preciso executar startar o servidor, executando o comando:</p>

```bash
  npm run dev
```

<p>Feito isso o projeto já está pronto para uso, funcionando na porta 5500</p>

```bash
  localhost:5500
```

