var jmlAngkot = 10;
var angkotBeroprasi = 4;
var noAngkot = 1;

while (noAngkot <= angkotBeroprasi) {
  console.log("angkot no. " + noAngkot + " sedang beroprasi");
  noAngkot++;
}

for (noAngkot <= angkotBeroprasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
  console.log("angkot no. " + noAngkot + " sedang rusak");
}
