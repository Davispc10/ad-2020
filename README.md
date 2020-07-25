<h3 align="center"> 🚀 Amigo Secreto: Aplicação de sorteio de amigo secreto</h3>

<p align="center">
  <a href="https://www.linkedin.com/in/david-azeredo/">
    <img alt="Made by David Azeredo" src="https://img.shields.io/badge/made%20by-DavidAzeredo-%2304D361">
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License MIT">
  </a>
</p>

## Ferramentas
Foram utilizadas a stack Javascript para o desenvolvimento do projeto:

- ⚛️ **React Js** — Biblioteca JavaScript para construção do frontend da aplicação web:
  - Uso do react hooks;
  - Requisições com o axios;
  - Typescript.
- 💹 **Node Js** — Plataforma que permite utilizar javascript para criar aplicações do lado do servidor(backend):
  - Axios;
  - Framework express;
  - Banco de dados NoSql MongoDB;
  - Yup para validação;
  - Typescript.

## Sobre:
<p>Você que pensou em fazer um amigo secreto em família ou entre amigos e quer inovar a forma de realizar esse sorteio?</p>

<p>Com essa aplicação você pode cadastrar o nome e o email dos seus amigos, criar uma lista rápida que vão participar e sortear o amigo secreto, que será enviado por email para cada amigo informando qual o amigo secreto.</p>

<p>⚙ FrontEnd: <a href="https://github.com/Davispc10/ad-2020/tree/master/frontend">AmigoSecreto - Web</a></p>
<p>💻 Backend: <a href="https://github.com/Davispc10/ad-2020/tree/master/backend">AmigoSecreto - API</a></p>

### Configuração - Backend
Para rodar o projeto, voce precisa do yarn, node e git instalados.
```bash
# Após clonar o projeto na sua máquina e as ferramentas instaladas,
# Vá a pasta backend
$ cd ad-2020/backend

# Instale as dependências
$ yarn install

# Tem um arquivo .env que guarda as variáveis ambiente do projeto,
# foi utilizado o banco no mongodb atlas e no arquivo contém o caminho.
# Para envio de email foi utilizado o MailTrap para teste, mas basta mudar
# as variáveis para os de um host real para funcionar normalmente.

# MAIL_HOST=smtp.mailtrap.io
# MAIL_PORT=2525
# MAIL_USER=965a0f8598e2fc
# MAIL_PASS=13372f65b08971

# Para iniciar o servidor basta executar
$ yarn dev
```

### Configuração - Frontend
Para iniciar o **Frontend** do React utilize os comandos:
```bash
# Vá a pasta frontend
cd ad-2020/frontend

yarn install

yarn start
```
Assim que o processo terminar, automaticamente será aberta no seu navegador a página `localhost:3000` com a aplicação funcionando. Certifique-se que o backend já esteja funcionando para a aplicaçao web pegar as informações e poder ser utilizado.

## Licença

Esse projeto é licensiado pela MIT License - Veja a página da [licença](https://opensource.org/licenses/MIT) para detalhes
