// .slice() mengambil sebagian elemen dari array untuk dibuat jadi array baru tanpa merusak array asli

// INPUT
let buah = ["apel", "anggur", "semangka", "durian", "alpukat"];

// Mengambil elemen dari array dari index 1 sampai sebelum 4
let buahBaru = buah.slice(1, 4);

console.log(buahBaru);
//OUTPUT [ 'anggur', 'semangka', 'durian' ]

//---------------------------------------------------------------

// .flat() meratakan array bersarang menjadi satu array tunggal

//INPUT
let angkaBersarang = [1, 2, [3, 4], [5, 6]];

// meratakan array menjadi satu array
let angkaBaru = angkaBersarang.flat();

console.log(angkaBaru);
//OUTPUT [ 1, 2, 3, 4, 5, 6 ]

//---------------------------------------------------------------

// .pop() menghapus satu elemen terakhir dari sebuah array

//INPUT
let namaIkan = ["Hiu", "Paus", "Gurame", "Nila", "Piranha"];

// mengahapus elemen paling akhir , method ini mengubah array asli dan mengembalikan nilainya
let dihapus = namaIkan.pop();

console.log(dihapus);
//OUTPUT varibel yang dihapus "Piranha"

console.log(namaIkan);
//OUTPUT Array Asli [ 'Hiu', 'Paus', 'Gurame', 'Nila' ]

//---------------------------------------------------------------

// .indexOf() Mencari posisi nomor indeks pertama dari suatu elemen didalam array

//INPUT
let namaMotor = ["Honda", "Suzuki", "Kawasaki", "BMW", "Benelli"];

// Mencari tahu di posisi indeks berapa value dari array tertentu
let posisiBMW = namaMotor.indexOf("BMW");
let posisiKawasaki = namaMotor.indexOf("Kawasaki");

// OUTPUT: 2
console.log(posisiBMW);
// OUTPUT: 3
console.log(posisiKawasaki);

// .sort() Mengurutkan elemen di dalam array secara langsung mengubah array asli

//INPUT
let skor = [40, 100, 1, 5, 25];

// Mengurutkan angka dari terkecil ke terbesar

skor.sort((a, b) => a - b);

console.log(skor);
//OUTPUT [ 1, 5, 25, 40, 100 ]
