// Handler abstrato que define a interface e a cadeia
abstract class Handler {
  private nextHandler: Handler | null = null;

  setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  handle(request: string): string | null {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }
    return null;
  }
}

// Handlers concretos
class SupportLevel1 extends Handler {
  handle(request: string): string | null {
    if (request === "senha") {
      return `SupportLevel1: Resetando senha do usuário.`;
    }
    console.log("SupportLevel1: Não consigo resolver, passando adiante...");
    return super.handle(request);
  }
}

class SupportLevel2 extends Handler {
  handle(request: string): string | null {
    if (request === "erro_sistema") {
      return `SupportLevel2: Investigando erro no sistema.`;
    }
    console.log("SupportLevel2: Não consigo resolver, passando adiante...");
    return super.handle(request);
  }
}

class SupportLevel3 extends Handler {
  handle(request: string): string | null {
    if (request === "bug_crítico") {
      return `SupportLevel3: Corrigindo bug crítico na aplicação.`;
    }
    console.log("SupportLevel3: Não consigo resolver, passando adiante...");
    return super.handle(request);
  }
}

class Manager extends Handler {
  handle(request: string): string | null {
    return `Manager: Assumindo responsabilidade pelo problema: ${request}`;
  }
}

// Cliente
function clientCode(handler: Handler) {
  const requests = ["senha", "erro_sistema", "bug_crítico", "problema_desconhecido"];

  for (const request of requests) {
    console.log(`\nCliente: Quem pode resolver '${request}'?`);
    const result = handler.handle(request);
    if (result) {
      console.log(`  ${result}`);
    } else {
      console.log(`  Ninguém conseguiu resolver.`);
    }
  }
}

// Montando a cadeia
const level1 = new SupportLevel1();
const level2 = new SupportLevel2();
const level3 = new SupportLevel3();
const manager = new Manager();

level1.setNext(level2).setNext(level3).setNext(manager);

console.log("Cadeia: Level1 > Level2 > Level3 > Manager\n");
clientCode(level1);

console.log("\n\nCadeia alternativa: Level2 > Level3 > Manager\n");
clientCode(level2);
