function cekPalindrom(teks) {
  let teksAwal = teks.toLowerCase(); // ubah ke huruf kecil agar lebih rapih
  let teksTerbalik = teksAwal.split("").reverse().join(""); // pecah jadi array , balik urutan , gabungkan lagi jadi string

  //cek kondisi teks awal dan teks terbalik
  if (teksAwal === teksTerbalik) {
    return true;
  } else {
    return false;
  }
}

console.log(cekPalindrom("Katak"));
console.log(cekPalindrom("Ayam"));
