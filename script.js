let num = sudoku.board_string_to_grid(sudoku.generate("easy"));

function createTable() {
  for (i = 0; i < num.length; i++) {
    let table = document.getElementById("table");
    let tr = document.createElement("tr");
    tr.setAttribute("onclick", "inputFocus(event)");
    let row = table.appendChild(tr);
    let numindex = num[i];
    for (let j = 0; j < numindex.length; j++) {
      if (numindex[j] == ".") {
        row.innerHTML += `<th ><input onkeydown="cheangeColor(event)" type="text" maxlength="1" oninput="this.value = this.value.replace(/[^1-9]/g,'')" >${(numindex[
          j
        ] = " ")}</input></th>`;
      } else {
        row.innerHTML += `<th><span>${numindex[j]}</span></th>`;
      }
    }
  }
}
function clearTable() {
  document.getElementById("table").innerHTML = "";
}
function sudokuGenerate(difficulty) {
  clearTable();
  num = sudoku.board_string_to_grid(sudoku.generate(difficulty));
  createTable();
}
function inputFocus(event) {
  let tr = event.currentTarget;
  tr.setAttribute("class", "hovertr");
}
function cheangeColor(event) {
  let input = event.currentTarget;
  input.style.backgroundColor = "rgb(238, 223, 8)";
}

createTable();
