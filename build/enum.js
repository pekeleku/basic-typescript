"use strict";
// enum
// // numeric enum
// enum Month {
//   JAN,
//   FEB,
//   MAR,
//   APR,
//   MAY,
// }
// console.log(Month);
// string enum
var Month;
(function (Month) {
    Month["JAN"] = "january";
    Month["FEB"] = "februari";
    Month["MAR"] = "maret";
    Month["APR"] = "april";
    Month["MAY"] = "may";
})(Month || (Month = {}));
console.log(Month);
