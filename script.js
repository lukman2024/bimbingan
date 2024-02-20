//dom selectio
//getElementById
const judul = document.getElementById("judul");
judul.style.color = "red";
judul.style.backgroundColor = "#ccc";
judul.innerHTML = "lukmen";

// document.getElementsByTagName()
const p = document.getElementsByTagName("p");

for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "lightblue";
}

const h1 = document.getElementsByTagName("h1")[0];
h1.stylefontSize = "50px";

//document.getElementsBYclassName
const p1 = document.getElementsByClassName("p1")[0];
p1.innerHTML = "ini di ubah dari javascript";
