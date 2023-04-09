export class User {
  /* inisiasi klo snde di costruc hrus pake this di dlam costruc */
  //   public name: string;
  name: string;

  /* cara singkat */
  constructor(name: string, public age: number) {
    this.name = name;
  }
  setName(value: string): void {
    this.name = value;
  }
  getName = (): string => {
    return this.name;
  };
}

class Admin extends User {
  read: boolean = true;
  wrire: boolean = true;
  phone: string;
  private _email: string = "";
  static getRoleName: string = "admin";

  constructor(phone: string, name: string, age: number) {
    super(name, age);
    this.phone = phone;
  }
  static getNameRole() {
    return "hei";
  }
  getRole(): { read: boolean; write: boolean } {
    return {
      read: this.read,
      write: this.wrire,
    };
  }

  set email(value: string) {
    if (value.length < 5) {
      this._email = "email salah cok!";
    } else {
      this._email = value;
    }
  }
  get email(): string {
    return this._email;
  }
}
let admin = Admin.getNameRole();
console.log(admin);
