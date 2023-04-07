// tpe data pada retunr

function getName(): string {
  return "hai pekeleku";
}
console.log(getName());

function getUmur(): number {
  return 123;
}
const printName = (): void => {
  console.log("slebew");
};
printName();
////////
// arguments
const multiply = (val1: number, val2: number): number => {
  return val1 * val2;
};
const result = multiply(2, 50);
console.log(result);

// function as type

type Tambah = (val1: number, val2: number) => number;
const Add: Tambah = (val1: number, val2: number): number => {
  return val1 + val2;
};
