import Asus from "./Asus";
import Macbook from "./Macbook";

let asus = new Asus("zenboo", true, true);
console.log(asus);
let macbool = new Macbook("2017", false, false);
console.log(macbool);
macbool.a();
macbool.b();
