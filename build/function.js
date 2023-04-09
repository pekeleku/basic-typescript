"use strict";
// tpe data pada retunr
function getName() {
    return "hai pekeleku";
}
console.log(getName());
function getUmur() {
    return 123;
}
const printName = () => {
    console.log("slebew");
};
printName();
////////
// arguments
const multiply = (val1, val2) => {
    return val1 * val2;
};
const result = multiply(2, 50);
console.log(result);
const Add = (val1, val2) => {
    return val1 + val2;
};
// default parameter
const fullName = (first, last = "aluman") => {
    return first + " " + last;
};
console.log(fullName("walter", "tabesi"));
// optional parameter
const getla = (val1, val2) => {
    return val1 + val2;
};
console.log(getla("a", "a"));
