//fungsi pembantu jeda waktu (delay)
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

//fungsi menampilkan angka 1 sd. n
async function tampilkanAngka(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
    //memberi delay 1000 milidetik
    await delay(1000);
  }
  console.log("selesai");
}

tampilkanAngka(7);
