<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/grochavieira/super-ultra-teeny-tiny-compiler?color=%2304D361&style=flat">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/grochavieira/super-ultra-teeny-tiny-compiler?style=flat">
  
  <a href="https://github.com/grochavieira/super-ultra-teeny-tiny-compiler/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/grochavieira/super-ultra-teeny-tiny-compiler?style=flat">
  </a>
    
   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen?style=flat">

</p>
<h1 align="center">
    Super Ultra Teeny Tiny Compiler
</h1>

<h4 align="center"> 
	🚧  Site Concluído 🚧
</h4>

## 🏁 Tópicos

<p>
 👉<a href="#-sobre-o-projeto" style="text-decoration: none; "> Sobre</a> <br/>
👉<a href="#-funcionalidades" style="text-decoration: none; "> Funcionalidades</a> <br/>
👉<a href="#-layout" style="text-decoration: none"> Layout</a> <br/>
👉<a href="#-como-executar-o-projeto" style="text-decoration: none"> Como executar</a> <br/>
👉<a href="#-tecnologias" style="text-decoration: none"> Tecnologias</a> <br/>
👉<a href="#-autor" style="text-decoration: none"> Autor</a> <br/>
👉<a href="#user-content--licença" style="text-decoration: none"> Licença</a>

</p>

## 💻 Sobre o projeto

🔸 Um pequeno compilador feito em JavaScript para converter linguagem Lisp para C, utilizado para aprender melhor como os compiladores funcionam e reforçar o aprendizado, da qual eu retirei o código do link abaixo:

<a align="center" href="https://github.com/jamiebuilds/the-super-tiny-compiler">
    <img alt="Link do código do github" src="https://img.shields.io/static/v1?label=codigo&message=super-tiny-compiler&color=FFA500&style=flat&logo=github">
</a>

---

<a name="-funcionalidades"></a>

## ⚙️ Funcionalidades

- [x] A linguagem pode ser compilada inserindo:
  - [x] Um código de acordo com a linguagem lisp.
- [x] Os tokens gerados são apresentados.
- [x] A árvore de sintaxe abstrata é mostrada.
- [x] A nova árvore AST é mostrada.
- [x] O resultado do código lisp em C é apresentado.

---

## 🎨 Layout

### Demonstração do Compilador:

<p align="center">
    <img src="assets/compiler_demonstration.gif">
</p>

---

## 🚀 Como executar o projeto

Este projeto é divido em duas partes:

1. Backend (pasta server)
2. Frontend (pasta web)

💡O Frontend precisa que o Backend esteja sendo executado para funcionar.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Yarn](https://classic.yarnpkg.com/en/docs/install).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 🎲 Rodando o Backend (servidor)

```bash

# Clone este repositório
$ git clone https://github.com/grochavieira/super-ultra-teeny-tiny-compiler.git

# Acesse a pasta do projeto no terminal/cmd
$ cd super-ultra-teeny-tiny-compiler

# Vá para a pasta server
$ cd server

# Instale as dependências com npm
$ npm install

# Execute a aplicação
$ npm start

# O servidor inciará na porta:3333 - acesse http://localhost:3333

```

#### 🧭 Rodando a aplicação web (Frontend)

```bash

# Clone este repositório
$ git clone https://github.com/grochavieira/super-ultra-teeny-tiny-compiler.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd super-ultra-teeny-tiny-compiler

# Vá para a pasta da aplicação Front End
$ cd web

# Instale as dependências
$ yarn install

# Execute a aplicação em modo de desenvolvimento
$ yarn start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000

```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Website** ([React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/))

- **[Axios](https://github.com/axios/axios)**

> Veja o arquivo [package.json](https://github.com/grochavieira/super-ultra-teeny-tiny-compiler/blob/master/web/package.json)

#### **Server** ([NodeJS](https://nodejs.org/en/) + [TypeScript](https://www.typescriptlang.org/))

- **[Express](https://expressjs.com/)**
- **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**

> Veja o arquivo [package.json](https://github.com/grochavieira/super-ultra-teeny-tiny-compiler/blob/master/server/package.json)

#### **Utilitários**

- Editor: **[Visual Studio Code](https://code.visualstudio.com/)** → Extensions: **[SQLite](https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite)**
- Teste de API: **[Insomnia](https://insomnia.rest/)**
- Fontes: **[Ubuntu](https://fonts.google.com/specimen/Ubuntu)**, **[Cabin](https://fonts.google.com/specimen/Cabin)**

---

<a name="-autor"></a>

## 🦸‍♂️ **Autor**

<p>
 <img src="https://avatars.githubusercontent.com/u/48029638?s=460&u=40540691957b5aabf04e2e1d4cddf8d3633cb1be&v=4" width="150px;" alt="grochavieira"/>
 <br />
 <sub><strong>🌟 Guilherme Rocha Vieira 🌟</strong></sub>
</p>

[![Linkedin Badge](https://img.shields.io/badge/-linkedin-blue?style=flat&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/grochavieira/)](https://www.linkedin.com/in/grochavieira/)

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito com :satisfied: por Guilherme Rocha Vieira 👋🏽 [Entre em contato!](https://www.linkedin.com/in/grochavieira/)

---
