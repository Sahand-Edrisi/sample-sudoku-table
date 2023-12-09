// console.log(rowTable);

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
  `${(document.getElementById("tr1").innerHTML += `<th>   ${row1[i]}</th>`)}`;
}
for (i = 0; i < row2.length; i++) {
  `${(document.getElementById("tr2").innerHTML += `<th>   ${row2[i]}</th>`)}`;
}
for (i = 0; i < row3.length; i++) {
  `${(document.getElementById("tr3").innerHTML += `<th>   ${row3[i]}</th>`)}`;
}
for (i = 0; i < row4.length; i++) {
  `${(document.getElementById("tr4").innerHTML += `<th>   ${row4[i]}</th>`)}`;
}
for (i = 0; i < row5.length; i++) {
  `${(document.getElementById("tr5").innerHTML += `<th>   ${row5[i]}</th>`)}`;
}
for (i = 0; i < row6.length; i++) {
  `${(document.getElementById("tr6").innerHTML += `<th>   ${row6[i]}</th>`)}`;
}
for (i = 0; i < row7.length; i++) {
  `${(document.getElementById("tr7").innerHTML += `<th>   ${row7[i]}</th>`)}`;
}
for (i = 0; i < row8.length; i++) {
  `${(document.getElementById("tr8").innerHTML += `<th>   ${row8[i]}</th>`)}`;
}
for (i = 0; i < row9.length; i++) {
  `${(document.getElementById("tr9").innerHTML += `<th>   ${row9[i]}</th>`)}`;
}
