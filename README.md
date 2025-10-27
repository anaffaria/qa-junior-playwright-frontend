# Projeto Tagplus

Este repositório contém testes automatizados para o desafio Tagplus.

## Parte 2 Testes de Front-End

Site: https://www.saucedemo.com/

Automatize os seguintes fluxos:
  - Login com sucesso e com dados incorretos
    - Validação: sistema logado com sucesso e mensagem com erro
  - Remover produtos de dentro do carrinho
    - Validação: Quantidade de itens que sobrou no carrinho
  - Finalizar uma compra com 2 ou mais produtos
    - Validação: mensagem Thank you for your order!

 #@ 🧪 Testes End-to-End com Playwright

 Este projeto utiliza o [Playwright](https://playwright.dev/) na versão `^1.56.1` para testes end-to-end (E2E).
 
 ## ⚙️ Pré-requisitos

- Node.js instalado (v16 ou superior recomendado)

 ## 🚀 Instalando as dependências

 Se ainda não instalou as dependências do projeto, rode:

 ```bash
  npm install -D @playwright/test 

  npx playwright install
 ```
 
 ## ▶️ Como rodar os testes
 ```bash
	npx playwright test --ui - (interface gráfica)
	npx playwright test - (diretamente no terminal)
  ```
 ## 🧱 POM

A arquitetura utilizada é o Page Object Model (POM) é um padrão muito utilizado em testes automatizados. Ele consiste em: 
  - Separar a lógica dos testes dos elementos e interações com a interface.
  - Criar “objetos de página” que representam as páginas ou componentes da aplicação, encapsulando os seletores e ações que podem ser feitas neles.

 	Benefícios:
     - Melhora a organização e reutilização de código.
     - Facilita a manutenção (caso um seletor mude, altera-se apenas em um lugar).
     - Torna os testes mais legíveis.
 
 ## 📁 Estrutura de Pastas
	
  ```bash
  A estrutura dos testes:
  
  ├── tests/                         # Diretório principal dos testes automatizados
  │   ├── e2e/                       # Testes de ponta a ponta
  │   │   ├── checkout.spec.ts       # Testes relacionados ao fluxo de checkout
  │   │   ├── login.spec.ts          # Testes relacionados ao login
  │   │   └── product.spec.ts        # Testes relacionados a produtos
  │   │
  │   ├── fixtures/                  # Dados de apoio utilizados nos testes (mocks e fixtures)
  │   │   ├── dataCart.json
  │   │   ├── dataCheckout.json
  │   │   ├── dataForm.json
  │   │   ├── dataLogin.json
  │   │   └── dataProduct.json
  │
  ├── pages/                         # Padrão Page Object Model (POM)
  │   ├── cart/                      # Ações e seletores da página de carrinho
  │   ├── checkout/                  # Ações e seletores da página de checkout
  │   ├── form/                      # Ações e seletores da página de formulário
  │   ├── login/                     # Ações e seletores da página de login
  │   └── product/                   # Ações e seletores da página de produtos
  │
  ├── utils/                         # Funções utilitárias e comandos customizados
  │   ├── commands.ts                # Comandos reutilizáveis nos testes
  │   └── elements.ts                # Mapeamento de elementos ou seletores comuns
  │
   ```
