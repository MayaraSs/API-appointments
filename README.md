#GoBarber - Aplicação Back-end Bootcamp Rocketseat

# Nesse projeto vamos construir um API no backend utilizando NodeJS, Express, Postgres, Nodemon, Sucrase, entre outras libs.

- [x] Ambiente e conceitos

  - [x] Configurando a estrutura
        O back-end será estruturado com Classes. Para iniciar o projeto com node, foi iniciado o yarn com o comando yarn init -y para criar o arquivo package.json. Em seguida, foi adicionada a dependência express yarn add express. Em seguida,foi criada uma pasta chamada src para adicionar todos os códigos da aplicação que será manipulado diariamente. E criado os seguintes arquivos App.js (configuração do servidor), server.js (inicialização do servidor) e routes.js (todas as rotas).

  - [x] Nodemon e Sucrase
        O Nodemon foi instalado com o objetivo de executar o servidor automaticamente a cada modificação realizada no código. Já o Sucrase foi instalado para utilizar o "import e export". Além do Sucrase pode ser utilizado o babel. Para adicioanr as duas dependência foi executado o comando yarn add sucrase nodemon -D.

        Agora para excutar o meu arquivo serve.js é ncessário yarn sucrase-node src/server.js. Para configurar o Nodemon foi necessário inserir no arquivo package.json
          "scripts": { "dev": " nodemon/src/server.js"}
        agora se executar o comando yarn dev para rodar o servidor, irá dar erro porque não vai reconhecer as modificações feitas pelo sucrase. Então foi criado um arquivo nodemon.json  e inserido o código:
          {
            "execMap":{
              "js": "node -r sucrase/register"
            }
          }
        Ou seja, para todo arquivo que termina com a extensão js eu quero que você rode o node, porém  vocẽ resgitra o sucrase.
        Agora no terminarl consigo executar o servidor com o comando yarn dev.

* [x] Conceitos do Docker

  - Ajuda a controlar os serviços da aplicação.

  - Como funciona?
    Nós vamos usar o Docker para criar ambientes isolados (container). Esses ambientes isolados são ambientes que não vão interferir no funcionamento de outras tecnologias e ferramentas dentro do servidor. Então imagine que nós temos um servidor Linux rodando e a gente precisa instalar um banco de dados Postgresql, se a gente for instalar da maneira tradicional ele vai mexer em diversos arquivos do nosso sistema . E se em algum momento precisar alterar ou deletar esse banco de dados vai ser muito trabalhoso. E quando cria esse ambiente isolado com o Docker aquele nosso sistema ele fica totalmente disconexo de outros serviços da aplicação, então quando instalar um serviço como por exemplo o Postgresql ele vai ficar em um subsistemas na nossa máquina e não vai interferir no funcionamento do restante da máquina.

  - Esses containers para se comunicar expõe portas.

* [x] Configuração do Docker

  - No meu computador uso o sistema operacional Linux Debian, quando instalei o Docker segui os comandos descritos na documentação do Docker. Como já havia configurado o Docker anteriormente, não foi necessário seguir essas instruções.
  - Apenas verifiquei se estava realmente instalado com o comando docker -v (para verificar a versão) e docker help (para verificar se estava rodando na minha máquina).
  - Com o Docker rodando consigo criar os meus serviços. Para criar o serviço de banco de dados Postgresql utilizei o comando docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres. Com esse comando estou dando um nome a minha base de dados (database), uma senha de acesso (docker), informa que toda vez que acessar a porta localhost:5432 na minha máquina eu quero acessar a porta 5432 desse meu container, ou seja a porta que o postgres está rodando e por último o nome da imagem (postgres).
  - Com o comando docker ps verifico se aparecem as informações sobre o Docker. Se aparecer o Docker está rodando. Para verificar se está funcionando eu instalo uma interface chamada Postbird para visualizar os dados do Postgres.
  - Como o Postbird já estava instalado na minha máquina apenas abri a interface para realizar a conexão. Na interface consegue-se selecionar o banco de dados que deseja utilizar e criar a database.
  - Alguns comandos:
    docker ps = lista os container em execução
    docker stop name = para o container
    docker ps -a = lista todos os container da maquina
    docker start nome = executa o container
    docker logs name = visualiza os logs do container

* [x] Sequelize e MVC

  - É um ORM que é uma forma de abstrair o banco de dados. Onde as tabelas do banco de dados viram Model.
  - Será utilizado apenas linguagem Javascript.
  - Será muito utilizada a funcionalidade de Migrations para controle de versão da base de dados.
    - Os arquivos da Migrations pode conter instruções para criar, alterar e remover tabelas ou colunas. - - Ainda, mantém a base atualizada entre todos os desenvolvedores do time e no ambiente de produção. - Cada arquivo criado é uma Migratios e sua ordenação ocorre por data.
    - A Migrations pode ser deletada a qualquer momento se errarmos algo enquanto estivermos desenvolvendo a feature.
    - Cada Migrations deve realizar alterações em apenas uma tabela.
    - Depois que a Migrations foi compartilhada ela não poderá ser alterada, assim uma nova deverá ser criada.
  - Arquitetura MVC consiste basicamente na forma da gente estruturar os arquivos da nossa aplicação, com objetivo de separar as responsabilidades de caa tipo de arquivo.
    - Model armazena a abstração do banco, utilizado para manipular os dados contdos nas tabelas do banco. Não possuem responsabilidade sobre a regra de negócio da aplicação.
    - Controller é o ponto de entrada das requisições da nossa aplicação.
    - View é o retorno ao cliente.

* [x] Configuração ESLint (verifica se o código está seguindo os padrões de desenvolvimento), Prettier (deixa o código mais bonito) e EditorConfig (padroniza o código se outros editores estiverem utilizando ferramentas diferentes de desenvolvimento)

- [ ] Configurando Sequelize
