# <a id="begin"> Vip Commerce

## [1. Introdução](#intro)
## [2. O que foi usado](#uso)
## [3. Banco de dados](#db)
## [4. Script para inicialização do banco](#antes)
## [5. Executando o projeto](#run)
## [6. Lista do que foi feito](#list)
## [7. SOLID](#solid)
## [8. Sequelize](#sequelize)
## [9. Testes Unitários](#test)
## [10. Testes Rest](#rest)


## <a id="intro">1. Introdução

Este projeto é para avaliação técnica de uma desafio backend .

Este projeto foi desenvolvido em NodeJS (12.18.3) com TypeScript (^3.9.3)

## <a id="uso"> 2. O que foi usado

A seguir, serão apresentados os principais pacotes que foram usados no projeto

* <b>Restify</b>

Framework NodeJS para a criação de servidor 

* <b>Sequelize</b>

ORM para auxiliar na comunicação com o banco de dados

* <b>MySQL 8.0 </b>

O banco de dados usado no projeto

[Voltar ao inicio](#begin)

## <a id="db"> 3. O Banco de Dados

O Banco de dados utilizado no projeto foi o MySQL na versão 8.0.

O repositório do Docker Compose do banco de dados utilizado encontra-se [aqui](https://github.com/cbcarlos07/docker-mysql)

![alt text](https://github.com/cbcarlos07/desafio-vipcommerce/blob/master/src/config/db/ddl/er.png)

<b>NOTA</b>

Tenha o docker instalado antes

Antes de executar o comando do docker-compose, primeiro crie a rede interna do docker:

    docker network create -d bridge mysql-network

Na pasta [er](https://github.com/cbcarlos07/desafio-vipcommerce/tree/master/src/config/db/ddl) deste projeto encontram-se o MER (Modelo Entidade Relacionamento) e o arquivo sql.sql com inserts já realizados

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

Após o banco de dados estiver em execução, os pacotes estiverem instalados, o script de base ser executado, aí o projeto poderá entrar em operação. Para isso, dê o comando:

    npm run dev

[Voltar ao inicio](#begin)

## <a id="list"> 6. Lista do que foi feito

Para ver a lista do que foi feito, basta [clicar aqui](https://www.notion.so/Vip-Commerce-651e8a6171334b7d84e167969137ec59)

[Voltar ao inicio](#begin)

## <a id="solid"> 7. SOLID

Este projeto foi baseado na arquitetura SOLID de acordo com [este artigo](https://medium.com/@diomalta/como-organizar-e-estruturar-projetos-com-node-js-4845be004899)

[Voltar ao inicio](#begin)

## <a id="sequelize"> 8. Alguns Comandos sequelize
 
 Para fins de fixação foi necessária a utlização de alguns comandos do Sequelize

* <b>Migrate</b>

        node_modules\.bin\sequelize migration:create --name=create-status

        node_modules\.bin\sequelize db:migrate:undo

* <b>Apagar banco de dados</b>

        node_modules/.bin/sequelize db:drop

* <b>Seed</b>

Criar
        
        node_modules/.bin/sequelize seed:generate --name=Usuario

Inserir
        
        node_modules\.bin\sequelize db:seed:all

Especificar

        node_modules\.bin\sequelize db:seed --seed src\config\db\database\seeders\20201027185507-Produto.js

Desfazer
        
        node_modules\.bin\sequelize db:seed:undo

Desfazer Tudo
        
        node_modules\.bin\sequelize db:seed:undo:all

[Voltar ao inicio](#begin)

## <a id="test"> 9. Testes Unitários

O pacote para os testes automáticos utilizado foi o [Ava](https://www.npmjs.com/package/ava)

Para executar os testes, basta dar o comando na raiz do projeto

    npm test

![alt text](https://github.com/cbcarlos07/desafio-vipcommerce/blob/master/src/tests/Tests.png)

[Voltar ao inicio](#begin)

## <a id="rest"> 10. Testes Rest    

Para o teste de API foi usada a ferramenta [Postman](https://www.postman.com/)

Na pasta [rest](https://github.com/cbcarlos07/desafio-vipcommerce/tree/master/rest) deste projeto tem o arquivo com os testes

Basta importar dentro da ferramenta o arquivo `json` e as requisiçoes estão prontas

Execução dos testes é baseado no banco de dados de teste.

Na pasta [er](https://github.com/cbcarlos07/desafio-vipcommerce/tree/master/src/config/db/ddl) encontra-se o arquivo com a base de dados de teste

[Voltar ao inicio](#begin)
