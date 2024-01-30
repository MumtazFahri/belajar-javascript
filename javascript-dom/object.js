var siswa = new Object();
siswa.namaDepan = "Fahri";
siswa.namaBelakang = "Muazzam";
siswa.alamat = "Bandung";
siswa.namaLengkap = function(){
    return this.namaDepan + " " + this.namaBelakang;
}

alert("Nama : " + siswa.namaLengkap());