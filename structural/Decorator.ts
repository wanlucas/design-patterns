// Interface base a ser seguida
interface Component {
  execute(): void;
}

// Implementação concreta da interface, objetos reais da aplicação
class ConcreteComponent implements Component {
  execute(): void {
    console.log("ConcreteComponent: Operação padrão");
  }
}

// Decorator base que implementa a interface e mantém uma referência ao componente
class Decorator implements Component {
  protected component: Component;
  
  constructor (component: Component) {
    this.component = component;
  }

  execute(): void {
    this.component.execute();
  }
}

// Decorator concreto que adiciona novas funcionalidades
class LogBeforeDecorator extends Decorator {
  execute(): void {
    console.log("LogBeforeDecorator: Log antes da execução");
    super.execute();
  }
}

// Outro decorator concreto que adiciona funcionalidades diferentes
class LogAfterDecorator extends Decorator {
  execute(): void {
    super.execute();
    console.log("LogAfterDecorator: Log após a execução");
  }
}

let component = new ConcreteComponent();
component.execute();

console.log("-----");

component = new LogBeforeDecorator(component);
component.execute();

console.log("-----");

component = new LogAfterDecorator(component);
component.execute();