//DOM manipulation
//buat elemen baru
const pBaru = document.createElement("p");
const textPBaru = document.createTextNode("paragraf baru");
//simpan tulisan ke dalam paragraf
pBaru.appendChild(textPBaru);

//simpan pBaru di akhir Section A
const SectionA = document.getElementById("a");
SectionA.appendChild(pBaru);

const liBaru = document.createElement("li");
const textLiBaru = document.createTextNode("Item Baru");
liBaru.appendChild(textLiBaru);

const ul = document.querySelector("section#b ul");
const li2 = ul.querySelector("li:nth-child(2)");

ul.insertBefore(liBaru, li2);

const link = document.getElementsByTagName("a")[0];

SectionA.removeChild(link);

const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");

const h2Baru = document.createElement("h2");
const teksH2Baru = document.createTextNode("judul baru!");

h2Baru.appendChild(teksH2Baru);

sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = "lightgreen";
liBaru.style.backgroundColor = "lightgreen";
h2Baru.style.backgroundColor = "lightgreen";
