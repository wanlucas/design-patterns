// Interface comum para o Subject real e o Proxy
interface Image {
  display(): void;
}

// Subject real - objeto pesado que queremos controlar o acesso
class RealImage implements Image {
  private filename: string;

  constructor(filename: string) {
    this.filename = filename;
    this.loadFromDisk();
  }

  private loadFromDisk(): void {
    console.log(`Loading image from disk: ${this.filename}`);
  }

  display(): void {
    console.log(`Displaying image: ${this.filename}`);
  }
}

// Proxy que controla o acesso ao objeto real
class ProxyImage implements Image {
  private filename: string;
  private realImage: RealImage | null = null;

  constructor(filename: string) {
    this.filename = filename;
  }

  display(): void {
    // Lazy initialization - só cria o objeto real quando necessário
    if (this.realImage === null) {
      console.log("Proxy: Creating real image on first access");
      this.realImage = new RealImage(this.filename);
    }
    this.realImage.display();
  }
}

// Demonstração de uso
console.log("Creating proxy images (not loaded yet):");
const image1 = new ProxyImage("photo1.jpg");
const image2 = new ProxyImage("photo2.jpg");
const image3 = new ProxyImage("photo3.jpg");

console.log("\n-----");
console.log("First display of image1:");
image1.display();

console.log("\n-----");
console.log("Second display of image1 (already loaded):");
image1.display();

console.log("\n-----");
console.log("First display of image2:");
image2.display();

console.log("\n-----");
console.log("Note: image3 was never displayed, so it was never loaded from disk");
