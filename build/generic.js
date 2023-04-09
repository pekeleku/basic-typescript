"use strict";
function getData(value) {
    return value;
}
console.log(getData("walter").length);
console.log(getData(123).length);
// generic
function myData(value) {
    return value;
}
console.log(getData("walter").length);
console.log(getData(123));
// arrow funtiion
const arrowfuntion = (value) => { };
