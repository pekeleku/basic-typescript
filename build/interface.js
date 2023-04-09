"use strict";
class Asus {
    constructor(name, isGaming) {
        this.name = name;
        this.isGaming = isGaming;
    }
    on() {
        console.log("menyala");
    }
    off() {
        console.log("mati");
    }
}
class Macbook {
    constructor(name, keyboardLight) {
        this.name = name;
        this.keyboardLight = keyboardLight;
    }
    on() {
        console.log("menyala");
    }
    off() {
        console.log("mati");
    }
}
let asus = new Asus("asus", true);
console.log(asus);
console.log(asus.on());
let mb = new Macbook("mb", true);
console.log(mb);
console.log(mb.on());
