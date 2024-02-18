var tanya = true;
while (tanya) {
  var p = prompt("pilih : batu, gunting, kertas");

  var comp = Math.random();

  if (comp < 0.34) {
    comp = "batu";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "gunting";
  } else {
    comp = "kertas";
  }

  var hasil = "";
  if (p == comp) {
    hasil = "SERI";
  } else if (p == "kertas") {
    // if( comp == 'gajah' ) {
    //     hasil = 'KALAH!';
    // } else {
    //     hasil = 'MENANG!';
    // }
    hasil = comp == "batu" ? "MENANG!" : "KALAH!";
  } else if (p == "gunting") {
    hasil = (comp = "batu") ? "KALAH!" : "MENANG!";
  } else if (p == "batu") {
    hasil = (comp = "kertas") ? "KALAH!" : "MENANG!";
  } else {
    hasil = "memasukkan pilihan yang salah";
  }

  alert("kamu memilih : " + p + " computer memilih : " + comp + "\nkamu " + hasil);

  tanya = confirm("main lagi?");
}

alert("terimakasih sudah bermain");
