
let num = sudoku.board_string_to_grid(sudoku.generate("easy"));
function createTable() {
  for (i = 0; i < num.length; i++) {
    let table = document.getElementById("table");
    let tr = document.createElement("tr");
    let row = table.appendChild(tr);
    let numindex = num[i];
    for (let j = 0; j < numindex.length; j++) {
      if (numindex[j] == ".") {
        row.innerHTML += `<th><input type="text" maxlength="1">${(numindex[j] =
          " ")}</input></th>`;
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

function sudokuGenerate(difficulty){
  clearTable();
  num = sudoku.board_string_to_grid(sudoku.generate(difficulty))
  createTable();
}



