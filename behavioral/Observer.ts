// Interface Subject (Observable)
interface Subject {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(): void;
}

// Interface Observer
interface Observer {
  update(subject: Subject): void;
}

// Subject concreto - Sistema de Notícias
class NewsAgency implements Subject {
  private observers: Observer[] = [];
  private latestNews: string = "";

  attach(observer: Observer): void {
    const isExist = this.observers.includes(observer);
    if (isExist) {
      console.log("Observer já está inscrito.");
      return;
    }
    console.log(`Observer inscrito.`);
    this.observers.push(observer);
  }

  detach(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      console.log("Observer não encontrado.");
      return;
    }
    this.observers.splice(observerIndex, 1);
    console.log("Observer removido.");
  }

  notify(): void {
    console.log("\nNotificando todos os observers...");
    for (const observer of this.observers) {
      observer.update(this);
    }
  }

  publishNews(news: string): void {
    console.log(`\n📰 NewsAgency: Publicando notícia: "${news}"`);
    this.latestNews = news;
    this.notify();
  }

  getLatestNews(): string {
    return this.latestNews;
  }
}

// Observers concretos
class EmailSubscriber implements Observer {
  constructor(private email: string) {}

  update(subject: Subject): void {
    if (subject instanceof NewsAgency) {
      console.log(`📧 Email para ${this.email}: "${subject.getLatestNews()}"`);
    }
  }
}

class SMSSubscriber implements Observer {
  constructor(private phoneNumber: string) {}

  update(subject: Subject): void {
    if (subject instanceof NewsAgency) {
      console.log(`📱 SMS para ${this.phoneNumber}: "${subject.getLatestNews()}"`);
    }
  }
}

class PushNotificationSubscriber implements Observer {
  constructor(private deviceId: string) {}

  update(subject: Subject): void {
    if (subject instanceof NewsAgency) {
      console.log(`🔔 Push para ${this.deviceId}: "${subject.getLatestNews()}"`);
    }
  }
}

const newsAgency = new NewsAgency();

const emailSub1 = new EmailSubscriber("usuario1@email.com");
const emailSub2 = new EmailSubscriber("usuario2@email.com");
const smsSub = new SMSSubscriber("+55 11 98765-4321");
const pushSub = new PushNotificationSubscriber("device-abc-123");

newsAgency.attach(emailSub1);
newsAgency.attach(smsSub);
newsAgency.attach(pushSub);

newsAgency.publishNews("TypeScript 5.5 foi lançado!");

console.log("\n--- Adicionando novo observer ---");
newsAgency.attach(emailSub2);

newsAgency.publishNews("Design Patterns são essenciais para desenvolvedores!");

console.log("\n--- Removendo observer ---");
newsAgency.detach(smsSub);

newsAgency.publishNews("Nova versão do Node.js disponível!");
