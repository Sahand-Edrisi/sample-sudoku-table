

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

function easy(){
  clearTable();
    num = sudoku.board_string_to_grid(sudoku.generate("easy"));
  createTable();
 }
  function medium(){
    clearTable();
    num = sudoku.board_string_to_grid(sudoku.generate("medium"));
    createTable();
  }
  function hard(){
    clearTable();
    num = sudoku.board_string_to_grid(sudoku.generate("hard"));
    createTable();
  }
  function VeryHard(){
    clearTable();
    num = sudoku.board_string_to_grid(sudoku.generate("very-hard"));
    createTable();
  }
  function insane(){
    clearTable();
    num = sudoku.board_string_to_grid(sudoku.generate("insane"));
    createTable();
  }
  function inhuman(){
    clearTable();
    num = sudoku.board_string_to_grid(sudoku.generate("inhuman"));
    createTable();
  }


