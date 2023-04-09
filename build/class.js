"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    /* cara singkat */
    constructor(name, age) {
        this.age = age;
        this.getName = () => {
            return this.name;
        };
        this.name = name;
    }
    setName(value) {
        this.name = value;
    }
}
exports.User = User;
class Admin extends User {
    constructor(phone, name, age) {
        super(name, age);
        this.read = true;
        this.wrire = true;
        this._email = "";
        this.phone = phone;
    }
    static getNameRole() {
        return "hei";
    }
    getRole() {
        return {
            read: this.read,
            write: this.wrire,
        };
    }
    set email(value) {
        if (value.length < 5) {
            this._email = "email salah cok!";
        }
        else {
            this._email = value;
        }
    }
    get email() {
        return this._email;
    }
}
Admin.getRoleName = "admin";
let admin = Admin.getNameRole();
console.log(admin);
