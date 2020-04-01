#GoBarber - Aplicação Backend

# Nesse projeto vamos construir um API no backend utilizando NodeJS, Express, Postgres, Nodemon, Sucrase, entre outras libs.

- [x] Ambiente e conceitos

  - [x] Configurando a estrutura
        O back-end será estruturado com Classes. Para iniciar o projeto com node, foi iniciado o yarn para criar o arquivo package.json e adicionada a dependência express. Em seguida,foi criada uma pasta chamada src para adicionar todos os códigos da aplicação que será manipulado diariamente. E criado os seguintes arquivos App.js (configuração do servidor), server.js (inicialização do servidor) e routes.js (todas as rotas).

  - [x] Nodemon e Sucrase
        O Nodemon foi instalado com o objetivo de executar o servidor automaticamente a cada modificação realizada no código. Já o Sucrase foi instalado para utilizar o "import e export". Além do Sucrase pode ser utilizado o babel. Foi realizada algumas modificações no package.json e no nodemon.json para conseguir executar o projeto facilmente.

  - [x] Conceitos do Docker

    - Ajuda a controlar os serviços da aplicação.

    - Como funciona?
      Nós vamos usar o Docker para criar ambientes isolados (container). Esses ambientes isolados são ambientes que não vão interferir no funcionamento de outras tecnologias e ferramentas dentro do servidor. Então imagine que nós temos um servidor Linux rodando e a gente precisa instalar um banco de dados Postgresql, se a gente for instalar da maneira tradicional ele vai mexer em diversos arquivos do nosso sistema . E se em algum momento precisar alterar ou deletar esse banco de dados vai ser muito trabalhoso. E quando cria esse ambiente isolado com o Docker aquele nosso sistema ele fica totalmente disconexo de outros serviços da aplicação, então quando instalar um serviço como por exemplo o Postgresql ele vai ficar em um subsistemas na nossa máquina e não vai interferir no funcionamento do restante da máquina.

    - Esses containers para se comunicar expõe portas.

  - [ ] Configuração do Docker
  - [ ] Sequelize e MVC
  - [ ] ESLint, Prettier e EditorCOnfig
  - [ ] Configurando Sequelize
