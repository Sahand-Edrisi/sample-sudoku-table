function easy() {
  num = sudoku.board_string_to_grid(sudoku.generate("easy"));
}
function medium() {
  num = sudoku.board_string_to_grid(sudoku.generate("medium"));
}
function hard() {
  num = sudoku.board_string_to_grid(sudoku.generate("hard"));
}
function veryHard() {
  num = sudoku.board_string_to_grid(sudoku.generate("very-hard"));
}
function insane() {
  num = sudoku.board_string_to_grid(sudoku.generate("insane"));
}
function inhuman() {
  num = sudoku.board_string_to_grid(sudoku.generate("inhuman"));
}

let num = sudoku.board_string_to_grid(sudoku.generate("easy"));
function createTable() {
  for (i = 0; i < num.length; i++) {
    let table = document.getElementById("table");
    let tr = document.createElement("tr");
    let row = table.appendChild(tr);
    let numindex = num[i];
    for (let j = 0; j < numindex.length; j++) {
      if (numindex[j] == ".") {
        row.innerHTML += `<th><input type="text" maxlength="1">${(numindex[
          j
        ] = " ")}</input></th>`;
      } else {
        row.innerHTML += `<th><span>${numindex[j]}</span></th>`;
      }
    }
  }
}
createTable();
function clearTable() {
  document.getElementById("table").innerHTML = "";
}
easyButton.addEventListener("click", () => {
  clearTable();
  easy();
  createTable();
});
mediumButton.addEventListener("click", () => {
  clearTable();
  medium();
  createTable();
});
hardButton.addEventListener("click", () => {
  clearTable();
  hard();
  createTable();
});
veryHardButton.addEventListener("click", () => {
  clearTable();
  veryHard();
  createTable();
});
insaneButton.addEventListener("click", () => {
  clearTable();
  insane();
  createTable();
});
inhumanButton.addEventListener("click", () => {
  clearTable();
  inhuman(inhuman);
  createTable();
});


