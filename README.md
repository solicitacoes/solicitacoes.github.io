## <img src="https://avatars.githubusercontent.com/u/124218357?s=200&v=4" style="width: 50px;"> Projeto Solicitar 

## Disclairmer
Esse repositório é o fork do código original é `https://github.com/matheus-vieira/solicitar` e a parte ui/ux é baseado em [Form-multi-step](https://github.com/Alexsandro-01/Form-multi-step)

## Sobre a aplicação
Os profissionais da saúde recomendam que fiquemos em reclusão por um período indeterminado com o intuito de achatar a curva de contágio do corona vírus (COVID 19).

Este projeto tem como objetivo realizar a solicitação de itens, serviços e/ou doações a estabelacimentos através enviando uma mensagem por Whatsapp ou por e-mail, ajudando a manter as pessoas em quarentena.

Toda ajuda (alteração de layout, revisão de texto, adição de estabelecimento e etc) é bem vinda.

No momento o crucial é a adição de estabelecimentos.

Faça seu pull request!

## Sobre a ideia
Oferecer um espaço onde estabelecimentos possam receber pedidos e as pessoas em quarentena possam solicitar sem saírem de casa.

## Captura de tela
https://user-images.githubusercontent.com/73038442/211033430-cefd68c8-6827-43bd-a6df-5cae7a998255.mp4

#### img 1
![image](https://user-images.githubusercontent.com/123137817/216914081-dba160a1-26cf-4eb8-9813-db7145209cf7.png)

#### img 2
![image](https://user-images.githubusercontent.com/123137817/216918994-0d27c5f7-ec97-488c-ad7a-c2b450a7f11a.png)

## Contexto
A ideia do projeto é uma aplicação de formulário com multiplos passos para o usuário seguir. É muito chato preencher formulários muito longos e a chance de um usuário desistir é grande. Quebar um formulário em partes menores é uma ótima estratégia para reter o usuário.

Encontrei o desafio de criar um formulário com multi steps no site de desafios para front-end [Fontendmentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). O desafio conta com varias imagens do layout que deve ser alcançado, tanto no Desktop quanto no mobile, eu gosto bastante dos desafios que eles disponibilizam na plataforma.

## Recursos da aplicação
- Múltiplo cadastro: você tem uma cópia do registro em diferentes tipos/formas de armazenamento, o que garante maior: controle, integridade, auditória, confiabilidade
- Funciona sem servidor: as chamadas para coisas como post/get são feitas por api "arquitetura serveless"
- Hospedado no github-pages
- Sem custo envolvido: qualquer projeto futuro pode utilizar esse mesmo código para hospedar em diferentes instâncias do github-pages ou quaisquer plataformas ou empresas de hospedagem
- Código fonte aberto: sinta-se livre para modificar qualquer coisa desde que esteja ciente da licença

## Demonstração
Caso queira acessar a página da aplicação, [clique aqui](https://solicitacoes.github.io/beta1/)

### Fluxo da solicitação de compra
1. Informar dados de contato do solicitante
2. Selecionar o estabelecimento que se deseja pedir.
3. Adicionar todos os itens que deseja solicita (produtos de padarias, mercados, açougue, e qualquer outro tipo de estabelecimento)
4. Por fim encaminhar um email ou whatsapp para o estabelecimento.
5. Não há responsabilidade sobre a existência de itens pedidos.
6. Confirme os dados do estabelecimento.

## Licença do icone
flaticon license

## Pendências

- [ ] Usar localização para filtrar os estabelecimentos.
- [ ] Filtrar por categoria(s).
- [ ] Cadastrar estabelecimentos com dados reais.
- [ ] Usar SCSS

## Fluxo de usuário
1. o usuário 1 pode solicitar itens, serviços ou doações. Esse tipo de usuário deve também registrar o estabelecimento, assim como a quantidade de itens. (esse processo inicial é a cópia local interna de cadastro - utiliza-se localstorage/session para enviar dados entre as páginas, isso evita ter que preencher a página novamente em caso de alguma falha de conexão ou problema geral) ***cópia 1***

2. Após isso, o usuário 1 clica na parte de solicitar compra. Então é enviado uma cópia dos dados para um servidor externo, isso é feito através de uma chamada ajax via uma api rest para armazenar os dados do cadastro no momento do submit. (esse processo é conhecido como cópia remota) ***cópia 2***

3. Após a cópia dos dados ser enviado a um servidor externo, é avisado ao usuário 1 que todos os dados de solicitação de compras são disponíveis e acessíveis publicamente. Ao confirmar este aviso, é enviado uma cópia da solicitação da compra pelo orbit-db. ***cópia 3***

4. Após ser feita a cópia do arquivo para o acesso público, é avisado ao usuário 1 que deve fazer o backup das informações de forma privada para não perder os dados. Nesse caso final, é enviado uma cópia da solicitação da compra pelo google drive ou dropbox. ***cópia 4***

5. Após isso, é avisado ao usuário que deve deixar uma cópia para acesso temporário (esse processo é conhecido como "cópia do arquivo para o acesso temporário" - isso é feito para que uma ou mais pessoas possam compartilhar um link de uma cópia do arquivo seja para sua mídia social de preferência ou conhecimento. bem como, pode compartilhar o link desse arquivo para uma ou mais pessoas também. ***cópia 5***

6. Por fim é gerado o pdf local com as demais informações da solicitação de compra. (esse processo é a "cópia local externa de cadastro", onde é gerado uma cópia dos dados locais registrados em localstorage/session para o formato de arquivo .pdf) ***cópia 6***

### Fluxo de controle

*1- cópia local interna*
Cadastro utiliza o localstorage/session para enviar dados entre as paginas

*2- cópia local externa*
Cadastro gera uma cópia dos dados em pdf

```javascript
 // Salvar localmente
  const doc = new jsPDF();
  doc.setProperties({
    title: 'Solicitar',
    subject: 'Documento de exemplo de solicitar',
    author: 'James Hall',
    keywords: 'generated, javascript, web 2.0, ajax',
    creator: 'Codehangen'
  });
  
  document.getElementById('cadastro').onsubmit = betterOnsubmit(values => {
    // gera o pdf a partir do client quando efetuar o submit
    doc.text(values.nome, 20, 20);
    doc.text(values.telefone, 20, 30);
    doc.text(values.whatsapp, 20, 40);
    doc.text(values.logradouro, 20, 50);
    doc.text(values.cidade, 20, 60);
    doc.text(values.estado, 20, 70);
    doc.text(values.bairro, 20, 80);
    doc.text(values.categoria, 20, 90);
    doc.save("cadastro.pdf");
  })
```

*3- cópia externa*
Escolha google drive/dropbox para armazenar o arquivo em pdf

*4- cópia remota:* 
Quando você dá um submit antes de gerar a cópia de dados em pdf, é enviada a um servidor externo a cópia desses dados como o goormide

*5- cópia temporária: quando você gera o pdf, pode enviar temporariamente para qualquer pessoa com um link:*
```markdown
https://tmpfiles.org/
```

*6- cópia pública*
Tudo que foi cadastrado seja de modo local externo/interno, remota, temporário, externo - também tem um registro público com orbit-db.

## Principais desafios que encontrei
Ao fazer o deploy no Github pages a página não funcionava. Depois de uma rápida pesquisa, descobri que precisava criar uma variável de ambiente com o endereço onde a página seria servida.

Quando você roda usando o server de desenvolvimento do webpack ele já coloca essa variável automaticamente com o endereço certo. 

No caso em que você vá servir os arquivos num servidor seu, é necessário criar essa variável antes de rodar o `npm run build`. Então adicionei um arquivo `.env` com a variável e tudo funcionou corretamente.

```env
  PUBLIC_URL=https://solicitacoes.github.io/beta1/
```

## Tecnologias usadas
- Frontend: React, Typescript, Jquery, JS, Css-modules, jsPDF, htmx, localstorage/session, Boostrap-css
- Backend: Git, Github Pages, GitHub Actions, orbit-db, api(`https://tmpfiles.org`, Google drive, Dropbox), ajax
- Javascript\ [Vanilla JS](http://vanilla-js.com/)
- [my-json-server.typicode.com](https://my-json-server.typicode.com/)
- Gerador de HTML estático - [Jekyll](https://jekyllrb.com/)
- JS, HTML, CSS são licenciados por W3C

<!--- <img width="50%" style="margin: 0 0 25px 25px" src="src/assets/images/switch.gif" alt="Exemplo de switch"> --->
## Executando a aplicação

1. Fazendo o clone;

```bash
  git clone git@github.com:solicitacoes/beta1.git
``` 

2. Instalando as dependências;

```bash
cd beta1 && npm install
``` 

3. Iniciando a aplicação;

```bash
npm start
```

4. Acesse a aplicação no seu browser;

```
http://localhost:3000/
```
