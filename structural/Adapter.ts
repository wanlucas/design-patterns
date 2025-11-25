
class Person {
  private name: string;
  private age: number;
  private partner: string;

  constructor(name: string, age: number, partner: string) {
    this.name = name;
    this.age = age;
    this.partner = partner;
  }
 
  describe(): void {
    console.log(`${this.name} tem ${this.age} anos e namora ${this.partner}.`);
  }
}

class Wan extends Person {
  constructor() {
    super("Wan Lucas", 25, "Ana Caroliny");
  }
}

class Lucas {
  public fullName: string;
  public birthYear: number
  public partnerName: string;

  constructor(fullName: string, birthYear: number, partnerName: string) {
    this.fullName = fullName;
    this.birthYear = birthYear;
    this.partnerName = partnerName;
  }
}

class LucasAdapter extends Person {
  constructor(lucas: Lucas) {
    super(lucas.fullName, new Date().getFullYear() - lucas.birthYear, lucas.partnerName);
  } 
}

const wan = new Wan();
wan.describe();

console.log("-----");

const lucas = new Lucas("Lucas Silva", 1998, "Mariana Souza");
const lucasAdapter = new LucasAdapter(lucas);
lucasAdapter.describe();