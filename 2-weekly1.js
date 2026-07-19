function tabelPerkalian(isiTabel) {
  let tabel = [];
  // looping untuk membuat baris
  for (let baris = 1; baris <= isiTabel; baris++) {
    let barisBaru = [];
    // looping untuk membuat kolom
    for (let kolom = 1; kolom <= isiTabel; kolom++) {
      //perkalian awal baris dengan awal kolom
      barisBaru.push(baris * kolom);
    }
    // masukkan baris yg sudah berisi hasil perkalian kedalam tabel utama
    tabel.push(barisBaru);
  }
  // menampilkan dalam bentuk tabel
  console.table(tabel);
}

tabelPerkalian(5);
