## Encurtaaí - Seu mais novo encurtador de url 🖥️✂️

### 📚 Índice  
---
[💡 Sobre o Projeto](#-sobre-o-projeto)  
[🛠 Tecnologias](#-tecnologias)  
[⚙️ Instalação](#️-instalação)  
[🧠 Lógica para encurtar](#-lógica)   
[👨‍💻 Autor](#-autor)


## 💡 Sobre o projeto
O **encurtaaí** é um projeto para o desenvolvimento de um encurtador de url simples e com as principais funcionalidades que existem atualmente para encurtar urls, totalmente voltado para o público que está cansado de ter que copiar links gigantes que não são visualmente legais para colocar em documentos ou até enviar para outra pessoa, o encurtaaí garante a sua pequena url!!!
## 🛠 Tecnologias
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

## ⚙️ Instalação
#### Instalar depedências
```bash
npm i
```
#### Executar projeto
```bash
npm run dev
```
## 🧠 Lógica para encurtar
Para encurtamos uma url existe diversas maneiras, a escolhida para esse projeto foi  usar um banco de dados para armazenar o link e depois retornar.
#### E na prática?
A lógica por trás do projeto é bem simples, usei um banco de dados que armazena o link no qual temos o objetivo de encurtar, logo após pego o id no banco e tranformo ele em um **slug**, para transformá-lo em um slug usei o método de codificar em **Base62**, e quando você acessa esse link apenas acontece o contrário, por baixo dos panos mandamos uma consulta após o slug ser decodificado e através disso retornamos o link.

## 📍 Endpoints
**POST** `/urlshort/`

Rota de envio de link para ser encurtado.

**GET** `/:slug`
Rota de retorno da url encurtada através do slug.

## 👨‍💻 Autor
**Vicente Junior**