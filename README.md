# TerritorIA — Site Oficial

**Consultoria e Workshops em IA Generativa · Por Amanda Silva**

A **TerritorIA** é uma iniciativa focada em democratizar o acesso à Inteligência Artificial Generativa, transformando tecnologias complexas em ferramentas práticas para o fluxo de trabalho real. Este projeto é a landing page oficial da marca, desenvolvida com foco em **performance extrema, acessibilidade e resiliência**.

---

## Diferenciais de Engenharia

Para garantir que o "território" seja acessível a todos, o projeto foi construído sob três pilares técnicos:

### Performance & LCP Otimizado

- **Zero External Icon Libraries:** Todos os ícones são **SVGs Inline**. Isso elimina requisições HTTP extras, evita o _layout shift_ e garante que o LCP (_Largest Contentful Paint_) seja o mais baixo possível.
- **Bundler de Alta Performance:** Utilização do **Vite 5** para builds instantâneos e um runtime extremamente leve.

### Resiliência & Qualidade

- **Testing Culture:** Cobertura de testes unitários e de integração com **Vitest** e **Testing Library**, validando desde hooks personalizados (`useForm`) até fluxos críticos de erro (404 e 500).
- **Roteamento Nativo:** Implementação de roteamento condicional manual para reduzir o _bundle size_, mantendo a aplicação leve e eliminando dependências externas desnecessárias para o contexto de uma SPA de página única.
- **Acessibilidade (a11y):** Semântica HTML rigorosa, com labels devidamente conectados e suporte total a tecnologias assistivas (leitores de tela).

### Arquitetura de Estilos

- **CSS Modules & Design Tokens:** Sistema de cores e tipografia centralizado via variáveis CSS, permitindo manutenção ágil e isolamento de escopo.
- **CSS-in-JS Resiliente:** Páginas críticas (como as de erro) utilizam estilos inline via TypeScript para garantir a renderização correta mesmo em cenários de falha no carregamento de assets externos.

---

## Stack Técnica

| Tecnologia          | Finalidade                               |
| :------------------ | :--------------------------------------- |
| **React 18**        | UI baseada em componentes                |
| **TypeScript**      | Tipagem estática e segurança de código   |
| **Vitest**          | Framework de testes de nova geração      |
| **Testing Library** | Testes focados na experiência do usuário |
| **Vite 5**          | Ferramenta de build e dev server         |

---

## Organização do Projeto

O projeto segue uma estrutura modular e escalável:

- `src/components`: Componentes atômicos e reutilizáveis.
- `src/pages`: Pastas individuais contendo Componente, Estilos e Testes (ex: `Home/`, `NotFound/`).
- `src/hooks`: Lógica de negócio e estado desacoplada da UI (ex: `useForm`).
- `src/styles`: Tokens globais e definições de tema da marca.

---

## Desenvolvimento Local

```bash
# 1. Clonar o repositório
git clone [https://github.com/amanda-silva-dev/territoria-site.git](https://github.com/amanda-silva-dev/territoria-site.git)

# 2. Instalar as dependências
npm install

# 3. Iniciar o servidor de desenvolvimento
npm run dev

# 4. Rodar a suíte de testes
npm run test
```
