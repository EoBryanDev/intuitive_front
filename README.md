# IntuitiveCare Teste Front End

Neste projeto busquei realizar os desafios do projeto agregando algumas concepções ao proposto pela wireframe. Foram vários os desafios, mas tenho certeza que me superei e desenvolvi com cada um deles, assim entendendo que estou apto ao desenvolvimento frontend.

Primeiro de tudo precisei baixar o arquivo.csv proposto no teste. Em razão ao formato do arquivo decidi usar conversores para json que entendi ser a melhor maneira de trabalhar com tabelas e listas e possibilitar a visualização dos dados. Para isso importei o arquivo no Google Sheets e substituí os ponto e virgula(;) por vírgulas. Desta maneira, baixei novamente o arquivo e criei um mini projeto em nodeJS para fazer a conversão do .csv para .json(Segue o link para visualiza-lo: [github.com/EoBryanDev/IntuitiveTest_Frontend]). Após isso criei instalei o JSON Server para subir esses dados na sua API Fake e de lá tirar os dados.
## Teste 1 - Interface de Leitura

* O começo do projeto foi em realizar a estrutura de componentes e a estilização em CSS parecida com o modelo proposto.

* Logo depois foi a vez de construir a tabela que receberia os dados através do v-for que viria do array de objeto recebido através de um fetch ao JSON Server. E para melhorar a visualização dos dados decidi trabalhar com o CSS e assim fazendo com que a rolagem de pagina ficasse em um tamanho definido, assim melhorando a experiência do usuário. Nesta linha de pensamento, adicionei o elemento de Paginação para melhor fluidez da navegação a lista de dados.
  
* Para a filtragem de pesquisa adicionei ao menu do dashboard dois campos para personalizar a pesquisa: o valor digitado e os indices iguais ao do array de objeto. Foi realizado uma filtragem de pesquisa realizando o filter com o .includes para trazer os dados que continham o valor computado, assim deixando personalizado e dinâmica a pesquisa do usuário.

## Teste 2 - Escrita

* Para inserção de novas operadoras criei um botão ao lado do que realizava a pesquisa de filtragem com os campos necessários para a inserção dos dados consistentes. Para verificação de preenchimento utilizei a tag html simples 'required' para fazer o controle do submit, mas não fiz a validação dos dados devido ao prazo da atividade.
* Para a atualização do cadastro realizei diretamente na pesquisa filtrada pelo usuário aonde ao passar o mouse já é obtido o id do registro para se caso houver o evento de click na opção, já ser salvo e depois atualizado. 
* Já a opção de deletar realizei uma interação junto ao id no momento em que os dados são visualizados na tabela de pesquisas filtradas.
* Como já estava utilizando a ferramento do JSON Server então qualquer alteração já era "persistida" dentro da fake API.

### Teste 3 - Servidor

* Devido ao prazo não consegui explorar esse ponto do teste, visto que eu não tenho domínio pleno para realizar os desafios do teste 3 de maneira prática. Mas tentei adicionar algumas funcionalidades com banco de dados mongoDB através do mongoDB Atlas, mongoose e criação de rotas com express, mas não tive sucesso na total implementação ( Veja em: [github.com/EoBryanDev/IntuitiveTest_Frontend])

