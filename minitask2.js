let totalBelanja = 1200000;
let diskon = 0;

if (totalBelanja < 500000) {
  console.log(totalBelanja);
} else if (totalBelanja <= 1000000) {
  console.log((diskon = totalBelanja * 0.05));
} else {
  console.log((diskon = totalBelanja * 0.1));
}

totalBayar = totalBelanja - diskon;
console.log(totalBayar);
