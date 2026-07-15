const arr = [
  1,
  2,
  3,
  "aku",
  "kamu",
  "dan",
  false,
  false,
  {
    name: "a",
  },
  {
    age: 10,
  },
  ["football", "paddel"],
  [2, 3, 5],
];

let jumlahNumber = 0;
let jumlahString = 0;
let jumlahBoolean = 0;
let jumlahObject = 0;
let jumlahArray = 0;

for (let i = 0; i < arr.length; i++) {
  if (Array.isArray(arr[i])) {
    jumlahArray++;
  } else if (typeof arr[i] === "object") {
    jumlahObject++;
  } else if (typeof arr[i] === "number") {
    jumlahNumber++;
  } else if (typeof arr[i] === "boolean") {
    jumlahBoolean++;
  } else if (typeof arr[i] === "string") {
    jumlahString;
  }
}

console.log("Array =", jumlahArray);
console.log("Number =", jumlahNumber);
console.log("Boolean =", jumlahBoolean);
console.log("String =", jumlahString);
console.log("Object =", jumlahObject);
