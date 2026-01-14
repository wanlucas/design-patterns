// Interface Command define a operação que será executada
interface Command {
  execute(): void;
}

// Comando simples que não depende de um receiver complexo
class SimpleVoiceCommand implements Command {
  constructor(private readonly payload: string) {}

  // Executa uma instrução simples conhecida pelo próprio comando
  execute(): void {
    console.log(`Assistente: ${this.payload}`);
  }
}

// Receiver que conhece as operações reais da casa inteligente
class SmartHomeReceiver {
  // Liga as luzes do ambiente
  turnOnLights(zone: string): void {
    console.log(`Ligando as luzes da zona ${zone}...`);
  }

  // Prepara a cafeteira
  brewCoffee(intensity: "mild" | "strong"): void {
    console.log(`Preparando café com intensidade ${intensity}.`);
  }

  // Ajusta a temperatura do ar-condicionado
  setTemperature(temperature: number): void {
    console.log(`Ajustando a temperatura para ${temperature}°C.`);
  }

  // Ativa o alarme
  armAlarm(mode: "home" | "away"): void {
    console.log(`Alarme no modo ${mode.toUpperCase()} ativado.`);
  }
}

// Comando complexo que delega trabalho ao receiver
class MorningRoutineCommand implements Command {
  constructor(private readonly receiver: SmartHomeReceiver) {}

  // Executa uma rotina matinal completa
  execute(): void {
    console.log("Iniciando rotina matinal...");
    this.receiver.turnOnLights("Sala");
    this.receiver.brewCoffee("strong");
    this.receiver.setTemperature(22);
  }
}

// Outro comando complexo reutilizando o mesmo receiver
class LeaveHomeCommand implements Command {
  constructor(private readonly receiver: SmartHomeReceiver) {}

  // Executa a rotina ao sair de casa
  execute(): void {
    console.log("Preparando a casa para o modo ausente...");
    this.receiver.turnOnLights("Entrada");
    this.receiver.armAlarm("away");
    this.receiver.setTemperature(26);
  }
}

// Comando macro para executar vários comandos em sequência
class MacroCommand implements Command {
  constructor(private readonly commands: Command[]) {}

  // Executa cada comando registrado
  execute(): void {
    console.log("Executando macro command...");
    this.commands.forEach(command => command.execute());
  }
}

// Invoker que armazena e dispara comandos
class VoiceAssistantInvoker {
  private onWakeUp?: Command;
  private onLeaveHome?: Command;

  constructor(private readonly name: string) {}

  // Configura o comando para a rotina de acordar
  setWakeUpCommand(command: Command): void {
    this.onWakeUp = command;
  }

  // Configura o comando para a rotina de saída
  setLeaveHomeCommand(command: Command): void {
    this.onLeaveHome = command;
  }

  // Simula o disparo da rotina ao acordar
  sayGoodMorning(): void {
    console.log(`\n${this.name}: Bom dia!`);
    this.onWakeUp?.execute();
  }

  // Simula o disparo da rotina ao sair de casa
  sayGoodbye(): void {
    console.log(`\n${this.name}: Até logo!`);
    this.onLeaveHome?.execute();
  }
}

// Demonstração de uso
const receiver = new SmartHomeReceiver();
const assistant = new VoiceAssistantInvoker("Ava");

// Comandos simples podem ser executados isoladamente
const playNewsCommand = new SimpleVoiceCommand("Reproduzindo podcast de notícias...");
playNewsCommand.execute();

// Comandos complexos
const morningRoutine = new MorningRoutineCommand(receiver);
const leaveHomeRoutine = new LeaveHomeCommand(receiver);

// Macro que combina múltiplos comandos
const weekendRoutine = new MacroCommand([
  morningRoutine,
  new SimpleVoiceCommand("Abrindo cortinas automáticas..."),
]);

// Registrar comandos no invoker
assistant.setWakeUpCommand(weekendRoutine);
assistant.setLeaveHomeCommand(leaveHomeRoutine);

// Disparar rotinas
assistant.sayGoodMorning();
assistant.sayGoodbye();
