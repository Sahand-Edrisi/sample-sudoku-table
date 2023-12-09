let tr1 = document.getElementById("tr1")
let tr2 = document.getElementById("tr2")
let tr3 = document.getElementById("tr3")
let tr4 = document.getElementById("tr4")
let tr5 = document.getElementById("tr5")
let tr6 = document.getElementById("tr6")
let tr7 = document.getElementById("tr7")
let tr8 = document.getElementById("tr8")
let tr9 = document.getElementById("tr9")

let num = [
  (row1 = ["2", "3", ".", "9", "4", ".", "6", "7", "."]),
  (row2 = ["8", ".", ".", "3", "2", "5", "9", "1", "4"]),
  (row3 = ["9", ".", ".", "7", "6", ".", "3", "2", "."]),
  (row4 = ["1", ".", ".", ".", ".", ".", "7", "9", "2"]),
  (row5 = ["5", ".", "3", "2", "1", ".", "4", "8", "6"]),
  (row6 = ["4", ".", ".", "6", "8", ".", "5", "3", "1"]),
  (row7 = ["7", ".", ".", "1", ".", ".", ".", ".", "9"]),
  (row8 = ["6", "5", "9", "8", "7", "2", "1", "4", "3"]),
  (row9 = ["3", ".", ".", ".", "9", ".", ".", ".", "7"]),
];

for (i = 0; i < row1.length; i++) {
  `${(tr1.innerHTML += `<th>   ${row1[i]}</th>`)}`;
}
for (i = 0; i < row2.length; i++) {
  `${(tr2.innerHTML += `<th>   ${row2[i]}</th>`)}`;
}
for (i = 0; i < row3.length; i++) {
  `${(tr3.innerHTML += `<th>   ${row3[i]}</th>`)}`;
}
for (i = 0; i < row4.length; i++) {
  `${(tr4.innerHTML += `<th>   ${row4[i]}</th>`)}`;
}
for (i = 0; i < row5.length; i++) {
  `${(tr5.innerHTML += `<th>   ${row5[i]}</th>`)}`;
}
for (i = 0; i < row6.length; i++) {
  `${(tr6.innerHTML += `<th>   ${row6[i]}</th>`)}`;
}
for (i = 0; i < row7.length; i++) {
  `${(tr7.innerHTML += `<th>   ${row7[i]}</th>`)}`;
}
for (i = 0; i < row8.length; i++) {
  `${(tr8.innerHTML += `<th>   ${row8[i]}</th>`)}`;
}
for (i = 0; i < row9.length; i++) {
  `${(tr9.innerHTML += `<th>   ${row9[i]}</th>`)}`;
}
