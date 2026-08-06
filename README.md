# Brain Soil

Brain Soil é uma aplicação web desenvolvida com Angular para apoiar o monitoramento inteligente do solo e do clima em contextos agrícolas. A interface foi criada para oferecer uma experiência simples e visual, com navegação entre páginas de login, painel principal, previsão e sensores.

## Visão geral

Este projeto transforma dados agrícolas em uma visão clara para o usuário, permitindo acompanhar informações-chave de forma organizada. A aplicação funciona como uma base para um sistema de agricultura inteligente, com foco em experiência de uso, estrutura modular e evolução futura para integração com dados reais.

## Funcionalidades atuais

- Tela de login com autenticação simulada
- Dashboard com indicadores principais
- Página de previsão agrícola
- Página de sensores
- Navegação entre rotas com Angular Router
- Layout organizado com componentes reutilizáveis

## Tecnologias utilizadas

- Angular 17
- TypeScript
- Angular Router
- Angular Forms
- RxJS
- HTML e CSS

## Estrutura do projeto

- src/app/components: componentes compartilhados, como a navbar
- src/app/layouts: layouts da aplicação
- src/app/pages: páginas principais do sistema
- src/app/routes: configuração de rotas

## Como executar localmente

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```

3. Acesse no navegador:
   ```text
   http://localhost:4200/
   ```

## Acesso de demonstração

Para fins de teste, a autenticação da tela de login foi implementada com um login fictício:

- Usuário: admin
- Senha: 1234

## Scripts disponíveis

- npm start: inicia a aplicação em modo de desenvolvimento
- npm run build: gera a build de produção
- npm test: executa os testes unitários

## Próximos passos

- Integrar dados reais de sensores
- Adicionar gráficos e indicadores dinâmicos
- Melhorar a experiência visual e responsividade
- Implementar autenticação real e persistência de dados

## Licença

Este projeto é de uso educacional e pode ser adaptado conforme necessário.
