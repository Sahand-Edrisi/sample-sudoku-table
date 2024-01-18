let num = sudoku.board_string_to_grid(sudoku.generate("easy"));

function createTable() {
  for (i = 0; i < num.length; i++) {
    let table = document.getElementById("table");
    let tr = document.createElement("tr");
    tr.setAttribute("onclick", "RowHoverActive(event)");
    tr.setAttribute("class", "rowTr" + [i]);
    let row = table.appendChild(tr);
    let numIndex = num[i];
    for (let j = 0; j < numIndex.length; j++) {
      if (numIndex[j] == ".") {
        row.innerHTML += `<th onclick="ColumnHoverActive(event)"  id="colTh${j}"><input type="text" maxLength="1" oninput="this.value = this.value.replace(/[^1-9]/g,'')" > ${(numIndex[
          j
        ] = " ")}
        </input>
        </th>
      `;
      } else {
        row.innerHTML += `<th onclick="ColumnHoverActive(event)"id="colTh${j}">${numIndex[j]}</th>`;
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

// Row Table Hover Active And Deactivate

function RowHoverActive(event) {
  let trAdd = event.currentTarget;
  let trRemove = document.getElementsByTagName("tr");
  for (let i = 0; i < 9; i++) {
    if (
      trAdd.classList.value == "rowTr" + [i] ||
      trAdd.classList.value == "hoverTr" + [i]
    ) {
      activeTrHover();
    } else {
      InactiveTrHover();
      activeTrHover();
    }
  }

  function activeTrHover() {
    let rowTr0 = document.querySelector(".rowTr0");
    let rowTr1 = document.querySelector(".rowTr1");
    let rowTr2 = document.querySelector(".rowTr2");
    let rowTr3 = document.querySelector(".rowTr3");
    let rowTr4 = document.querySelector(".rowTr4");
    let rowTr5 = document.querySelector(".rowTr5");
    let rowTr6 = document.querySelector(".rowTr6");
    let rowTr7 = document.querySelector(".rowTr7");
    let rowTr8 = document.querySelector(".rowTr8");
    switch (trAdd.classList.value) {
      case "rowTr0":
        rowTr0.setAttribute("class", "hoverTr0");
        break;
      case "rowTr1":
        rowTr1.setAttribute("class", "hoverTr1");
        break;
      case "rowTr2":
        rowTr2.setAttribute("class", "hoverTr2");
        break;
      case "rowTr3":
        rowTr3.setAttribute("class", "hoverTr3");
        break;
      case "rowTr4":
        rowTr4.setAttribute("class", "hoverTr4");
        break;
      case "rowTr5":
        rowTr5.setAttribute("class", "hoverTr5");
        break;
      case "rowTr6":
        rowTr6.setAttribute("class", "hoverTr6");
        break;
      case "rowTr7":
        rowTr7.setAttribute("class", "hoverTr7");
        break;
      case "rowTr8":
        rowTr8.setAttribute("class", "hoverTr8");
    }
  }
  function InactiveTrHover() {
    let hoverTr0 = document.querySelector(".hoverTr0");
    let hoverTr1 = document.querySelector(".hoverTr1");
    let hoverTr2 = document.querySelector(".hoverTr2");
    let hoverTr3 = document.querySelector(".hoverTr3");
    let hoverTr4 = document.querySelector(".hoverTr4");
    let hoverTr5 = document.querySelector(".hoverTr5");
    let hoverTr6 = document.querySelector(".hoverTr6");
    let hoverTr7 = document.querySelector(".hoverTr7");
    let hoverTr8 = document.querySelector(".hoverTr8");
    for (let j = 0; j < 9; j++) {
      switch (trRemove[j].className) {
        case "hoverTr0":
          hoverTr0.setAttribute("class", "rowTr0");

          break;
        case "hoverTr1":
          hoverTr1.setAttribute("class", "rowTr1");

          break;
        case "hoverTr2":
          hoverTr2.setAttribute("class", "rowTr2");

          break;
        case "hoverTr3":
          hoverTr3.setAttribute("class", "rowTr3");

          break;
        case "hoverTr4":
          hoverTr4.setAttribute("class", "rowTr4");

          break;
        case "hoverTr5":
          hoverTr5.setAttribute("class", "rowTr5");

          break;
        case "hoverTr6":
          hoverTr6.setAttribute("class", "rowTr6");

          break;
        case "hoverTr7":
          hoverTr7.setAttribute("class", "rowTr7");

          break;
        case "hoverTr8":
          hoverTr8.setAttribute("class", "rowTr8");
      }
    }
  }
}

function ColumnHoverActive(event) {
  let thAdd = event.currentTarget;
  let thRemove = document.getElementsByTagName("th");
  for (let i = 0; i < 9; i++) {
    if (thAdd.id == "colTh" + [i] || thAdd.id == "hoverTh" + [i]) {
      activeThHover();
    } else {
      InactiveThHover();
      activeThHover();
    }
  }

  function activeThHover() {
    let colTh0 = document.querySelectorAll("#colTh0");
    let colTh1 = document.querySelectorAll("#colTh1");
    let colTh2 = document.querySelectorAll("#colTh2");
    let colTh3 = document.querySelectorAll("#colTh3");
    let colTh4 = document.querySelectorAll("#colTh4");
    let colTh5 = document.querySelectorAll("#colTh5");
    let colTh6 = document.querySelectorAll("#colTh6");
    let colTh7 = document.querySelectorAll("#colTh7");
    let colTh8 = document.querySelectorAll("#colTh8");
    switch (thAdd.id) {
      case "colTh0":
        for (let i = 0; i < colTh0.length; i++) {
          colTh0[i].setAttribute("id", "hoverTh0");
        }
        break;
      case "colTh1":
        for (let i = 0; i < colTh1.length; i++) {
          colTh1[i].setAttribute("id", "hoverTh1");
        }
        break;
      case "colTh2":
        for (let i = 0; i < colTh2.length; i++) {
          colTh2[i].setAttribute("id", "hoverTh2");
        }
        break;
      case "colTh3":
        for (let i = 0; i < colTh3.length; i++) {
          colTh3[i].setAttribute("id", "hoverTh3");
        }
        break;
      case "colTh4":
        for (let i = 0; i < colTh4.length; i++) {
          colTh4[i].setAttribute("id", "hoverTh4");
        }
        break;
      case "colTh5":
        for (let i = 0; i < colTh5.length; i++) {
          colTh5[i].setAttribute("id", "hoverTh5");
        }
        break;
      case "colTh6":
        for (let i = 0; i < colTh6.length; i++) {
          colTh6[i].setAttribute("id", "hoverTh6");
        }
        break;
      case "colTh7":
        for (let i = 0; i < colTh7.length; i++) {
          colTh7[i].setAttribute("id", "hoverTh7");
        }
        break;
      case "colTh8":
        for (let i = 0; i < colTh8.length; i++) {
          colTh8[i].setAttribute("id", "hoverTh8");
        }
    }
  }

  function InactiveThHover() {
    let hoverTh0 = document.querySelectorAll("#hoverTh0");
    let hoverTh1 = document.querySelectorAll("#hoverTh1");
    let hoverTh2 = document.querySelectorAll("#hoverTh2");
    let hoverTh3 = document.querySelectorAll("#hoverTh3");
    let hoverTh4 = document.querySelectorAll("#hoverTh4");
    let hoverTh5 = document.querySelectorAll("#hoverTh5");
    let hoverTh6 = document.querySelectorAll("#hoverTh6");
    let hoverTh7 = document.querySelectorAll("#hoverTh7");
    let hoverTh8 = document.querySelectorAll("#hoverTh8");
    for (let j = 0; j < 81; j++) {
      switch (thRemove[j].id) {
        case "hoverTh0":
          for (let i = 0; i < hoverTh0.length; i++) {
            hoverTh0[i].setAttribute("id", "colTh0");
          }
          break;
        case "hoverTh1":
          for (let i = 0; i < hoverTh1.length; i++) {
            hoverTh1[i].setAttribute("id", "colTh1");
          }
          break;
        case "hoverTh2":
          for (let i = 0; i < hoverTh2.length; i++) {
            hoverTh2[i].setAttribute("id", "colTh2");
          }
          break;
        case "hoverTh3":
          for (let i = 0; i < hoverTh3.length; i++) {
            hoverTh3[i].setAttribute("id", "colTh3");
          }
          break;
        case "hoverTh4":
          for (let i = 0; i < hoverTh4.length; i++) {
            hoverTh4[i].setAttribute("id", "colTh4");
          }
          break;
        case "hoverTh5":
          for (let i = 0; i < hoverTh5.length; i++) {
            hoverTh5[i].setAttribute("id", "colTh5");
          }
          break;
        case "hoverTh6":
          for (let i = 0; i < hoverTh6.length; i++) {
            hoverTh6[i].setAttribute("id", "colTh6");
          }
          break;
        case "hoverTh7":
          for (let i = 0; i < hoverTh7.length; i++) {
            hoverTh7[i].setAttribute("id", "colTh7");
          }
          break;
        case "hoverTh8":
          for (let i = 0; i < hoverTh8.length; i++) {
            hoverTh8[i].setAttribute("id", "colTh8");
          }
      }
    }
  }
}

createTable();

let borderLeftNone = document.querySelectorAll("#colTh0");
let borderRightNone = document.querySelectorAll("#colTh8");
let borderTop0None = document.querySelector(".rowTr0").children;
let borderBottom8None = document.querySelector(".rowTr8").children;

borderTop0None[0].style = "border-top : 0px ;border-left : 0px ";
borderTop0None[8].style = "border-top : 0px ;border-right : 0px ";
borderBottom8None[0].style = "border-bottom : 0px ;border-left : 0px ";
borderBottom8None[8].style = "border-bottom : 0px ;border-right : 0px ";

for (let i = 1; i < 8; i++) {
  borderTop0None[i].style = "border-top : 0px";
  borderBottom8None[i].style = "border-bottom : 0px";
  borderLeftNone[i].style = "border-left : 0px";
  borderRightNone[i].style = "border-right : 0px";
}
