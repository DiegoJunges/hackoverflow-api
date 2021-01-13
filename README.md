<h1 align="center">
  <img alt="Logo" src="logo.svg" width="200px">
</h1>

<h3 align="center">
  Graphql Application for HackOverflow project
</h3>

<p align="center">The best forum around there!</p>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/DiegoJunges/hackoverflow-api?color=%23FF9000">

  <a href="https://www.linkedin.com/in/diego-junges/" target="_blank" rel="noopener noreferrer">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-Diego%20Junges-%23FF9000">
  </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/DiegoJunges/hackoverflow-api?color=%23FF9000">

  <a href="https://github.com/DiegoJunges/gobarber-api/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/DiegoJunges/hackoverflow-api?color=%23FF9000">
  </a>

  <a href="https://github.com/DiegoJunges/gobarber-api/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/DiegoJunges/hackoverflow-api?color=%23FF9000">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/DiegoJunges/hackoverflow-api?color=%23FF9000">
</p>

<p align="center">
  <a href="#%EF%B8%8F-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

<p id="insomniaButton" align="center">
  <a href="https://insomnia.rest/run/?label=HackOverflow%20-%20DiegoJunges&uri=https%3A%2F%2Fraw.githubusercontent.com%2FDiegoJunges%2Fhackoverflow-api%2Fmaster%2FInsomnia.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

## 💇🏻‍♂️ About the project

The application is a forum and have features like posts, the post owner can edit or delete the post, other users can upvote or downvote posts.

Infinite scroll has added, and switch mode(dark and light), register, login users too.

To see the **web client**, click here: [HackOverflow Web](https://github.com/DiegoJunges/hackoverflow-web)<br />

## 🚀 Technologies

Technologies that I used to develop this api

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Grapgql](https://graphql.org)
- [TypeORM](https://typeorm.io/#/)
- [TypeGraphql](http://typegraphql.com/)
- [Aragon-2](https://hack.aragon.org/)
- [uuid v4](https://github.com/thenativeweb/uuidv4/)
- [PostgreSQL](https://www.postgresql.org/)
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/api/apollo-server/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Redis](https://redis.io/)
- [Nodemailer](https://nodemailer.com/)

## 💻 Getting started

Import the `Insomnia.json` on Insomnia App or click on [Run in Insomnia](#insomniaButton) button

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)
- One instance of [PostgreSQL](https://www.postgresql.org/)

> Obs.: I recommend use docker

**Clone the project and access the folder**

```bash
$ git clone https://github.com/DiegoJunges/hackoverflow-api.git && cd hackoverflow-api
```

**Follow the steps below**

```bash
# Install the dependencies
$ yarn

# Make a copy of '.env.example' to '.env'
# and set with YOUR environment variables.
# The aws variables do not need to be filled for dev environment
$ cp .env.example .env

# Create the instance of postgreSQL using docker
$ docker run --name gobarber-postgres -e POSTGRES_USER=docker \
              -e POSTGRES_DB=hackoverflow -e POSTGRES_PASSWORD=docker \
              -p 5432:5432 -d postgres

# Create the instance of redis using docker
$ docker run --name hackoverflow-redis -p 6379:6379 -d -t redis:alpine

# To finish, run the api service
$ yarn dev

# Well done, project is started!
```

## 🤔 How to contribute

**Make a fork of this repository**

```bash
# Fork using GitHub official command line
# If you don't have the GitHub CLI, use the web site to do that.

$ gh repo fork DiegoJunges/hackoverflow-api
```

**Follow the steps below**

```bash
# Clone your fork
$ git clone your-fork-url && cd hackoverflow-api

# Create a branch with your feature
$ git checkout -b my-feature

# Make the commit with your changes
$ git commit -m 'feat: My new feature'

# Send the code to your remote branch
$ git push origin my-feature
```

After your pull request is merged, you can delete your branch

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with 💜 &nbsp;by Diego Junges 👋 &nbsp;[See my linkedin](https://www.linkedin.com/in/diego-junges/)
