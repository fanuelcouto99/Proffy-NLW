# Proffy
Sistema desenvolvido durante a Semana Discovery 12, que visa facilitar estudantes com a busca de professores.

<h1 align="center">
    <img src="https://github.com/fanuelcouto99/Proffy-NLW/blob/main/public/assets/landing.svg" width="600">
</h1>

<h4 align="center"> 
	🚧  Proffys | Concluído 🚀 🚧
</h4>

<hr>

<p align="center">
 <a href="#scroll-sobre-o-projeto">Sobre o Projeto</a> •
 <a href="#gear-funcionalidades">Funcionalidades</a> •
 <a href="#art-layout">Layout</a> • 
 <a href="#factory-executando-o-servidor-aplicação-em-nodejs">Como executar</a> 
</p>

## :scroll: Sobre o projeto

<p>O Proffy é uma ferramenta que tem por objetivo ajudar estudades a encontrarem professores de diversas áres a fim obterem aulas particulares.</p>
<p>Com isso foi criada uma aplicação Web, usando NodeJs para servidor, e JavaScript para backend além do CSS ser feito especificamente para o projeto.</p>

Projeto desenvolvido durante a **NLW - Next Level Week** oferecida pela [Rocketseat](https://blog.rocketseat.com.br/primeira-next-level-week/).
O NLW é uma experiência online com muito conteúdo prático, desafios e hacks onde o conteúdo fica disponível durante uma semana.

---

## :gear: Funcionalidades

- [x] Professores podem se cadastrar na plataforma web:
  - [x] uma foto do professor
  - [x] nome completo, whatsapp e bio
  - [x] e o valor da hora/aula
  - [x] além de selecionar dia(s) e horário(s) da(s) aula(s)

- [x] Os estudantes tem acesso a plataforma, onde podem:
  - [x] pesquisar professores disponíveis, filtrando por dia, disciplina e horário
  - [x] entrar em contato com o professor através do WhatsApp

---

## :art: Layout

O layout da aplicação está disponível no Figma:

<a href="https://www.figma.com/file/eO8YbZuAs0GZi3CUpVdU5h/Proffy-Web-Copy">
  <img alt="Made by fanuelCouto" src="https://img.shields.io/badge/Acessar%20Layout%20-Figma-%2304D361">
</a>

### :iphone: Mobile

<p align="center"> 
    <img src="https://github.com/fanuelcouto99/Proffy-NLW/blob/main/public/assets/img/mobile-index.png" width="400">
    <img src="https://github.com/fanuelcouto99/Proffy-NLW/blob/main/public/assets/img/mobile-study.png" width="400">
    <img src="https://github.com/fanuelcouto99/Proffy-NLW/blob/main/public/assets/img/mobile-give-classes.png" width="400">

</p>

### :computer: Web

<p align="center">
    <img src="https://github.com/fanuelcouto99/Proffy-NLW/blob/main/public/assets/img/layout-web.png" width="1200">
    <img src="https://github.com/fanuelcouto99/Proffy-NLW/blob/main/public/assets/img/wweb-sucess.png" width="1200">
</p>

<p> Navegação entre as telas do Projeto</p>

<p align="center">
    <img src="https://github.com/fanuelcouto99/Proffy-NLW/blob/main/public/assets/img/navigaton.gif" width="1200">
</p>

---

## :factory: Executando o servidor (Aplicação em NodeJs)

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### :game_die: Rodando o Backend (servidor)

Primeiro clone este repositório:

```bash
  git clone https://github.com/fanuelcouto99/Proffy-NLW.git
```

<br/>

<p>Por padrão a aplicação já está com uma base de dados SQLite sendo enviada junto ao projeto, com a configuração para start do servidor feita dentro do arquivo package.json</p>

<br/>

<p>Depois de configurado acesse a pasta src/database pelo terminal, será preciso executar a criação das tabelas na base de dados, executando o comando:</p>

```bash
  node src/database/db.js
```

<br/>

<p>Depois de configurado, acesse a pasta raiz pelo terminal e será preciso executar startar o servidor, executando o comando:</p>

```bash
  npm run dev
```

<br/>

<p>Feito isso o projeto já está pronto para uso, funcionando na porta 5500</p>

```bash
  localhost:5500
```

