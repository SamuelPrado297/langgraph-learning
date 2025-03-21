<p align="center">
  LangGraPH com OpenAI
</p>

## Descrição

Este pequeno projeto foi feito com o intuito de aprender a estrutura base do LangGraph para aplicação do mesmo em Chatbots. Foi utilizado a API do LangGraph, a API do Tavily para desempenhar a aplicação e a API da OpenAI.

  <p>Para iniciar os testes da aplicação, primeiro baixe o arquivo clicando em Code > Download zip</p>
  <p>Após a instalação do zip, descompacte o arquivo e insira ele na sua IDE.</p>
  <p>Em seguida siga o passo-a-passo logo a abaixo</p>

## Baixando as dependências do projeto:

```bash
$ npm install
```
<h3>Necessário para rodar o projeto</h3>
<p>Para rodar o projeto com maestria, é necessário ter um .env com as seguintes informações: </p>

```bash
LANGCHAIN_API_KEY="sua_chave_langchain"

LANGCHAIN_CALLBACKS_BACKGROUND="true"

LANGCHAIN_TRACING_V2="true"

LANGCHAIN_PROJECT="nome_do_seu_projeto"

OPENAI_API_KEY="sua_chave_da_openai"

TAVILY_API_KEY="sua_chave_do_tavily"
```

<p>Para criar uma conta na LangGraph, acesse este site:<a href=https://www.langchain.com/langgraph></a></p>
<p>Para criar uma conta na OpenAI, acesse este site:<a href=https://openai.com></a></p>
<p>Para criar uma conta na Tavily, acesse este site:<a href=https://tavily.com></a></p>

## Compile e rode o projeto

```bash
# development
$ npm run start
```

<p>Para testar o projeto, vá no Postman (ou outro de sua preferência) e aplique a sua pergunta da seguinte forma:</p>

GET http://localhost:3000/agent/ask?q=SuaPergunta
