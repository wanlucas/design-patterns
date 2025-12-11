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

### [`Flyweight`](./structural/Flyweight.ts)

Reduz o consumo de memória compartilhando partes comuns do estado entre múltiplos objetos, em vez de manter todos os dados em cada objeto.

**Quando usar:**
- Aplicação precisa gerar um grande número de objetos similares
- Armazenamento de objetos consome muita memória
- A maioria dos estados dos objetos pode ser tornada extrínseca
- Muitos objetos podem ser substituídos por poucos objetos compartilhados

**Palavras-chave:**
- Estado Intrínseco: Parte do estado que é compartilhada entre múltiplos objetos e armazenada no flyweight.
- Estado Extrínseco: Parte do estado que é específica para cada objeto e não é compartilhada, sendo armazenada fora do flyweight.

### [`Proxy`](./structural/Proxy.ts)

Fornece um substituto ou representante de outro objeto para controlar o acesso a ele, adicionando funcionalidades como lazy loading, controle de acesso ou logging.

**Quando usar:**
- Controlar o acesso a um objeto (proteção)
- Adiar a criação de objetos pesados até que sejam realmente necessários (virtual proxy)
- Executar ações antes ou depois de acessar o objeto real
- Implementar cache ou log de operações

## 🎭 Padrões Comportamentais (Behavioral Patterns)

Os padrões comportamentais lidam com algoritmos e a atribuição de responsabilidades entre objetos, descrevendo não apenas padrões de objetos ou classes, mas também padrões de comunicação entre eles.

### [`Chain of Responsibility`](./behavioral/ChainOfResponsibility.ts)

Evita acoplar o remetente de uma solicitação ao seu destinatário, dando a mais de um objeto a chance de tratar a solicitação. Encadeia os objetos receptores e passa a solicitação ao longo da cadeia até que um objeto a trate.

**Quando usar:**
- Mais de um objeto pode tratar uma solicitação e o tratador não é conhecido a priori
- Deseja emitir uma solicitação para um dentre vários objetos sem especificar explicitamente o receptor
- O conjunto de objetos que pode tratar uma solicitação deve ser especificado dinamicamente
- Implementar sistemas de validação, aprovação ou suporte escalonado

### [`Observer`](./behavioral/Observer.ts)

Define uma dependência um-para-muitos entre objetos, de modo que quando um objeto muda de estado, todos os seus dependentes são notificados e atualizados automaticamente.

**Quando usar:**
- Uma abstração tem dois aspectos, um dependente do outro
- Uma mudança em um objeto requer mudanças em outros, mas você não sabe quantos objetos precisam ser mudados
- Um objeto deve notificar outros sem fazer suposições sobre quem são esses objetos
- Implementar sistemas de eventos, notificações ou pub-sub

## 📖 Referências

- [Refactoring Guru - Design Patterns](https://refactoring.guru/design-patterns)
