//manipulasi array

//1. menambah isi array
// var arr = [];
// arr[0] = "sandhika";
// arr[1] = "galih";
// arr[2] = "nova";
// arr[6] = "doddy";

//console.log(arr);

//2. menghapus isi array
// var arr = ["shandhika","galih","nova"]
// arr[1] = undefined;
// console.log(arr);

//menampilkan isi array
// var arr = ["shandhika", "galih", "nova"];

// for(var i = 0; 1 < arr.length; 1++ ) {
// console.log('mahasiswa ke-' + (i+1) + ' : ' + arr[i]);
// }

//methot pada array
// var arr = ["shandika", "galih", "nofa"];
//1.join
// console.log(arr.join(' - '))

//2.push dan pop
// arr.push('dody','fitri');
// arr.pop();
// arr.pop();
// console.log(arr.join(' - '))

//3.unshift dan shift
// arr.unshift("doddy");
// arr.shift();
// console.log(arr.join(" - "));

//4.splice
// arr.splice(1, 2, "doody", "fitri");
// console.log(arr.join(" - "));

//5.slice
// var arr = ["shandhika", "galih", "nofa", "doddy", "fitri"];
// var arr2 = arr.slice(1, 4);
// console.log(arr.join(" - "));
// console.log(arr.join(" - "));

//6.foreach
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// var nama = ["shandhika", "galih", "nova"];
// for( var i =0; i < angka.length; i++ ) {
//   console.log(angka[1]);
// }

// angka.forEach(function (e) {
//   console.log(e);
// });

// nama.forEach(function (e, i) {
//   console.log("mahasiswa ke-" + (i + 1) + " adalah : " + e);
// });

//7.map
// var angka = [1, 2, 5, 3, 6, 8, 4];
// var angka2 = angka.map(function (e) {
//   return e * 2;
// });
// console.log(angka2.join(' - '));

//8. sort
var angka = [1, 2, 5, 10, 20, 7, 4, 6];
angka.sort(function (a, b) {
  return a - b;
});
console.log(angka.join(" - "));
