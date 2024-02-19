//membuat object
//object literal
var mhs1 = {
  nama: "lukman h",
  nrp: "09876543",
  email: "mohlukk.com.com",
  jurusan: "tehnik informatika",
};
var mhs2 = {
  nama: "rukumang h",
  nrp: "12345678",
  email: "Rukumang.com.com",
  jurusan: "tehnik informatika",
};

//function declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan) {
  var mhs = {};
  mhs.nama = nama;
  mhs.nrp = nrp;
  mhs.email = email;
  mhs.jurusan = jurusan;
  return mhs;
}
var mhs3 = buatObjectMahasiswa("lukman", "0987879", "lukman.com", "teknik pangan");

//constructor
function Mahasiswa(nama, nrp, email, jurusan) {
  this.nama = nama;
  this.nrp = nrp;
  this.email = email;
  this.jurusan = jurusan;
}
var mhs4 = new Mahasiswa("namkul", "093498", "namkul.com", "teknik mesin");
