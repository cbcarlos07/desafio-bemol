# <a id="begin"> Desafio IPDV

## [1. Introdução](#intro)
## [2. O que foi usado](#uso)
## [3. Banco de dados](#db)
## [4. Script para inicialização do banco](#antes)
## [5. Executando o projeto](#run)
## [6. SOLID](#solid)
## [7. Sequelize](#sequelize)
## [8. Testes Rest](#rest)


## <a id="intro">1. Introdução

Este projeto é para avaliação técnica de uma desafio FullStack para a Bemol.

Este projeto foi desenvolvido em NodeJS (v12.17.0) com TypeScript (^3.9.3)

## <a id="uso"> 2. O que foi usado

A seguir, serão apresentados os principais pacotes que foram usados no projeto

**NO BACKEND**

* <b>Restify</b>

Framework NodeJS para a criação de servidor 


* <b>Sequelize</b>

ORM para auxiliar na comunicação com o banco de dados

* <b>MySQL v8.0 </b>

* md5

Para criptografia de senha

O banco de dados usado no projeto

**NO FRONTEND**

* Angular v8.1.0

Select personalizado com duas áreas para associação

* md5

Para criptografia de senha


[Voltar ao inicio](#begin)

## <a id="db"> 3. O Banco de Dados

O Banco de dados utilizado no projeto foi o MySQL na versão 8.0.

O repositório do Docker Compose do banco de dados utilizado encontra-se [aqui](https://github.com/cbcarlos07/docker-mysql)

![alt text](https://github.com/cbcarlos07/desafio-ipdv/blob/master/backend/src/config/db/ddl/mer.png)

<b>NOTA</b>

Tenha o docker instalado antes

Antes de executar o comando do docker-compose, primeiro crie a rede interna do docker:

    docker network create -d bridge mysql-network

Na pasta [er](https://github.com/cbcarlos07/desafio-ipdv/tree/master/backend/src/config/db/ddl) deste projeto encontram-se o MER (Modelo Entidade Relacionamento) e o arquivo sql.sql com inserts já realizados

Certifique-se de primeiro deixar esse __container__ em execução antes de prosseguir com a inicalização do projeto

O comando para rodar após o __container__ mysql dentro do arquivo docker-compose.yml é preciso executar o seguinte texto no terminal:

    docker-compose up -d

Este comando deixará o banco de dados executando

[Voltar ao inicio](#begin)

## <a id="antes"> 4. Script para inicialização do banco

Antes de rodar o projeto faz-se necessária a execução do seguinte comando na pasta raiz

    npm i 

Isso irá instalar os pacotes necessários para o projeto

Após instalados os pacotes necessários, é imprescindível executar o seguinte comando

    npm run base

Esse script criará o banco de dados, as tabelas e ainda insere dados de teste

[Voltar ao inicio](#begin)

## <a id="run"> 5. Executando o projeto

**BACKEND**

Após o banco de dados estiver em execução, os pacotes estiverem instalados, o script de base ser executado, aí o projeto poderá entrar em operação. Para isso, dê o comando:

    npm run dev

**FRONTEND CLIENTE**

Depois que a API estiver inicializada e em execução, dentro da raíz do frontend é necessário rodar o comando:

        ng serve

Por padrão irá executar na porta 4200

**FRONTEND ATENDENTE**

Depois que a API estiver inicializada e em execução, dentro da raíz do frontend é necessário rodar o comando:

        ng serve --port 4203

Para simular o atendente logado, no arquivo `environment.ts` tem a chave `atendente` que vem como padrão 2, já que a 1 é do do cliente

Pode ser setado a até três pois já vem 3 inserções de usuarios como padrão

[Voltar ao inicio](#begin)


## <a id="solid"> 6. SOLID

Este projeto foi baseado na arquitetura SOLID de acordo com [este artigo](https://medium.com/@diomalta/como-organizar-e-estruturar-projetos-com-node-js-4845be004899)

[Voltar ao inicio](#begin)



## <a id="rest"> 7. Testes Rest    

Para o teste de API foi usada a ferramenta [Postman](https://www.postman.com/)

Na pasta [rest](https://github.com/cbcarlos07/desafio-ipdv/tree/master/backend/rest) deste projeto tem o arquivo com os testes

Basta importar dentro da ferramenta o arquivo `json` e as requisiçoes estão prontas

Execução dos testes é baseado no banco de dados de teste.

Na pasta [er](https://github.com/cbcarlos07/desafio-ipdv/tree/master/backend/src/config/db/ddl) encontra-se o arquivo com a base de dados de teste

[Voltar ao inicio](#begin)





