// let namaUser = ["rama", "budi", "nani", "herman"];

// namaUser.unshift("nur");

// console.log(namaUser);

let namaUser = ["rama", "budi", "nani", "herman"];
let value = "nur";

for (let i = namaUser.length; i > 0; i--) {
  namaUser[i] = namaUser[i - 1];
}

namaUser[0] = value;

console.log(namaUser);
