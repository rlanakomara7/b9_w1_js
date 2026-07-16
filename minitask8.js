const movie = {
  id: 1,
  title: "Avengers Endgame",
  image: "avengers.jpg",
  genre: ["Action", "Adventure", "Sci-Fi"],
  cast: [
    {
      name: "Robert Downey Jr.",
      role: "Iron Man",
    },
    {
      name: "Chris Evans",
      role: "Captain America",
    },
    {
      name: "Scarlett Johansson",
      role: "Black Widow",
    },
  ],

  detailMovie() {
    console.log("Judul :", this.title);
    console.log("Gambar :", this.image);
    console.log("Genre :", this.genre);
  },

  daftarCast() {
    for (let i = 0; i < this.cast.length; i++) {
      console.log(this.cast[i].name + " - " + this.cast[i].role);
    }
  },

  ubahTitle(titleBaru) {
    if (titleBaru.length >= 3) {
      this.title = titleBaru;
    } else {
      console.log("Judul minimal 3 karakter");
    }
  },

  ubahImage(imageBaru) {
    if (imageBaru.length >= 5) {
      this.image = imageBaru;
    } else {
      console.log("Nama gambar tidak boleh kosong");
    }
  },
};

movie.detailMovie();
movie.daftarCast();

movie.ubahTitle("Spider-Man");
movie.ubahImage("spiderman.jpg");

movie.detailMovie();
