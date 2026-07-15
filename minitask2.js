let totalBelanja = 750000;
let diskon = 0;

if (totalBelanja < 500000) {
  diskon = 0;
} else if (totalBelanja <= 1000000) {
  diskon = totalBelanja * 0.05;
} else {
  diskon = totalBelanja * 0.1;
}

let totalBayar = totalBelanja - diskon;

console.log("Total Bayar :", totalBayar);
