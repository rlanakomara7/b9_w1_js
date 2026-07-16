function hitungNilai({ matematika, bahasaInggris, bahasaIndonesia, ipa }) {
  let total = matematika + bahasaInggris + bahasaIndonesia + ipa;
  let rataRata = total / 4;

  console.log("total = ", total);
  console.log("rata-rata = ", rataRata);
}

let nilai = {
  matematika: 90,
  bahasaInggris: 89,
  bahasaIndonesia: 88,
  ipa: 91,
};

hitungNilai(nilai);
