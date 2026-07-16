function proccesArray(arr, proccesor) {
  if (!Array.isArray(arr)) {
    console.log("Input Harus array");
    return;
  }
  if (typeof proccesor !== "function") {
    console.log("Input Harus function");
    return;
  }
  let newNumber = [];

  for (let i = 0; i < arr.length; i++) {
    newNumber[i] = proccesor(arr[i]);
  }
  return newNumber;
}

const showNumber = (num) => `number : ${num}`;
const makeDollar = (num) => `$${num}`;
const addFive = (num) => num + 5;

const numbers = [1, 2, 3, 4, 5];

console.log(proccesArray(numbers, showNumber));

console.log(proccesArray(numbers, makeDollar));

console.log(proccesArray(numbers, addFive));
