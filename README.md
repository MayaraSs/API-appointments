#Iniciando Back-end GoBarber - Bootcamp Rocketseat
#Aplicação de agendamento de serviços de beleza

# Nesse projeto vamos construir uma API utilizando NodeJS, Express, Postgres, Nodemon, Sucrase, entre outras libs.

- [x] Ambiente e conceitos

  - [x] Configurando a estrutura
        O back-end será estruturado com Classes. Para iniciar o projeto com node, foi iniciado o yarn com o comando yarn init -y para criar o arquivo package.json. Em seguida, foi adicionada a dependência express yarn add express. Foi criada uma pasta chamada src para adicionar todos os códigos da aplicação que será manipulado diariamente. E criado os seguintes arquivos App.js (configuração do servidor), server.js (inicialização do servidor) e routes.js (todas as rotas).

  - [x] Nodemon e Sucrase
        O Nodemon foi instalado com o objetivo de executar o servidor automaticamente a cada modificação realizada no código. Já o Sucrase foi instalado para utilizar o "import e export". Além do Sucrase pode ser utilizado o babel. Para adicioanr as duas dependência foi executado o comando yarn add sucrase nodemon -D.

    Agora para executar o meu arquivo serve.js é necessário executar yarn sucrase-node src/server.js. Para configurar o Nodemon foi necessário inserir no arquivo package.json
    "scripts": { "dev": " nodemon/src/server.js"}
    agora se executar o comando yarn dev para rodar o servidor, irá dar erro porque não vai reconhecer as modificações feitas pelo sucrase. Então foi criado um arquivo nodemon.json e inserido o código:
    {
    "execMap":{
    "js": "node -r sucrase/register"
    }
    }
    Ou seja, para todo arquivo que termina com a extensão js eu quero que você rode o node, porém você resgitra o sucrase.
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
    - docker ps = lista os container em execução
    - docker stop name = para o container
    - docker ps -a = lista todos os container da máquina
    - docker start nome = executa o container
    - docker logs name = visualiza os logs do container

* [x] Sequelize e MVC

  - É um ORM que é uma forma de abstrair o banco de dados. Onde as tabelas do banco de dados viram Model.
  - Será utilizado apenas linguagem Javascript.
  - Será muito utilizada a funcionalidade de Migrations para controle de versão da base de dados.
  - Os arquivos da Migrations pode conter instruções para criar, alterar e remover tabelas ou colunas.
    - Ainda, mantém a base atualizada entre todos os desenvolvedores do time e no ambiente de produção. - Cada arquivo criado é uma Migrations e sua ordenação ocorre por data.
    - A Migrations pode ser deletada a qualquer momento se errarmos algo enquanto estivermos desenvolvendo a feature.
    - Cada Migrations deve realizar alterações em apenas uma tabela.
    - Depois que a Migrations foi compartilhada ela não poderá ser alterada, assim uma nova deverá ser criada.
  - Arquitetura MVC consiste basicamente na forma de estruturar os arquivos da nossa aplicação, com objetivo de separar as responsabilidades de cada tipo de arquivo.
  - Model armazena a abstração do banco, utilizado para manipular os dados contidos nas tabelas do banco. Não possuem responsabilidade sobre a regra de negócio da aplicação.
  - Controller é o ponto de entrada das requisições da nossa aplicação.
  - View é o retorno ao cliente.

- [x] Configuração ESLint (verifica se o código está seguindo os padrões de desenvolvimento), Prettier (deixa o código mais bonito) e EditorConfig (padroniza o código se outros editores estiverem utilizando ferramentas diferentes de desenvolvimento)

- [x] Configuração Sequelize e estruturação das pastas

  - Estruturação das pastas
    No src foi criada uma pasta chamada config que ficará a maioria das configurações da aplicação. Inicialmente ficará a configuração do database.js.
    Também foi criada a pasta database que armazenará todas as migrations.
    A pasta app foi criada para armazenar a maioria dos códigos que envolvem regras de negócio (controllers e models).
  - Configuração do Sequelize
    yarn add sequelize
    yarn add sequelize-cli -D (falicita nos comandos para executar as migrations)
    Crio um arquivo chamado .sequilizerc

* [x] Cadastro e autenticação de usuários

  - [x] Migration de usuário
        Para criar a tabela de usuário foi utilizado o comando yarn sequelize migration:create --name=create-users. Agora na pasta migrations já vai aparecer o arquivo e agora posso definir os campos da tabela.

  - [x] Model de usuário
        Foi criado o arquivo User.js e inserida as informações que será necessário o usuário preencher para cadastrar no sistema (name, email, password e provider).

  - [x] Criando loader de models

  - [x] Cadastro de usuário
        Cria o UserController que terá todas as informaçõs para o cadastro do usuário.

  - [x] Gerando hash da senha
        Será gerado o hash da senha do usuário. Atualmente o usuário está sendo cadastrado passando o password_hash com alguns número. Agora iremos fazer com que o usuário envie apenas password com a senha dele e a gente gere esse password_hash que é a coluna do banco através de um hash gerado a partir da senha que ele incluiu. Para gerar o hash da senha será utilizada a extensão yarn add bcryptjs. No arquivo User.js e importado o bcryptjs e criado um campo password: Sequelize.VIRTUAL indicando que esse campo nunca irá existir na base de dados.

  - [x] Conceitos de JWT
        é uma metodologia de fazer autenticação em API REST que são serviços que a gente cria que são comunicados através de json. É feita uma autenticação que vai para a base de dados e gera um Token JWT, a primeira parte do Toker refere-se ao Headers (tipo de Token, algoritmo), a segunda a Payload (dados adicionais) e a Asinatura do Token (garante que o Token não foi modificado por outro usuário).

  - [x] Autenticação JWT
        Primeiro foi criado o arquivo SessionController.js e instalada a extensão yarn add jsonwebtoken que irá gerar o token.

- [x] Middleware de autenticação
      Será bloqueado o acesso do usuário a algumas rotas se ele não estiver logado no sistema.

- [x] Update do usuário

- [x] Validando dados de entrada

# Continuando API do GoBarber

- [x] Envio de arquivos

  - [x] Configurar Multer
        Realizar Upload de arquivos isolados. Será utilizado, pois o usuário que for prestador de serviço vai ter um avatar. Na hora que o usuário seleciona a imagem, essa imagem já é enviada para o servidor e o servidor retorna um id da imagem. Servidor retorna para o front-end o id da imagem. Para isso foi instalado a biblioteca multer porque o json não suporta envio de upload de arquivos, yarn add multer.
        Cria a pasta tmp e uploads onde vai ser armazenado todos os uploads realizados. E naa pasta src/config cria a pasta multer onde será implementado a configuração para realizar os uploads.
          
         import multer from 'multer';
        import crypto from 'crypto';
        import { extname, resolve } from 'path'; //retorna a extensão do arquivo

          //objeto de configuração
          export default {
            //A primeira chave refere-se a como o arquivo vai guardar os arquivos de imagem
            storage: multer.diskStorage({
              destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
              filename: (req, file, cb) => {
                crypto.randomBytes(16, (err, res) =>{
                  if (err) return cb (err);

                  return cb(null, res.toString('hex') + extname(file.originalname) );
                })

              },
            }),
          };

  - [x] Avatar do usuário
        Será as informações dos arquivos recebidos do uploads na base de dados. Crio um arquivo FileController.js . Crio uma tabela files no banco de dados com o comando yarn sequelize migration:create --name=create-files. Crio o model File.js. A nossa tabela de usuário ainda não tem um relacionamento para essa tabela de arquivos, ou seja a tabela de usuários não possui um campo para conseguir recuperar a informação do arquivo ou associar um usuário com algum arquivo para ser o avatar dele. Então, será adicionado um campo novo na tabela do user. Para adicionar um campo novo na tabela user precisa criar uma nova migrations apenas para inserir o campo novo da tabela. As migrations funcionam como uma linha do tempo da nossa database, a partir do momento que ela foi criada é aconselhavĺ criar uma nova migrations para as alterações que deseja realizar.

- [x] Funcionalidades de agendamentos

  - [x] Listagem de prestadores de serviço
        Crio um arquivo ProviderController, onde vou implementar as condicionais da listagem de todos os prestadores de serviços.
  - [x] Migration model de agendamento
        Será criada o model e a migation de agendamento, então toda vez que o usuário marcar algum agendamento com os prestadores ele irá gerar um registro na tabela do banco de dados.
        Primeiro será usado o sequelize para criar uma migrations { yarn sequelize migrations:create --name=create-appointments}
  - [ ] Agendamento de serviço
  - [ ] Validações de agendamento
  - [ ] Listando agendamentos do usuário
  - [ ] Aplicando paginação
  - [ ] Listando agenda do prestador

- [ ] Envio de notificações

  - [ ] Configurando MongoDB
  - [ ] Notificando novos agendamentos
  - [ ]Listando notificações do usuário
  - [ ] Marcar notificações como lidas

- [ ] Cancelamento e envio de e-mail

  - [ ] Cancelamento de agendamento
  - [ ] Configurando Nodemailer
  - [ ] Configurando templates de e-mail
  - [ ] Configurando fila com Redis
  - [ ] Monitorando falhas na fila
  - [ ] Listando hoários disponíveis
  - [ ] Campos virtuais no agendamento

- [ ] Configurações avançadas
  - [ ] Tratamento de exceções
  - [ ] ariáveis ambiente
