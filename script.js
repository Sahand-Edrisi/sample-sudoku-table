function numbers(easy, medium, hard, veryHard, insane, inhuman) {
  this.num = sudoku.board_string_to_grid(sudoku.generate(easy));
  this.num = sudoku.board_string_to_grid(sudoku.generate(medium));
  this.num = sudoku.board_string_to_grid(sudoku.generate(hard));
  this.num = sudoku.board_string_to_grid(sudoku.generate(veryHard));
  this.num = sudoku.board_string_to_grid(sudoku.generate(insane));
  this.num = sudoku.board_string_to_grid(sudoku.generate(inhuman));
}

function createTable() {
  let num = sudoku.board_string_to_grid(sudoku.generate("easy"));
  for (i = 0; i < num.length; i++) {
    let table = document.getElementById("table");
    let tr = document.createElement("tr");
    let row = table.appendChild(tr);
    let numindex = num[i];
    for (let j = 0; j < numindex.length; j++) {
      row.innerHTML += `<th>${numindex[j]}</th>`;
    }
  }
}
createTable();

function clearTable() {
  document.getElementById("table").innerHTML = "";
}
easyButton.addEventListener("click", () => {
  clearTable();
  new numbers("easy");
  createTable();
});
mediumButton.addEventListener("click", () => {
  clearTable();
  new numbers("medium");
  createTable();
});
hardButton.addEventListener("click", () => {
  clearTable();
  new numbers("hard");
  createTable();
});
veryHardButton.addEventListener("click", () => {
  new clearTable();
  numbers("very-hard");
  createTable();
});
insaneButton.addEventListener("click", () => {
  clearTable();
  new numbers("insane");
  createTable();
});
inhumanButton.addEventListener("click", () => {
  clearTable();
  new numbers("inhuman");
  createTable();
});
