# Design Patterns em TypeScript

## 📚 Sobre Design Patterns

## 🎨 Padrões Criacionais (Creational Patterns)

## 🏗️ Padrões Estruturais (Structural Patterns)

Os padrões estruturais lidam com a composição de classes e objetos, formando estruturas maiores mantendo-as flexíveis e eficientes.

### [`Decorator`](./structural/Decorator.ts)

Permite adicionar responsabilidades a um objeto dinamicamente, fornecendo uma alternativa flexível à herança para estender funcionalidades.

**Quando usar:**
- Adicionar responsabilidades a objetos individuais de forma dinâmica e transparente
- Evitar uma explosão de subclasses para cada combinação de funcionalidades

### [`Adapter`](./structural/Adapter.ts)

Converte a interface de uma classe em outra interface esperada pelos clientes, permitindo que classes com interfaces incompatíveis trabalhem juntas.

**Quando usar:**
- Integrar uma classe existente que não possui a interface esperada
- Reutilizar classes existentes que não podem ser modificadas
- Criar uma camada de compatibilidade entre diferentes sistemas

### [`Facade`](./structural/Facade.ts)

Simplifica o uso de subsistemas complexos, fornecendo uma interface única e de alto nível para o cliente interagir com vários componentes internos.

**Quando usar:**
- Reduzir a complexidade de integração entre sistemas
- Fornecer uma interface mais simples para operações comuns
- Encapsular dependências e detalhes de implementação de subsistemas

## 📖 Referências

- [Refactoring Guru - Design Patterns](https://refactoring.guru/design-patterns)
