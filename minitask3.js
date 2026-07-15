let kembalian = 22000;
let uangSeribu = 0;
let uangDuaribu = 0;
let uangLimaribu = 0;
let uangSepuluhribu = 0;
let uangLimapuluhribu = 0;

while (kembalian >= 50000) {
  uangLimapuluhribu++;
  kembalian -= 50000;
}

while (kembalian >= 10000) {
  uangSepuluhribu++;
  kembalian -= 10000;
}

while (kembalian >= 5000) {
  uangLimaribu++;
  kembalian -= 5000;
}

while (kembalian >= 2000) {
  uangDuaribu++;
  kembalian -= 2000;
}

while (kembalian >= 1000) {
  uangSeribu++;
  kembalian -= 1000;
}

console.log("Limapuluhribu = ", uangLimapuluhribu);
console.log("Sepuluhribu = ", uangSepuluhribu);
console.log("Limaribu = ", uangLimaribu);
console.log("Duaribu = ", uangDuaribu);
console.log("Seribu = ", uangSeribu);
