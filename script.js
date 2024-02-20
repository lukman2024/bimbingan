//this
// var a = 10;
// console.log(window.a);

//cara 1-function declaration
// function hallo() {
//   console.log(this);
//   console.log("hallo");
// }
// this.hallo();

//cara 2-object literal
// var obj = { a: 10, nama: "lukman" };
// obj.hallo = function () {
//   console.log(this);
//   console.log("hallo");
// };
// obj.hallo();

//cara 3-constructour
function Hallo() {
  console.log(this);
  console.log("hallo");
}
var obj1 = new Hallo();
var obj2 = new Hallo();
