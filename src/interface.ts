interface Laptop {
  name: string;
  on(): void;
  off(): void;
}

class Asus implements Laptop {
  name: string;
  isGaming: boolean;
  constructor(name: string, isGaming: boolean) {
    this.name = name;
    this.isGaming = isGaming;
  }
  on(): void {
    console.log("menyala");
  }
  off(): void {
    console.log("mati");
  }
}
class Macbook implements Laptop {
  name: string;
  keyboardLight: boolean;

  constructor(name: string, keyboardLight: boolean) {
    this.name = name;
    this.keyboardLight = keyboardLight;
  }
  on(): void {
    console.log("menyala");
  }
  off(): void {
    console.log("mati");
  }
}
let asus = new Asus("asus", true);
console.log(asus);
console.log(asus.on());

let mb = new Macbook("mb", true);
console.log(mb);
console.log(mb.on());
