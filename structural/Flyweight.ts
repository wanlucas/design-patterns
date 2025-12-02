// Estado intrínseco compartilhado (Flyweight)
class TreeType {
  private name: string;
  private color: string;
  private texture: string;

  constructor(name: string, color: string, texture: string) {
    this.name = name;
    this.color = color;
    this.texture = texture;
  }

  draw(canvas: string, x: number, y: number): void {
    console.log(`Drawing ${this.name} tree (${this.color}, ${this.texture}) at (${x}, ${y}) on ${canvas}`);
  }
}

class TreeFactory {
  private static treeTypes: Map<string, TreeType> = new Map();

  static getTreeType(name: string, color: string, texture: string): TreeType {
    const key = `${name}-${color}-${texture}`;
    
    if (!this.treeTypes.has(key)) {
      console.log(`Creating new TreeType: ${key}`);
      this.treeTypes.set(key, new TreeType(name, color, texture));
    } else console.log(`Reusing existing TreeType: ${key}`);
    
    return this.treeTypes.get(key)!;
  }

  static getTotalTreeTypes(): number {
    return this.treeTypes.size;
  }
}

// Contexto que contém estado extrínseco
class Tree {
  private x: number;
  private y: number;
  private type: TreeType;

  constructor(x: number, y: number, type: TreeType) {
    this.x = x;
    this.y = y;
    this.type = type;
  }

  draw(canvas: string): void {
    this.type.draw(canvas, this.x, this.y);
  }
}

// Cliente que gerencia as árvores
class Forest {
  private trees: Tree[] = [];

  plantTree(x: number, y: number, name: string, color: string, texture: string): void {
    const type = TreeFactory.getTreeType(name, color, texture);
    const tree = new Tree(x, y, type);
    this.trees.push(tree);
  }

  draw(canvas: string): void {
    console.log(`\nDrawing forest on ${canvas}:`);
    this.trees.forEach(tree => tree.draw(canvas));
  }

  getTotalTrees(): number {
    return this.trees.length;
  }
}

const forest = new Forest();

forest.plantTree(10, 20, "Oak", "Green", "Rough");
forest.plantTree(15, 25, "Oak", "Green", "Rough");
forest.plantTree(20, 30, "Pine", "Dark Green", "Smooth");
forest.plantTree(25, 35, "Oak", "Green", "Rough");
forest.plantTree(30, 40, "Pine", "Dark Green", "Smooth");
forest.plantTree(35, 45, "Birch", "White", "Smooth");
forest.plantTree(40, 50, "Oak", "Green", "Rough");

console.log("\n-----");
forest.draw("Canvas1");

console.log("\n-----");
console.log(`Total trees planted: ${forest.getTotalTrees()}`);
console.log(`Total tree types (flyweights): ${TreeFactory.getTotalTreeTypes()}`);
console.log(`Memory saved: ${forest.getTotalTrees() - TreeFactory.getTotalTreeTypes()} duplicate objects avoided`);
