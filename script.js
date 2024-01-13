let num = sudoku.board_string_to_grid(sudoku.generate("easy"));
let bacGrTab = document.getElementById("bacGrTab");

function createTable() {
  for (i = 0; i < num.length; i++) {
    let table = document.getElementById("table");
    let tr = document.createElement("tr");
    tr.setAttribute("onclick", "RowHoverActive(event)");
    tr.setAttribute("onmouseout", "RowHoverDeactivate(event)");
    tr.setAttribute("class", "rowTr" + [i]);
    let row = table.appendChild(tr);
    let numIndex = num[i];
    for (let j = 0; j < numIndex.length; j++) {
      if (numIndex[j] == ".") {
        row.innerHTML += `<th onclick="ColumnHoverActive(event)"  onmouseout="ColumnHoverDeactivate(event)" id="colTh${j}"><input class="rowTr${i}" id="colTh${j}"  onkeydown="chColor(event)"  type="text" maxlength="1" oninput="this.value = this.value.replace(/[^1-9]/g,'')" > ${(numIndex[
          j
        ] = " ")}
        </input>
        </th>
      `;
      } else {
        row.innerHTML += `<th onclick="ColumnHoverActive(event)" onmouseout="ColumnHoverDeactivate(event)"id="colTh${j}">${numIndex[j]}</th>`;
      }
    }
  }
}
//bacGrTab
for (let i = 0; i < 729; i++) {
  bacGrTab.innerHTML += `<dive id="bacGrTabBor"></dive>`;
}

function clearTable() {
  document.getElementById("table").innerHTML = "";
}
function sudokuGenerate(difficulty) {
  clearTable();
  num = sudoku.board_string_to_grid(sudoku.generate(difficulty));
  createTable();
}
// function chColor(event) {
//   let input = event.currentTarget;
//   input.style.backgroundColor = "rgb(219, 142, 17)";
// }

// Row Table Hover Active And Deactivate

function RowHoverActive(event) {
  let tr = event.currentTarget;
  let rowTr0 = document.querySelectorAll(".rowTr0");
  let rowTr1 = document.querySelectorAll(".rowTr1");
  let rowTr2 = document.querySelectorAll(".rowTr2");
  let rowTr3 = document.querySelectorAll(".rowTr3");
  let rowTr4 = document.querySelectorAll(".rowTr4");
  let rowTr5 = document.querySelectorAll(".rowTr5");
  let rowTr6 = document.querySelectorAll(".rowTr6");
  let rowTr7 = document.querySelectorAll(".rowTr7");
  let rowTr8 = document.querySelectorAll(".rowTr8");

  if (tr.classList == "rowTr0") {
    for (let i = 0; i < rowTr0.length; i++) {
      rowTr0[i].setAttribute("class", "hoverTr0");
    }
  } else if (tr.classList == "rowTr1") {
    for (let i = 0; i < rowTr1.length; i++) {
      rowTr1[i].setAttribute("class", "hoverTr1");
    }
  } else if (tr.classList == "rowTr2") {
    for (let i = 0; i < rowTr2.length; i++) {
      rowTr2[i].setAttribute("class", "hoverTr2");
    }
  } else if (tr.classList == "rowTr3") {
    for (let i = 0; i < rowTr3.length; i++) {
      rowTr3[i].setAttribute("class", "hoverTr3");
    }
  } else if (tr.classList == "rowTr4") {
    for (let i = 0; i < rowTr4.length; i++) {
      rowTr4[i].setAttribute("class", "hoverTr4");
    }
  } else if (tr.classList == "rowTr5") {
    for (let i = 0; i < rowTr5.length; i++) {
      rowTr5[i].setAttribute("class", "hoverTr5");
    }
  } else if (tr.classList == "rowTr6") {
    for (let i = 0; i < rowTr6.length; i++) {
      rowTr6[i].setAttribute("class", "hoverTr6");
    }
  } else if (tr.classList == "rowTr7") {
    for (let i = 0; i < rowTr7.length; i++) {
      rowTr7[i].setAttribute("class", "hoverTr7");
    }
  } else if (tr.classList == "rowTr8") {
    for (let i = 0; i < rowTr8.length; i++) {
      rowTr8[i].setAttribute("class", "hoverTr8");
    }
  }
}
function RowHoverDeactivate(event) {
  let tr = event.currentTarget;
  let hoverTr0 = document.querySelectorAll(".hoverTr0");
  let hoverTr1 = document.querySelectorAll(".hoverTr1");
  let hoverTr2 = document.querySelectorAll(".hoverTr2");
  let hoverTr3 = document.querySelectorAll(".hoverTr3");
  let hoverTr4 = document.querySelectorAll(".hoverTr4");
  let hoverTr5 = document.querySelectorAll(".hoverTr5");
  let hoverTr6 = document.querySelectorAll(".hoverTr6");
  let hoverTr7 = document.querySelectorAll(".hoverTr7");
  let hoverTr8 = document.querySelectorAll(".hoverTr8");
  if (tr.classList == "hoverTr0") {
    for (let i = 0; i < hoverTr0.length; i++) {
      hoverTr0[i].setAttribute("class", "rowTr0");
    }
  } else if (tr.classList == "hoverTr1") {
    for (let i = 0; i < hoverTr1.length; i++) {
      hoverTr1[i].setAttribute("class", "rowTr1");
    }
  } else if (tr.classList == "hoverTr2") {
    for (let i = 0; i < hoverTr2.length; i++) {
      hoverTr2[i].setAttribute("class", "rowTr2");
    }
  } else if (tr.classList == "hoverTr3") {
    for (let i = 0; i < hoverTr3.length; i++) {
      hoverTr3[i].setAttribute("class", "rowTr3");
    }
  } else if (tr.classList == "hoverTr4") {
    for (let i = 0; i < hoverTr4.length; i++) {
      hoverTr4[i].setAttribute("class", "rowTr4");
    }
  } else if (tr.classList == "hoverTr5") {
    for (let i = 0; i < hoverTr5.length; i++) {
      hoverTr5[i].setAttribute("class", "rowTr5");
    }
  } else if (tr.classList == "hoverTr6") {
    for (let i = 0; i < hoverTr6.length; i++) {
      hoverTr6[i].setAttribute("class", "rowTr6");
    }
  } else if (tr.classList == "hoverTr7") {
    for (let i = 0; i < hoverTr7.length; i++) {
      hoverTr7[i].setAttribute("class", "rowTr7");
    }
  } else if (tr.classList == "hoverTr8") {
    for (let i = 0; i < hoverTr8.length; i++) {
      hoverTr8[i].setAttribute("class", "rowTr8");
    }
  }
}

// Column Table hover active and Deactivate
function ColumnHoverActive(event) {
  let th = event.currentTarget;
  let colTh0 = document.querySelectorAll("#colTh0");
  let colTh1 = document.querySelectorAll("#colTh1");
  let colTh2 = document.querySelectorAll("#colTh2");
  let colTh3 = document.querySelectorAll("#colTh3");
  let colTh4 = document.querySelectorAll("#colTh4");
  let colTh5 = document.querySelectorAll("#colTh5");
  let colTh6 = document.querySelectorAll("#colTh6");
  let colTh7 = document.querySelectorAll("#colTh7");
  let colTh8 = document.querySelectorAll("#colTh8");
  if (th.id == "colTh0") {
    for (let i = 0; i < colTh0.length; i++) {
      colTh0[i].setAttribute("id", "hoverTh0");
    }
  } else if (th.id == "colTh1") {
    for (let i = 0; i < colTh1.length; i++) {
      colTh1[i].setAttribute("id", "hoverTh1");
    }
  } else if (th.id == "colTh2") {
    for (let i = 0; i < colTh2.length; i++) {
      colTh2[i].setAttribute("id", "hoverTh2");
    }
  } else if (th.id == "colTh3") {
    for (let i = 0; i < colTh3.length; i++) {
      colTh3[i].setAttribute("id", "hoverTh3");
    }
  } else if (th.id == "colTh4") {
    for (let i = 0; i < colTh4.length; i++) {
      colTh4[i].setAttribute("id", "hoverTh4");
    }
  } else if (th.id == "colTh5") {
    for (let i = 0; i < colTh5.length; i++) {
      colTh5[i].setAttribute("id", "hoverTh5");
    }
  } else if (th.id == "colTh6") {
    for (let i = 0; i < colTh6.length; i++) {
      colTh6[i].setAttribute("id", "hoverTh6");
    }
  } else if (th.id == "colTh7") {
    for (let i = 0; i < colTh7.length; i++) {
      colTh7[i].setAttribute("id", "hoverTh7");
    }
  } else if (th.id == "colTh8") {
    for (let i = 0; i < colTh8.length; i++) {
      colTh8[i].setAttribute("id", "hoverTh8");
    }
  }
}

function ColumnHoverDeactivate(event) {
  let th = event.currentTarget;
  let hoverTh0 = document.querySelectorAll("#hoverTh0");
  let hoverTh1 = document.querySelectorAll("#hoverTh1");
  let hoverTh2 = document.querySelectorAll("#hoverTh2");
  let hoverTh3 = document.querySelectorAll("#hoverTh3");
  let hoverTh4 = document.querySelectorAll("#hoverTh4");
  let hoverTh5 = document.querySelectorAll("#hoverTh5");
  let hoverTh6 = document.querySelectorAll("#hoverTh6");
  let hoverTh7 = document.querySelectorAll("#hoverTh7");
  let hoverTh8 = document.querySelectorAll("#hoverTh8");

  if (th.id == "hoverTh0") {
    for (let i = 0; i < hoverTh0.length; i++) {
      hoverTh0[i].setAttribute("id", "colTh0");
    }
  } else if (th.id == "hoverTh1") {
    for (let i = 0; i < hoverTh1.length; i++) {
      hoverTh1[i].setAttribute("id", "colTh1");
    }
  } else if (th.id == "hoverTh2") {
    for (let i = 0; i < hoverTh2.length; i++) {
      hoverTh2[i].setAttribute("id", "colTh2");
    }
  } else if (th.id == "hoverTh3") {
    for (let i = 0; i < hoverTh3.length; i++) {
      hoverTh3[i].setAttribute("id", "colTh3");
    }
  } else if (th.id == "hoverTh4") {
    for (let i = 0; i < hoverTh4.length; i++) {
      hoverTh4[i].setAttribute("id", "colTh4");
    }
  } else if (th.id == "hoverTh5") {
    for (let i = 0; i < hoverTh5.length; i++) {
      hoverTh5[i].setAttribute("id", "colTh5");
    }
  } else if (th.id == "hoverTh6") {
    for (let i = 0; i < hoverTh6.length; i++) {
      hoverTh6[i].setAttribute("id", "colTh6");
    }
  } else if (th.id == "hoverTh7") {
    for (let i = 0; i < hoverTh7.length; i++) {
      hoverTh7[i].setAttribute("id", "colTh7");
    }
  } else if (th.id == "hoverTh8") {
    for (let i = 0; i < hoverTh8.length; i++) {
      hoverTh8[i].setAttribute("id", "colTh8");
    }
  }
}

createTable();
