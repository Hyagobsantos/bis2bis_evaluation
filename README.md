# Api bis2bis_evaluation - NodeJs + Mongodb + Prisma

<p align="center">
    <img src="https://img.shields.io/github/languages/count/Hyagobsantos/bis2bis_evaluation?label=Linguagens" />
    <img src="https://img.shields.io/github/languages/top/Hyagobsantos/bis2bis_evaluation?style=flat-square&logo=javascript">
    <img src="https://img.shields.io/github/stars/Hyagobsantos/bis2bis_evaluation?label=Estrelas" />
    <img src="https://img.shields.io/tokei/lines/github/Hyagobsantos/bis2bis_evaluation">
    <img src="https://img.shields.io/snyk/vulnerabilities/github/Hyagobsantos/bis2bis_evaluation?color=green&label=Vulnerabilidades" />
    <img src="https://img.shields.io/github/license/Hyagobsantos/bis2bis_evaluation?color=green&style=flat-square" />
</p>

## Sobre essa API

*API Criada para teste tecnico da empresa Bis2Bis Vaga de BackEnd - utilizando as Tecnologias NodeJs, MongoDb, Express, Prisma*

## Como usar Esse Projeto 

Para utilizar o projeto faça o dowload do arquivo zip, ou faça o clone em seu computador utilizando o Git. Execute o comando `npm i` dentro da pasta do projeto em seu computador(a pasta que contém o arquivo package.json), para baixar as dependencias do projeto.

*no arquivo .env.example deverá ser mantida a constante DB_FLAG_IS_POPULAD=631a4907ece03f172b4dd80e*

## Executando o projeto

*Essa API utiliza a orm Prisma + MongoDb, então antes de testar a API certifique se você possui o MongoDb instalado em seu computador(https://www.mongodb.com/try/download/community).*

Além disso, você precisa criar o arquivo .env com a url do seu banco, *utilize o arquivo .env.exemple para criar o seu*. Esse é um exemplo de string de conexão com o banco de dados: mongodb://localhost:27017/bis2bis.

Agora você pode executar o projeto: 
* Para executar o projeto com o nodemon, digite no terminal: 
```bash
npm run dev
```
* Para executar o projeto com o node, digite no terminal: 
```bash
npm start
```

## Começando

Vamos fazer nossa primeira solicitação à API 

Para começar a usar a API, use uma ferramenta que permite fazer uma solicitação de API, como curl, Insomnia ou o navegador. No exemplo abaixo, estamos tentando obter as informações:

*Detalhe Inportante Dentro do projeto está contido uma collection exportada do insomnia fique avontade para usa-la*

**Solicitação de exemplo:**

```
http://localhost:3003
```

**Resposta de exemplo:**

```json
{
    info: "Welcome to test api for Bis2bis"
}
```

É isso! Você fez uma chamada Padrão da API 

## Procurando

Para Realizar uma busca tem basicamente 3 formas:

**Solicitação getById para buscar por Id de exemplo:**
```
http://localhost:3003/universities/631f6ff8735e19a6414b3691
```
**Solicitação getUniversity com query param exemplo:**
```
http://localhost:3003/universities?country=brazil

```

**Solicitação getAllUniversity com query param exemplo:**
```
http://localhost:3003/universities

```

## Paginação

As Respostas das rotas estão limitadas a 20 registros e podendo definir qual pagina deseja iniciar, sendo padão 0, deverá ser passado no body conforme exemplo abaixo

**Solicitação getUniversity com query param usando paginação exemplo:**
```json
{
	"page": 1
}
```

## Rotas Disponives

Endpoints GET:

* `/main `- obtenha todos os recursos do personagem
* `/universities` - obter totas as universidades
* `/universities/{id} `- obtenha uma universidade por Id

Endpoint POST:

* `/universities` - crie uma nova universidade

Endpoint PUT:

* `/universities/{id}` - atualize uma universidade já criada

Endpoint DELETE:

* `/universities/{id}` - delete uma universidade

 Desenvolvido Por  - [Hyago Bezerra](https://github.com/Hyagobsantos) 


<p style="text-align:center">
    Muito Obrigado!
</p>
