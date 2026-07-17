function ambilNama(nama, waktu) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(nama);
    }, waktu);
  });
}

ambilNama("John", 1500)
  .then((nama) => {
    console.log(`Nama: ${nama}`);
    return ambilNama("Ed", 2000);
  })
  .then((nama) => {
    console.log(`Nama: ${nama}`);
    return ambilNama("Jane", 500);
  })
  .then((nama) => {
    console.log(`Nama: ${nama}`);
  })
  .catch((error) => {
    console.log(error);
  });
