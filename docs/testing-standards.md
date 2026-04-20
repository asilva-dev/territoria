# 🧪 Padrões de Teste (Vitest + React Testing Library)

[cite_start]Este projeto segue diretrizes de teste focadas em **comportamento** e **confiabilidade**, garantindo que a aplicação funcione conforme o esperado pelo usuário final[cite: 2, 3].

## 📖 Filosofia de Teste

- [cite_start]**Foco no Usuário**: Teste o que o usuário vê e interage (textos, papéis semânticos, labels), não detalhes de implementação como estados internos ou funções privadas[cite: 27, 28, 29].
- [cite_start]**Estrutura AAA**: Cada teste deve ter clareza nas etapas de _Arrange_ (preparar), _Act_ (agir) e _Assert_ (validar)[cite: 4, 5].
- **Clareza > Abstração**: Prefira testes explícitos e autocontidos. [cite_start]Evite criar "helpers" genéricos que escondam a lógica da asserção[cite: 6, 7, 12, 13].

## 🔍 Consultando o DOM

- **Prioridade de Queries**:
  1. [cite_start]`screen.getByRole()`: Para garantir acessibilidade e semântica[cite: 31].
  2. [cite_start]`screen.getByText()`: Para conteúdos textuais específicos[cite: 32].
  3. [cite_start]`data-testid`: Use apenas como último recurso para elementos complexos[cite: 32, 33].

## 🖱️ Interações e Eventos

- [cite_start]**User-Event**: Use sempre `@testing-library/user-event` para simular cliques, digitação e navegação, pois ele dispara todos os eventos de baixo nível (como hover e focus)[cite: 35, 36, 39].
- [cite_start]**Sempre Assíncrono**: Interações de usuário devem ser aguardadas com `await` para evitar flutuações e testes "quebradiços"[cite: 40, 42, 44].

## 🎭 Estratégia de Mocking (O que "fingir")

- [cite_start]**NUNCA faça mock de componentes UI**: Deixe os componentes reais renderizarem para testar o comportamento verdadeiro[cite: 52, 77, 80].
- [cite_start]**Mock de Fronteiras**: Faça mock apenas de APIs externas (APIs de rede) ou APIs do browser que não existem no JSDOM (ex: `scrollIntoView`, `matchMedia`)[cite: 54, 55, 130, 131].
- [cite_start]**Limpeza**: Sempre limpe os mocks entre os testes usando `vi.clearAllMocks()` no arquivo de setup[cite: 47, 48].
