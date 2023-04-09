function getData(value: any) {
  return value;
}
console.log(getData("walter").length);
console.log(getData(123).length);

// generic
function myData<T>(value: T) {
  return value;
}
console.log(getData("walter").length);
console.log(getData(123));
// arrow funtiion

const arrowfuntion = <T>(value: T) => {};
