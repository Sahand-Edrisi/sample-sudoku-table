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
        row.innerHTML += `<th onclick="ColumnHoverActive(event)"  class="windowHoverActive${j}"  id="colTh${j}"><input type="text" maxLength="1" oninput="this.value = this.value.replace(/[^1-9]/g,'')" > ${(numIndex[
          j
        ] = " ")}
        </input>
        </th>
      `;
      } else {
        row.innerHTML += `<th onclick="ColumnHoverActive(event)" class="windowHoverActive${j}" id="colTh${j}">${numIndex[j]}</th>`;
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
      activeHoverWindow();
      activeThHover();
    } else {
      InactiveThHover();
      activeThHover();
    }
  }


  function activeHoverWindow(){
    let windowHoverActive0 = document.querySelectorAll(".windowHoverActive0");
    let windowHoverActive1 = document.querySelectorAll(".windowHoverActive1");
    let windowHoverActive2 = document.querySelectorAll(".windowHoverActive2");
    let windowHoverActive3 = document.querySelectorAll(".windowHoverActive3");
    let windowHoverActive4 = document.querySelectorAll(".windowHoverActive4");
    let windowHoverActive5 = document.querySelectorAll(".windowHoverActive5");
    let windowHoverActive6 = document.querySelectorAll(".windowHoverActive6");
    let windowHoverActive7 = document.querySelectorAll(".windowHoverActive7");
    let windowHoverActive8 = document.querySelectorAll(".windowHoverActive8");

    if (thAdd == windowHoverActive0[0]) {
      windowHoverActive1[1].setAttribute("class", "activeHoverWindow1");
      windowHoverActive1[2].setAttribute("class", "activeHoverWindow1");
      windowHoverActive2[1].setAttribute("class", "activeHoverWindow2");
      windowHoverActive2[2].setAttribute("class", "activeHoverWindow2");
    } else if (thAdd == windowHoverActive0[1]) {
      windowHoverActive1[0].setAttribute("class", "activeHoverWindow1");
      windowHoverActive1[2].setAttribute("class", "activeHoverWindow1");
      windowHoverActive2[0].setAttribute("class", "activeHoverWindow2");
      windowHoverActive2[2].setAttribute("class", "activeHoverWindow2");
    } else if (thAdd == windowHoverActive0[2]) {
      windowHoverActive1[0].setAttribute("class", "activeHoverWindow1");
      windowHoverActive1[1].setAttribute("class", "activeHoverWindow1");
      windowHoverActive2[0].setAttribute("class", "activeHoverWindow2");
      windowHoverActive2[1].setAttribute("class", "activeHoverWindow2");
    } else if (thAdd == windowHoverActive1[0]) {
      windowHoverActive0[1].setAttribute("class", "activeHoverWindow0");
      windowHoverActive0[2].setAttribute("class", "activeHoverWindow0");
      windowHoverActive2[1].setAttribute("class", "activeHoverWindow2");
      windowHoverActive2[2].setAttribute("class", "activeHoverWindow2");
    } else if (thAdd == windowHoverActive1[1]) {
      windowHoverActive0[0].setAttribute("class", "activeHoverWindow0");
      windowHoverActive0[2].setAttribute("class", "activeHoverWindow0");
      windowHoverActive2[0].setAttribute("class", "activeHoverWindow2");
      windowHoverActive2[2].setAttribute("class", "activeHoverWindow2");
    } else if (thAdd == windowHoverActive1[2]) {
      windowHoverActive0[0].setAttribute("class", "activeHoverWindow0");
      windowHoverActive0[1].setAttribute("class", "activeHoverWindow0");
      windowHoverActive2[0].setAttribute("class", "activeHoverWindow2");
      windowHoverActive2[1].setAttribute("class", "activeHoverWindow2");
    } else if (thAdd == windowHoverActive2[0]) {
      windowHoverActive0[1].setAttribute("class", "activeHoverWindow0");
      windowHoverActive0[2].setAttribute("class", "activeHoverWindow0");
      windowHoverActive1[1].setAttribute("class", "activeHoverWindow1");
      windowHoverActive1[2].setAttribute("class", "activeHoverWindow1");
    } else if (thAdd == windowHoverActive2[1]) {
      windowHoverActive0[0].setAttribute("class", "activeHoverWindow0");
      windowHoverActive0[2].setAttribute("class", "activeHoverWindow0");
      windowHoverActive1[0].setAttribute("class", "activeHoverWindow1");
      windowHoverActive1[2].setAttribute("class", "activeHoverWindow1");
    } else if (thAdd == windowHoverActive2[2]) {
      windowHoverActive0[0].setAttribute("class", "activeHoverWindow0");
      windowHoverActive0[1].setAttribute("class", "activeHoverWindow0");
      windowHoverActive1[0].setAttribute("class", "activeHoverWindow1");
      windowHoverActive1[1].setAttribute("class", "activeHoverWindow1");
    }
    //
    else if (thAdd == windowHoverActive0[3]) {
      windowHoverActive1[4].setAttribute("class", "activeHoverWindow1");
      windowHoverActive1[5].setAttribute("class", "activeHoverWindow1");
      windowHoverActive2[4].setAttribute("class", "activeHoverWindow2");
      windowHoverActive2[5].setAttribute("class", "activeHoverWindow2");
    } else if (thAdd == windowHoverActive0[4]) {
      windowHoverActive1[3].setAttribute("class", "activeHoverWindow1");
      windowHoverActive1[5].setAttribute("class", "activeHoverWindow1");
      windowHoverActive2[3].setAttribute("class", "activeHoverWindow2");
      windowHoverActive2[5].setAttribute("class", "activeHoverWindow2");
    } else if (thAdd == windowHoverActive0[5]) {
      windowHoverActive1[3].setAttribute("class", "activeHoverWindow1");
      windowHoverActive1[4].setAttribute("class", "activeHoverWindow1");
      windowHoverActive2[3].setAttribute("class", "activeHoverWindow2");
      windowHoverActive2[4].setAttribute("class", "activeHoverWindow2");
    } else if (thAdd == windowHoverActive1[3]) {
      windowHoverActive0[4].setAttribute("class", "activeHoverWindow0");
      windowHoverActive0[5].setAttribute("class", "activeHoverWindow0");
      windowHoverActive2[4].setAttribute("class", "activeHoverWindow2");
      windowHoverActive2[5].setAttribute("class", "activeHoverWindow2");
    } else if (thAdd == windowHoverActive1[4]) {
      windowHoverActive0[3].setAttribute("class", "activeHoverWindow0");
      windowHoverActive0[5].setAttribute("class", "activeHoverWindow0");
      windowHoverActive2[3].setAttribute("class", "activeHoverWindow2");
      windowHoverActive2[5].setAttribute("class", "activeHoverWindow2");
    } else if (thAdd == windowHoverActive1[5]) {
      windowHoverActive0[3].setAttribute("class", "activeHoverWindow0");
      windowHoverActive0[4].setAttribute("class", "activeHoverWindow0");
      windowHoverActive2[3].setAttribute("class", "activeHoverWindow2");
      windowHoverActive2[4].setAttribute("class", "activeHoverWindow2");
    } else if (thAdd == windowHoverActive2[3]) {
      windowHoverActive0[4].setAttribute("class", "activeHoverWindow0");
      windowHoverActive0[5].setAttribute("class", "activeHoverWindow0");
      windowHoverActive1[4].setAttribute("class", "activeHoverWindow1");
      windowHoverActive1[5].setAttribute("class", "activeHoverWindow1");
    } else if (thAdd == windowHoverActive2[4]) {
      windowHoverActive0[3].setAttribute("class", "activeHoverWindow0");
      windowHoverActive0[5].setAttribute("class", "activeHoverWindow0");
      windowHoverActive1[3].setAttribute("class", "activeHoverWindow1");
      windowHoverActive1[5].setAttribute("class", "activeHoverWindow1");
    } else if (thAdd == windowHoverActive2[5]) {
      windowHoverActive0[3].setAttribute("class", "activeHoverWindow0");
      windowHoverActive0[4].setAttribute("class", "activeHoverWindow0");
      windowHoverActive1[3].setAttribute("class", "activeHoverWindow1");
      windowHoverActive1[4].setAttribute("class", "activeHoverWindow1");
    }

    //
    else if (thAdd == windowHoverActive0[6]) {
      windowHoverActive1[7].setAttribute("class", "activeHoverWindow1");
      windowHoverActive1[8].setAttribute("class", "activeHoverWindow1");
      windowHoverActive2[7].setAttribute("class", "activeHoverWindow2");
      windowHoverActive2[8].setAttribute("class", "activeHoverWindow2");
    } else if (thAdd == windowHoverActive0[7]) {
      windowHoverActive1[6].setAttribute("class", "activeHoverWindow1");
      windowHoverActive1[8].setAttribute("class", "activeHoverWindow1");
      windowHoverActive2[6].setAttribute("class", "activeHoverWindow2");
      windowHoverActive2[8].setAttribute("class", "activeHoverWindow2");
    } else if (thAdd == windowHoverActive0[8]) {
      windowHoverActive1[6].setAttribute("class", "activeHoverWindow1");
      windowHoverActive1[7].setAttribute("class", "activeHoverWindow1");
      windowHoverActive2[6].setAttribute("class", "activeHoverWindow2");
      windowHoverActive2[7].setAttribute("class", "activeHoverWindow2");
    } else if (thAdd == windowHoverActive1[6]) {
      windowHoverActive0[7].setAttribute("class", "activeHoverWindow0");
      windowHoverActive0[8].setAttribute("class", "activeHoverWindow0");
      windowHoverActive2[7].setAttribute("class", "activeHoverWindow2");
      windowHoverActive2[8].setAttribute("class", "activeHoverWindow2");
    } else if (thAdd == windowHoverActive1[7]) {
      windowHoverActive0[6].setAttribute("class", "activeHoverWindow0");
      windowHoverActive0[8].setAttribute("class", "activeHoverWindow0");
      windowHoverActive2[6].setAttribute("class", "activeHoverWindow2");
      windowHoverActive2[8].setAttribute("class", "activeHoverWindow2");
    } else if (thAdd == windowHoverActive1[8]) {
      windowHoverActive0[6].setAttribute("class", "activeHoverWindow0");
      windowHoverActive0[7].setAttribute("class", "activeHoverWindow0");
      windowHoverActive2[6].setAttribute("class", "activeHoverWindow2");
      windowHoverActive2[7].setAttribute("class", "activeHoverWindow2");
    } else if (thAdd == windowHoverActive2[6]) {
      windowHoverActive0[7].setAttribute("class", "activeHoverWindow0");
      windowHoverActive0[8].setAttribute("class", "activeHoverWindow0");
      windowHoverActive1[7].setAttribute("class", "activeHoverWindow1");
      windowHoverActive1[8].setAttribute("class", "activeHoverWindow1");
    } else if (thAdd == windowHoverActive2[7]) {
      windowHoverActive0[6].setAttribute("class", "activeHoverWindow0");
      windowHoverActive0[8].setAttribute("class", "activeHoverWindow0");
      windowHoverActive1[6].setAttribute("class", "activeHoverWindow1");
      windowHoverActive1[8].setAttribute("class", "activeHoverWindow1");
    } else if (thAdd == windowHoverActive2[8]) {
      windowHoverActive0[6].setAttribute("class", "activeHoverWindow0");
      windowHoverActive0[7].setAttribute("class", "activeHoverWindow0");
      windowHoverActive1[6].setAttribute("class", "activeHoverWindow1");
      windowHoverActive1[7].setAttribute("class", "activeHoverWindow1");
    } else if (thAdd == windowHoverActive3[0]) {
      windowHoverActive4[1].setAttribute("class", "activeHoverWindow4");
      windowHoverActive4[2].setAttribute("class", "activeHoverWindow4");
      windowHoverActive5[1].setAttribute("class", "activeHoverWindow5");
      windowHoverActive5[2].setAttribute("class", "activeHoverWindow5");
    } else if (thAdd == windowHoverActive3[1]) {
      windowHoverActive4[0].setAttribute("class", "activeHoverWindow4");
      windowHoverActive4[2].setAttribute("class", "activeHoverWindow4");
      windowHoverActive5[0].setAttribute("class", "activeHoverWindow5");
      windowHoverActive5[2].setAttribute("class", "activeHoverWindow5");
    } else if (thAdd == windowHoverActive3[2]) {
      windowHoverActive4[0].setAttribute("class", "activeHoverWindow4");
      windowHoverActive4[1].setAttribute("class", "activeHoverWindow4");
      windowHoverActive5[0].setAttribute("class", "activeHoverWindow5");
      windowHoverActive5[1].setAttribute("class", "activeHoverWindow5");
    } else if (thAdd == windowHoverActive4[0]) {
      windowHoverActive3[1].setAttribute("class", "activeHoverWindow3");
      windowHoverActive3[2].setAttribute("class", "activeHoverWindow3");
      windowHoverActive5[1].setAttribute("class", "activeHoverWindow5");
      windowHoverActive5[2].setAttribute("class", "activeHoverWindow5");
    } else if (thAdd == windowHoverActive4[1]) {
      windowHoverActive3[0].setAttribute("class", "activeHoverWindow3");
      windowHoverActive3[2].setAttribute("class", "activeHoverWindow3");
      windowHoverActive5[0].setAttribute("class", "activeHoverWindow5");
      windowHoverActive5[2].setAttribute("class", "activeHoverWindow5");
    } else if (thAdd == windowHoverActive4[2]) {
      windowHoverActive3[0].setAttribute("class", "activeHoverWindow3");
      windowHoverActive3[1].setAttribute("class", "activeHoverWindow3");
      windowHoverActive5[0].setAttribute("class", "activeHoverWindow5");
      windowHoverActive5[1].setAttribute("class", "activeHoverWindow5");
    } else if (thAdd == windowHoverActive5[0]) {
      windowHoverActive3[1].setAttribute("class", "activeHoverWindow3");
      windowHoverActive3[2].setAttribute("class", "activeHoverWindow3");
      windowHoverActive4[1].setAttribute("class", "activeHoverWindow4");
      windowHoverActive4[2].setAttribute("class", "activeHoverWindow4");
    } else if (thAdd == windowHoverActive5[1]) {
      windowHoverActive3[0].setAttribute("class", "activeHoverWindow3");
      windowHoverActive3[2].setAttribute("class", "activeHoverWindow3");
      windowHoverActive4[0].setAttribute("class", "activeHoverWindow4");
      windowHoverActive4[2].setAttribute("class", "activeHoverWindow4");
    } else if (thAdd == windowHoverActive5[2]) {
      windowHoverActive3[0].setAttribute("class", "activeHoverWindow3");
      windowHoverActive3[1].setAttribute("class", "activeHoverWindow3");
      windowHoverActive4[0].setAttribute("class", "activeHoverWindow4");
      windowHoverActive4[1].setAttribute("class", "activeHoverWindow4");
    }
    //
    else if (thAdd == windowHoverActive3[3]) {
      windowHoverActive4[4].setAttribute("class", "activeHoverWindow4");
      windowHoverActive4[5].setAttribute("class", "activeHoverWindow4");
      windowHoverActive5[4].setAttribute("class", "activeHoverWindow5");
      windowHoverActive5[5].setAttribute("class", "activeHoverWindow5");
    } else if (thAdd == windowHoverActive3[4]) {
      windowHoverActive4[3].setAttribute("class", "activeHoverWindow4");
      windowHoverActive4[5].setAttribute("class", "activeHoverWindow4");
      windowHoverActive5[3].setAttribute("class", "activeHoverWindow5");
      windowHoverActive5[5].setAttribute("class", "activeHoverWindow5");
    } else if (thAdd == windowHoverActive3[5]) {
      windowHoverActive4[3].setAttribute("class", "activeHoverWindow4");
      windowHoverActive4[4].setAttribute("class", "activeHoverWindow4");
      windowHoverActive5[3].setAttribute("class", "activeHoverWindow5");
      windowHoverActive5[4].setAttribute("class", "activeHoverWindow5");
    } else if (thAdd == windowHoverActive4[3]) {
      windowHoverActive3[4].setAttribute("class", "activeHoverWindow3");
      windowHoverActive3[5].setAttribute("class", "activeHoverWindow3");
      windowHoverActive5[4].setAttribute("class", "activeHoverWindow5");
      windowHoverActive5[5].setAttribute("class", "activeHoverWindow5");
    } else if (thAdd == windowHoverActive4[4]) {
      windowHoverActive3[3].setAttribute("class", "activeHoverWindow3");
      windowHoverActive3[5].setAttribute("class", "activeHoverWindow3");
      windowHoverActive5[3].setAttribute("class", "activeHoverWindow5");
      windowHoverActive5[5].setAttribute("class", "activeHoverWindow5");
    } else if (thAdd == windowHoverActive4[5]) {
      windowHoverActive3[3].setAttribute("class", "activeHoverWindow3");
      windowHoverActive3[4].setAttribute("class", "activeHoverWindow3");
      windowHoverActive5[3].setAttribute("class", "activeHoverWindow5");
      windowHoverActive5[4].setAttribute("class", "activeHoverWindow5");
    } else if (thAdd == windowHoverActive5[3]) {
      windowHoverActive3[4].setAttribute("class", "activeHoverWindow3");
      windowHoverActive3[5].setAttribute("class", "activeHoverWindow3");
      windowHoverActive4[4].setAttribute("class", "activeHoverWindow4");
      windowHoverActive4[5].setAttribute("class", "activeHoverWindow4");
    } else if (thAdd == windowHoverActive5[4]) {
      windowHoverActive3[3].setAttribute("class", "activeHoverWindow3");
      windowHoverActive3[5].setAttribute("class", "activeHoverWindow3");
      windowHoverActive4[3].setAttribute("class", "activeHoverWindow4");
      windowHoverActive4[5].setAttribute("class", "activeHoverWindow4");
    } else if (thAdd == windowHoverActive5[5]) {
      windowHoverActive3[3].setAttribute("class", "activeHoverWindow3");
      windowHoverActive3[4].setAttribute("class", "activeHoverWindow3");
      windowHoverActive4[3].setAttribute("class", "activeHoverWindow4");
      windowHoverActive4[4].setAttribute("class", "activeHoverWindow4");
    }

    //
    else if (thAdd == windowHoverActive3[6]) {
      windowHoverActive4[7].setAttribute("class", "activeHoverWindow4");
      windowHoverActive4[8].setAttribute("class", "activeHoverWindow4");
      windowHoverActive5[7].setAttribute("class", "activeHoverWindow5");
      windowHoverActive5[8].setAttribute("class", "activeHoverWindow5");
    } else if (thAdd == windowHoverActive3[7]) {
      windowHoverActive4[6].setAttribute("class", "activeHoverWindow4");
      windowHoverActive4[8].setAttribute("class", "activeHoverWindow4");
      windowHoverActive5[6].setAttribute("class", "activeHoverWindow5");
      windowHoverActive5[8].setAttribute("class", "activeHoverWindow5");
    } else if (thAdd == windowHoverActive3[8]) {
      windowHoverActive4[6].setAttribute("class", "activeHoverWindow4");
      windowHoverActive4[7].setAttribute("class", "activeHoverWindow4");
      windowHoverActive5[6].setAttribute("class", "activeHoverWindow5");
      windowHoverActive5[7].setAttribute("class", "activeHoverWindow5");
    } else if (thAdd == windowHoverActive4[6]) {
      windowHoverActive3[7].setAttribute("class", "activeHoverWindow3");
      windowHoverActive3[8].setAttribute("class", "activeHoverWindow3");
      windowHoverActive5[7].setAttribute("class", "activeHoverWindow5");
      windowHoverActive5[8].setAttribute("class", "activeHoverWindow5");
    } else if (thAdd == windowHoverActive4[7]) {
      windowHoverActive3[6].setAttribute("class", "activeHoverWindow3");
      windowHoverActive3[8].setAttribute("class", "activeHoverWindow3");
      windowHoverActive5[6].setAttribute("class", "activeHoverWindow5");
      windowHoverActive5[8].setAttribute("class", "activeHoverWindow5");
    } else if (thAdd == windowHoverActive4[8]) {
      windowHoverActive3[6].setAttribute("class", "activeHoverWindow3");
      windowHoverActive3[7].setAttribute("class", "activeHoverWindow3");
      windowHoverActive5[6].setAttribute("class", "activeHoverWindow5");
      windowHoverActive5[7].setAttribute("class", "activeHoverWindow5");
    } else if (thAdd == windowHoverActive5[6]) {
      windowHoverActive3[7].setAttribute("class", "activeHoverWindow3");
      windowHoverActive3[8].setAttribute("class", "activeHoverWindow3");
      windowHoverActive4[7].setAttribute("class", "activeHoverWindow4");
      windowHoverActive4[8].setAttribute("class", "activeHoverWindow4");
    } else if (thAdd == windowHoverActive5[7]) {
      windowHoverActive3[6].setAttribute("class", "activeHoverWindow3");
      windowHoverActive3[8].setAttribute("class", "activeHoverWindow3");
      windowHoverActive4[6].setAttribute("class", "activeHoverWindow4");
      windowHoverActive4[8].setAttribute("class", "activeHoverWindow4");
    } else if (thAdd == windowHoverActive5[8]) {
      windowHoverActive3[6].setAttribute("class", "activeHoverWindow3");
      windowHoverActive3[7].setAttribute("class", "activeHoverWindow3");
      windowHoverActive4[6].setAttribute("class", "activeHoverWindow4");
      windowHoverActive4[7].setAttribute("class", "activeHoverWindow4");
    }

    //
    else if (thAdd == windowHoverActive6[0]) {
      windowHoverActive7[1].setAttribute("class", "activeHoverWindow7");
      windowHoverActive7[2].setAttribute("class", "activeHoverWindow7");
      windowHoverActive8[1].setAttribute("class", "activeHoverWindow8");
      windowHoverActive8[2].setAttribute("class", "activeHoverWindow8");
    } else if (thAdd == windowHoverActive6[1]) {
      windowHoverActive7[0].setAttribute("class", "activeHoverWindow7");
      windowHoverActive7[2].setAttribute("class", "activeHoverWindow7");
      windowHoverActive8[0].setAttribute("class", "activeHoverWindow8");
      windowHoverActive8[2].setAttribute("class", "activeHoverWindow8");
    } else if (thAdd == windowHoverActive6[2]) {
      windowHoverActive7[0].setAttribute("class", "activeHoverWindow7");
      windowHoverActive7[1].setAttribute("class", "activeHoverWindow7");
      windowHoverActive8[0].setAttribute("class", "activeHoverWindow8");
      windowHoverActive8[1].setAttribute("class", "activeHoverWindow8");
    } else if (thAdd == windowHoverActive7[0]) {
      windowHoverActive6[1].setAttribute("class", "activeHoverWindow6");
      windowHoverActive6[2].setAttribute("class", "activeHoverWindow6");
      windowHoverActive8[1].setAttribute("class", "activeHoverWindow8");
      windowHoverActive8[2].setAttribute("class", "activeHoverWindow8");
    } else if (thAdd == windowHoverActive7[1]) {
      windowHoverActive6[0].setAttribute("class", "activeHoverWindow6");
      windowHoverActive6[2].setAttribute("class", "activeHoverWindow6");
      windowHoverActive8[0].setAttribute("class", "activeHoverWindow8");
      windowHoverActive8[2].setAttribute("class", "activeHoverWindow8");
    } else if (thAdd == windowHoverActive7[2]) {
      windowHoverActive6[0].setAttribute("class", "activeHoverWindow6");
      windowHoverActive6[1].setAttribute("class", "activeHoverWindow6");
      windowHoverActive8[0].setAttribute("class", "activeHoverWindow8");
      windowHoverActive8[1].setAttribute("class", "activeHoverWindow8");
    } else if (thAdd == windowHoverActive8[0]) {
      windowHoverActive6[1].setAttribute("class", "activeHoverWindow6");
      windowHoverActive6[2].setAttribute("class", "activeHoverWindow6");
      windowHoverActive7[1].setAttribute("class", "activeHoverWindow7");
      windowHoverActive7[2].setAttribute("class", "activeHoverWindow7");
    } else if (thAdd == windowHoverActive8[1]) {
      windowHoverActive6[0].setAttribute("class", "activeHoverWindow6");
      windowHoverActive6[2].setAttribute("class", "activeHoverWindow6");
      windowHoverActive7[0].setAttribute("class", "activeHoverWindow7");
      windowHoverActive7[2].setAttribute("class", "activeHoverWindow7");
    } else if (thAdd == windowHoverActive8[2]) {
      windowHoverActive6[0].setAttribute("class", "activeHoverWindow6");
      windowHoverActive6[1].setAttribute("class", "activeHoverWindow6");
      windowHoverActive7[0].setAttribute("class", "activeHoverWindow7");
      windowHoverActive7[1].setAttribute("class", "activeHoverWindow7");
    }
    //
    else if (thAdd == windowHoverActive6[3]) {
      windowHoverActive7[4].setAttribute("class", "activeHoverWindow7");
      windowHoverActive7[5].setAttribute("class", "activeHoverWindow7");
      windowHoverActive8[4].setAttribute("class", "activeHoverWindow8");
      windowHoverActive8[5].setAttribute("class", "activeHoverWindow8");
    } else if (thAdd == windowHoverActive6[4]) {
      windowHoverActive7[3].setAttribute("class", "activeHoverWindow7");
      windowHoverActive7[5].setAttribute("class", "activeHoverWindow7");
      windowHoverActive8[3].setAttribute("class", "activeHoverWindow8");
      windowHoverActive8[5].setAttribute("class", "activeHoverWindow8");
    } else if (thAdd == windowHoverActive6[5]) {
      windowHoverActive7[3].setAttribute("class", "activeHoverWindow7");
      windowHoverActive7[4].setAttribute("class", "activeHoverWindow7");
      windowHoverActive8[3].setAttribute("class", "activeHoverWindow8");
      windowHoverActive8[4].setAttribute("class", "activeHoverWindow8");
    } else if (thAdd == windowHoverActive7[3]) {
      windowHoverActive6[4].setAttribute("class", "activeHoverWindow6");
      windowHoverActive6[5].setAttribute("class", "activeHoverWindow6");
      windowHoverActive8[4].setAttribute("class", "activeHoverWindow8");
      windowHoverActive8[5].setAttribute("class", "activeHoverWindow8");
    } else if (thAdd == windowHoverActive7[4]) {
      windowHoverActive6[3].setAttribute("class", "activeHoverWindow6");
      windowHoverActive6[5].setAttribute("class", "activeHoverWindow6");
      windowHoverActive8[3].setAttribute("class", "activeHoverWindow8");
      windowHoverActive8[5].setAttribute("class", "activeHoverWindow8");
    } else if (thAdd == windowHoverActive7[5]) {
      windowHoverActive6[3].setAttribute("class", "activeHoverWindow6");
      windowHoverActive6[4].setAttribute("class", "activeHoverWindow6");
      windowHoverActive8[3].setAttribute("class", "activeHoverWindow8");
      windowHoverActive8[4].setAttribute("class", "activeHoverWindow8");
    } else if (thAdd == windowHoverActive8[3]) {
      windowHoverActive6[4].setAttribute("class", "activeHoverWindow6");
      windowHoverActive6[5].setAttribute("class", "activeHoverWindow6");
      windowHoverActive7[4].setAttribute("class", "activeHoverWindow7");
      windowHoverActive7[5].setAttribute("class", "activeHoverWindow7");
    } else if (thAdd == windowHoverActive8[4]) {
      windowHoverActive6[3].setAttribute("class", "activeHoverWindow6");
      windowHoverActive6[5].setAttribute("class", "activeHoverWindow6");
      windowHoverActive7[3].setAttribute("class", "activeHoverWindow7");
      windowHoverActive7[5].setAttribute("class", "activeHoverWindow7");
    } else if (thAdd == windowHoverActive8[5]) {
      windowHoverActive6[3].setAttribute("class", "activeHoverWindow6");
      windowHoverActive6[4].setAttribute("class", "activeHoverWindow6");
      windowHoverActive7[3].setAttribute("class", "activeHoverWindow7");
      windowHoverActive7[4].setAttribute("class", "activeHoverWindow7");
    }

    //
    else if (thAdd == windowHoverActive6[6]) {
      windowHoverActive7[7].setAttribute("class", "activeHoverWindow7");
      windowHoverActive7[8].setAttribute("class", "activeHoverWindow7");
      windowHoverActive8[7].setAttribute("class", "activeHoverWindow8");
      windowHoverActive8[8].setAttribute("class", "activeHoverWindow8");
    } else if (thAdd == windowHoverActive6[7]) {
      windowHoverActive7[6].setAttribute("class", "activeHoverWindow7");
      windowHoverActive7[8].setAttribute("class", "activeHoverWindow7");
      windowHoverActive8[6].setAttribute("class", "activeHoverWindow8");
      windowHoverActive8[8].setAttribute("class", "activeHoverWindow8");
    } else if (thAdd == windowHoverActive6[8]) {
      windowHoverActive7[6].setAttribute("class", "activeHoverWindow7");
      windowHoverActive7[7].setAttribute("class", "activeHoverWindow7");
      windowHoverActive8[6].setAttribute("class", "activeHoverWindow8");
      windowHoverActive8[7].setAttribute("class", "activeHoverWindow8");
    } else if (thAdd == windowHoverActive7[6]) {
      windowHoverActive6[7].setAttribute("class", "activeHoverWindow6");
      windowHoverActive6[8].setAttribute("class", "activeHoverWindow6");
      windowHoverActive8[7].setAttribute("class", "activeHoverWindow8");
      windowHoverActive8[8].setAttribute("class", "activeHoverWindow8");
    } else if (thAdd == windowHoverActive7[7]) {
      windowHoverActive6[6].setAttribute("class", "activeHoverWindow6");
      windowHoverActive6[8].setAttribute("class", "activeHoverWindow6");
      windowHoverActive8[6].setAttribute("class", "activeHoverWindow8");
      windowHoverActive8[8].setAttribute("class", "activeHoverWindow8");
    } else if (thAdd == windowHoverActive7[8]) {
      windowHoverActive6[6].setAttribute("class", "activeHoverWindow6");
      windowHoverActive6[7].setAttribute("class", "activeHoverWindow6");
      windowHoverActive8[6].setAttribute("class", "activeHoverWindow8");
      windowHoverActive8[7].setAttribute("class", "activeHoverWindow8");
    } else if (thAdd == windowHoverActive8[6]) {
      windowHoverActive6[7].setAttribute("class", "activeHoverWindow6");
      windowHoverActive6[8].setAttribute("class", "activeHoverWindow6");
      windowHoverActive7[7].setAttribute("class", "activeHoverWindow7");
      windowHoverActive7[8].setAttribute("class", "activeHoverWindow7");
    } else if (thAdd == windowHoverActive8[7]) {
      windowHoverActive6[6].setAttribute("class", "activeHoverWindow6");
      windowHoverActive6[8].setAttribute("class", "activeHoverWindow6");
      windowHoverActive7[6].setAttribute("class", "activeHoverWindow7");
      windowHoverActive7[8].setAttribute("class", "activeHoverWindow7");
    } else if (thAdd == windowHoverActive8[8]) {
      windowHoverActive6[6].setAttribute("class", "activeHoverWindow6");
      windowHoverActive6[7].setAttribute("class", "activeHoverWindow6");
      windowHoverActive7[6].setAttribute("class", "activeHoverWindow7");
      windowHoverActive7[7].setAttribute("class", "activeHoverWindow7");
    }
  }
  // function InactiveHoverWindow() {
    
  //   let activeHoverWindow0 = document.querySelectorAll(".activeHoverWindow0");
  //   let activeHoverWindow1 = document.querySelectorAll(".activeHoverWindow1");
  //   let activeHoverWindow2 = document.querySelectorAll(".activeHoverWindow2");
  //   let activeHoverWindow3 = document.querySelectorAll(".activeHoverWindow3");
  //   let activeHoverWindow4 = document.querySelectorAll(".activeHoverWindow4");
  //   let activeHoverWindow5 = document.querySelectorAll(".activeHoverWindow5");
  //   let activeHoverWindow6 = document.querySelectorAll(".activeHoverWindow6");
  //   let activeHoverWindow7 = document.querySelectorAll(".activeHoverWindow7");
  //   let activeHoverWindow8 = document.querySelectorAll(".activeHoverWindow8");

  //   if (thRemove.className == activeHoverWindow0[0]) {
  //     activeHoverWindow1[1].setAttribute("class", "windowHoverActive1");
  //     activeHoverWindow1[2].setAttribute("class", "windowHoverActive1");
  //     activeHoverWindow2[1].setAttribute("class", "windowHoverActive2");
  //     activeHoverWindow2[2].setAttribute("class", "windowHoverActive2");
  //   } else if (thRemove.className == activeHoverWindow0[1]) {
  //     activeHoverWindow1[0].setAttribute("class", "windowHoverActive1");
  //     activeHoverWindow1[2].setAttribute("class", "windowHoverActive1");
  //     activeHoverWindow2[0].setAttribute("class", "windowHoverActive2");
  //     activeHoverWindow2[2].setAttribute("class", "windowHoverActive2");
  //   } else if (thRemove.className == activeHoverWindow0[2]) {
  //     activeHoverWindow1[0].setAttribute("class", "windowHoverActive1");
  //     activeHoverWindow1[1].setAttribute("class", "windowHoverActive1");
  //     activeHoverWindow2[0].setAttribute("class", "windowHoverActive2");
  //     activeHoverWindow2[1].setAttribute("class", "windowHoverActive2");
  //   } else if (thRemove.className == activeHoverWindow1[0]) {
  //     activeHoverWindow0[1].setAttribute("class", "windowHoverActive0");
  //     activeHoverWindow0[2].setAttribute("class", "windowHoverActive0");
  //     activeHoverWindow2[1].setAttribute("class", "windowHoverActive2");
  //     activeHoverWindow2[2].setAttribute("class", "windowHoverActive2");
  //   } else if (thRemove.className == activeHoverWindow1[1]) {
  //     activeHoverWindow0[0].setAttribute("class", "windowHoverActive0");
  //     activeHoverWindow0[2].setAttribute("class", "windowHoverActive0");
  //     activeHoverWindow2[0].setAttribute("class", "windowHoverActive2");
  //     activeHoverWindow2[2].setAttribute("class", "windowHoverActive2");
  //   } else if (thRemove.className == activeHoverWindow1[2]) {
  //     activeHoverWindow0[0].setAttribute("class", "windowHoverActive0");
  //     activeHoverWindow0[1].setAttribute("class", "windowHoverActive0");
  //     activeHoverWindow2[0].setAttribute("class", "windowHoverActive2");
  //     activeHoverWindow2[1].setAttribute("class", "windowHoverActive2");
  //   } else if (thRemove.className == activeHoverWindow2[0]) {
  //     activeHoverWindow0[1].setAttribute("class", "windowHoverActive0");
  //     activeHoverWindow0[2].setAttribute("class", "windowHoverActive0");
  //     activeHoverWindow1[1].setAttribute("class", "windowHoverActive1");
  //     activeHoverWindow1[2].setAttribute("class", "windowHoverActive1");
  //   } else if (thRemove.className == activeHoverWindow2[1]) {
  //     activeHoverWindow0[0].setAttribute("class", "windowHoverActive0");
  //     activeHoverWindow0[2].setAttribute("class", "windowHoverActive0");
  //     activeHoverWindow1[0].setAttribute("class", "windowHoverActive1");
  //     activeHoverWindow1[2].setAttribute("class", "windowHoverActive1");
  //   } else if (thRemove.className == activeHoverWindow2[2]) {
  //     activeHoverWindow0[0].setAttribute("class", "windowHoverActive0");
  //     activeHoverWindow0[1].setAttribute("class", "windowHoverActive0");
  //     activeHoverWindow1[0].setAttribute("class", "windowHoverActive1");
  //     activeHoverWindow1[1].setAttribute("class", "windowHoverActive1");
  //   }
  

  //   else if (thRemove.className == activeHoverWindow0[3]) {
  //     activeHoverWindow1[4].setAttribute("class", "windowHoverActive1");
  //     activeHoverWindow1[5].setAttribute("class", "windowHoverActive1");
  //     activeHoverWindow2[4].setAttribute("class", "windowHoverActive2");
  //     activeHoverWindow2[5].setAttribute("class", "windowHoverActive2");
  //   } else if (thRemove.className == activeHoverWindow0[4]) {
  //     activeHoverWindow1[3].setAttribute("class", "windowHoverActive1");
  //     activeHoverWindow1[5].setAttribute("class", "windowHoverActive1");
  //     activeHoverWindow2[3].setAttribute("class", "windowHoverActive2");
  //     activeHoverWindow2[5].setAttribute("class", "windowHoverActive2");
  //   } else if (thRemove.className == activeHoverWindow0[5]) {
  //     activeHoverWindow1[3].setAttribute("class", "windowHoverActive1");
  //     activeHoverWindow1[4].setAttribute("class", "windowHoverActive1");
  //     activeHoverWindow2[3].setAttribute("class", "windowHoverActive2");
  //     activeHoverWindow2[4].setAttribute("class", "windowHoverActive2");
  //   } else if (thRemove.className == activeHoverWindow1[3]) {
  //     activeHoverWindow0[4].setAttribute("class", "windowHoverActive0");
  //     activeHoverWindow0[5].setAttribute("class", "windowHoverActive0");
  //     activeHoverWindow2[4].setAttribute("class", "windowHoverActive2");
  //     activeHoverWindow2[5].setAttribute("class", "windowHoverActive2");
  //   } else if (thRemove.className == activeHoverWindow1[4]) {
  //     activeHoverWindow0[3].setAttribute("class", "windowHoverActive0");
  //     activeHoverWindow0[5].setAttribute("class", "windowHoverActive0");
  //     activeHoverWindow2[3].setAttribute("class", "windowHoverActive2");
  //     activeHoverWindow2[5].setAttribute("class", "windowHoverActive2");
  //   } else if (thRemove.className == activeHoverWindow1[5]) {
  //     activeHoverWindow0[3].setAttribute("class", "windowHoverActive0");
  //     activeHoverWindow0[4].setAttribute("class", "windowHoverActive0");
  //     activeHoverWindow2[3].setAttribute("class", "windowHoverActive2");
  //     activeHoverWindow2[4].setAttribute("class", "windowHoverActive2");
  //   } else if (thRemove.className == activeHoverWindow2[3]) {
  //     activeHoverWindow0[4].setAttribute("class", "windowHoverActive0");
  //     activeHoverWindow0[5].setAttribute("class", "windowHoverActive0");
  //     activeHoverWindow1[4].setAttribute("class", "windowHoverActive1");
  //     activeHoverWindow1[5].setAttribute("class", "windowHoverActive1");
  //   } else if (thRemove.className == activeHoverWindow2[4]) {
  //     activeHoverWindow0[3].setAttribute("class", "windowHoverActive0");
  //     activeHoverWindow0[5].setAttribute("class", "windowHoverActive0");
  //     activeHoverWindow1[3].setAttribute("class", "windowHoverActive1");
  //     activeHoverWindow1[5].setAttribute("class", "windowHoverActive1");
  //   } else if (thRemove.className == activeHoverWindow2[5]) {
  //     activeHoverWindow0[3].setAttribute("class", "windowHoverActive0");
  //     activeHoverWindow0[4].setAttribute("class", "windowHoverActive0");
  //     activeHoverWindow1[3].setAttribute("class", "windowHoverActive1");
  //     activeHoverWindow1[4].setAttribute("class", "windowHoverActive1");
  //   }


  //   else if (thRemove.className == activeHoverWindow0[6]) {
  //     activeHoverWindow1[7].setAttribute("class", "windowHoverActive1");
  //     activeHoverWindow1[8].setAttribute("class", "windowHoverActive1");
  //     activeHoverWindow2[7].setAttribute("class", "windowHoverActive2");
  //     activeHoverWindow2[8].setAttribute("class", "windowHoverActive2");
  //   } else if (thRemove.className == activeHoverWindow0[7]) {
  //     activeHoverWindow1[6].setAttribute("class", "windowHoverActive1");
  //     activeHoverWindow1[8].setAttribute("class", "windowHoverActive1");
  //     activeHoverWindow2[6].setAttribute("class", "windowHoverActive2");
  //     activeHoverWindow2[8].setAttribute("class", "windowHoverActive2");
  //   } else if (thRemove.className == activeHoverWindow0[8]) {
  //     activeHoverWindow1[6].setAttribute("class", "windowHoverActive1");
  //     activeHoverWindow1[7].setAttribute("class", "windowHoverActive1");
  //     activeHoverWindow2[6].setAttribute("class", "windowHoverActive2");
  //     activeHoverWindow2[7].setAttribute("class", "windowHoverActive2");
  //   } else if (thRemove.className == activeHoverWindow1[6]) {
  //     activeHoverWindow0[7].setAttribute("class", "windowHoverActive0");
  //     activeHoverWindow0[8].setAttribute("class", "windowHoverActive0");
  //     activeHoverWindow2[7].setAttribute("class", "windowHoverActive2");
  //     activeHoverWindow2[8].setAttribute("class", "windowHoverActive2");
  //   } else if (thRemove.className == activeHoverWindow1[7]) {
  //     activeHoverWindow0[6].setAttribute("class", "windowHoverActive0");
  //     activeHoverWindow0[8].setAttribute("class", "windowHoverActive0");
  //     activeHoverWindow2[6].setAttribute("class", "windowHoverActive2");
  //     activeHoverWindow2[8].setAttribute("class", "windowHoverActive2");
  //   } else if (thRemove.className == activeHoverWindow1[8]) {
  //     activeHoverWindow0[6].setAttribute("class", "windowHoverActive0");
  //     activeHoverWindow0[7].setAttribute("class", "windowHoverActive0");
  //     activeHoverWindow2[6].setAttribute("class", "windowHoverActive2");
  //     activeHoverWindow2[7].setAttribute("class", "windowHoverActive2");
  //   } else if (thRemove.className == activeHoverWindow2[6]) {
  //     activeHoverWindow0[7].setAttribute("class", "windowHoverActive0");
  //     activeHoverWindow0[8].setAttribute("class", "windowHoverActive0");
  //     activeHoverWindow1[7].setAttribute("class", "windowHoverActive1");
  //     activeHoverWindow1[8].setAttribute("class", "windowHoverActive1");
  //   } else if (thRemove.className == activeHoverWindow2[7]) {
  //     activeHoverWindow0[6].setAttribute("class", "windowHoverActive0");
  //     activeHoverWindow0[8].setAttribute("class", "windowHoverActive0");
  //     activeHoverWindow1[6].setAttribute("class", "windowHoverActive1");
  //     activeHoverWindow1[8].setAttribute("class", "windowHoverActive1");
  //   } else if (thRemove.className == activeHoverWindow2[8]) {
  //     activeHoverWindow0[6].setAttribute("class", "windowHoverActive0");
  //     activeHoverWindow0[7].setAttribute("class", "windowHoverActive0");
  //     activeHoverWindow1[6].setAttribute("class", "windowHoverActive1");
  //     activeHoverWindow1[7].setAttribute("class", "windowHoverActive1");
  //   }

  //   else if (thRemove.className == activeHoverWindow3[0]) {
  //     activeHoverWindow4[1].setAttribute("class", "windowHoverActive4");
  //     activeHoverWindow4[2].setAttribute("class", "windowHoverActive4");
  //     activeHoverWindow5[1].setAttribute("class", "windowHoverActive5");
  //     activeHoverWindow5[2].setAttribute("class", "windowHoverActive5");
  //   } else if (thRemove.className == activeHoverWindow3[1]) {
  //     activeHoverWindow4[0].setAttribute("class", "windowHoverActive4");
  //     activeHoverWindow4[2].setAttribute("class", "windowHoverActive4");
  //     activeHoverWindow5[0].setAttribute("class", "windowHoverActive5");
  //     activeHoverWindow5[2].setAttribute("class", "windowHoverActive5");
  //   } else if (thRemove.className == activeHoverWindow3[2]) {
  //     activeHoverWindow4[0].setAttribute("class", "windowHoverActive4");
  //     activeHoverWindow4[1].setAttribute("class", "windowHoverActive4");
  //     activeHoverWindow5[0].setAttribute("class", "windowHoverActive5");
  //     activeHoverWindow5[1].setAttribute("class", "windowHoverActive5");
  //   } else if (thRemove.className == activeHoverWindow4[0]) {
  //     activeHoverWindow3[1].setAttribute("class", "windowHoverActive3");
  //     activeHoverWindow3[2].setAttribute("class", "windowHoverActive3");
  //     activeHoverWindow5[1].setAttribute("class", "windowHoverActive5");
  //     activeHoverWindow5[2].setAttribute("class", "windowHoverActive5");
  //   } else if (thRemove.className == activeHoverWindow4[1]) {
  //     activeHoverWindow3[0].setAttribute("class", "windowHoverActive3");
  //     activeHoverWindow3[2].setAttribute("class", "windowHoverActive3");
  //     activeHoverWindow5[0].setAttribute("class", "windowHoverActive5");
  //     activeHoverWindow5[2].setAttribute("class", "windowHoverActive5");
  //   } else if (thRemove.className == activeHoverWindow4[2]) {
  //     activeHoverWindow3[0].setAttribute("class", "windowHoverActive3");
  //     activeHoverWindow3[1].setAttribute("class", "windowHoverActive3");
  //     activeHoverWindow5[0].setAttribute("class", "windowHoverActive5");
  //     activeHoverWindow5[1].setAttribute("class", "windowHoverActive5");
  //   } else if (thRemove.className == activeHoverWindow5[0]) {
  //     activeHoverWindow3[1].setAttribute("class", "windowHoverActive3");
  //     activeHoverWindow3[2].setAttribute("class", "windowHoverActive3");
  //     activeHoverWindow4[1].setAttribute("class", "windowHoverActive4");
  //     activeHoverWindow4[2].setAttribute("class", "windowHoverActive4");
  //   } else if (thRemove.className == activeHoverWindow5[1]) {
  //     activeHoverWindow3[0].setAttribute("class", "windowHoverActive3");
  //     activeHoverWindow3[2].setAttribute("class", "windowHoverActive3");
  //     activeHoverWindow4[0].setAttribute("class", "windowHoverActive4");
  //     activeHoverWindow4[2].setAttribute("class", "windowHoverActive4");
  //   } else if (thRemove.className == activeHoverWindow5[2]) {
  //     activeHoverWindow3[0].setAttribute("class", "windowHoverActive3");
  //     activeHoverWindow3[1].setAttribute("class", "windowHoverActive3");
  //     activeHoverWindow4[0].setAttribute("class", "windowHoverActive4");
  //     activeHoverWindow4[1].setAttribute("class", "windowHoverActive4");
  //   }

  //   else if (thRemove.className == activeHoverWindow3[3]) {
  //     activeHoverWindow4[4].setAttribute("class", "windowHoverActive4");
  //     activeHoverWindow4[5].setAttribute("class", "windowHoverActive4");
  //     activeHoverWindow5[4].setAttribute("class", "windowHoverActive5");
  //     activeHoverWindow5[5].setAttribute("class", "windowHoverActive5");
  //   } else if (thRemove.className == activeHoverWindow3[4]) {
  //     activeHoverWindow4[3].setAttribute("class", "windowHoverActive4");
  //     activeHoverWindow4[5].setAttribute("class", "windowHoverActive4");
  //     activeHoverWindow5[3].setAttribute("class", "windowHoverActive5");
  //     activeHoverWindow5[5].setAttribute("class", "windowHoverActive5");
  //   } else if (thRemove.className == activeHoverWindow3[5]) {
  //     activeHoverWindow4[3].setAttribute("class", "windowHoverActive4");
  //     activeHoverWindow4[4].setAttribute("class", "windowHoverActive4");
  //     activeHoverWindow5[3].setAttribute("class", "windowHoverActive5");
  //     activeHoverWindow5[4].setAttribute("class", "windowHoverActive5");
  //   } else if (thRemove.className == activeHoverWindow4[3]) {
  //     activeHoverWindow3[4].setAttribute("class", "windowHoverActive3");
  //     activeHoverWindow3[5].setAttribute("class", "windowHoverActive3");
  //     activeHoverWindow5[4].setAttribute("class", "windowHoverActive5");
  //     activeHoverWindow5[5].setAttribute("class", "windowHoverActive5");
  //   } else if (thRemove.className == activeHoverWindow4[4]) {
  //     activeHoverWindow3[3].setAttribute("class", "windowHoverActive3");
  //     activeHoverWindow3[5].setAttribute("class", "windowHoverActive3");
  //     activeHoverWindow5[3].setAttribute("class", "windowHoverActive5");
  //     activeHoverWindow5[5].setAttribute("class", "windowHoverActive5");
  //   } else if (thRemove.className == activeHoverWindow4[5]) {
  //     activeHoverWindow3[3].setAttribute("class", "windowHoverActive3");
  //     activeHoverWindow3[4].setAttribute("class", "windowHoverActive3");
  //     activeHoverWindow5[3].setAttribute("class", "windowHoverActive5");
  //     activeHoverWindow5[4].setAttribute("class", "windowHoverActive5");
  //   } else if (thRemove.className == activeHoverWindow5[3]) {
  //     activeHoverWindow3[4].setAttribute("class", "windowHoverActive3");
  //     activeHoverWindow3[5].setAttribute("class", "windowHoverActive3");
  //     activeHoverWindow4[4].setAttribute("class", "windowHoverActive4");
  //     activeHoverWindow4[5].setAttribute("class", "windowHoverActive4");
  //   } else if (thRemove.className == activeHoverWindow5[4]) {
  //     activeHoverWindow3[3].setAttribute("class", "windowHoverActive3");
  //     activeHoverWindow3[5].setAttribute("class", "windowHoverActive3");
  //     activeHoverWindow4[3].setAttribute("class", "windowHoverActive4");
  //     activeHoverWindow4[5].setAttribute("class", "windowHoverActive4");
  //   } else if (thRemove.className == activeHoverWindow5[5]) {
  //     activeHoverWindow3[3].setAttribute("class", "windowHoverActive3");
  //     activeHoverWindow3[4].setAttribute("class", "windowHoverActive3");
  //     activeHoverWindow4[3].setAttribute("class", "windowHoverActive4");
  //     activeHoverWindow4[4].setAttribute("class", "windowHoverActive4");
  //   }

  
  //   else if (thRemove.className == activeHoverWindow3[6]) {
  //     activeHoverWindow4[7].setAttribute("class", "windowHoverActive4");
  //     activeHoverWindow4[8].setAttribute("class", "windowHoverActive4");
  //     activeHoverWindow5[7].setAttribute("class", "windowHoverActive5");
  //     activeHoverWindow5[8].setAttribute("class", "windowHoverActive5");
  //   } else if (thRemove.className == activeHoverWindow3[7]) {
  //     activeHoverWindow4[6].setAttribute("class", "windowHoverActive4");
  //     activeHoverWindow4[8].setAttribute("class", "windowHoverActive4");
  //     activeHoverWindow5[6].setAttribute("class", "windowHoverActive5");
  //     activeHoverWindow5[8].setAttribute("class", "windowHoverActive5");
  //   } else if (thRemove.className == activeHoverWindow3[8]) {
  //     activeHoverWindow4[6].setAttribute("class", "windowHoverActive4");
  //     activeHoverWindow4[7].setAttribute("class", "windowHoverActive4");
  //     activeHoverWindow5[6].setAttribute("class", "windowHoverActive5");
  //     activeHoverWindow5[7].setAttribute("class", "windowHoverActive5");
  //   } else if (thRemove.className == activeHoverWindow4[6]) {
  //     activeHoverWindow3[7].setAttribute("class", "windowHoverActive3");
  //     activeHoverWindow3[8].setAttribute("class", "windowHoverActive3");
  //     activeHoverWindow5[7].setAttribute("class", "windowHoverActive5");
  //     activeHoverWindow5[8].setAttribute("class", "windowHoverActive5");
  //   } else if (thRemove.className == activeHoverWindow4[7]) {
  //     activeHoverWindow3[6].setAttribute("class", "windowHoverActive3");
  //     activeHoverWindow3[8].setAttribute("class", "windowHoverActive3");
  //     activeHoverWindow5[6].setAttribute("class", "windowHoverActive5");
  //     activeHoverWindow5[8].setAttribute("class", "windowHoverActive5");
  //   } else if (thRemove.className == activeHoverWindow4[8]) {
  //     activeHoverWindow3[6].setAttribute("class", "windowHoverActive3");
  //     activeHoverWindow3[7].setAttribute("class", "windowHoverActive3");
  //     activeHoverWindow5[6].setAttribute("class", "windowHoverActive5");
  //     activeHoverWindow5[7].setAttribute("class", "windowHoverActive5");
  //   } else if (thRemove.className == activeHoverWindow5[6]) {
  //     activeHoverWindow3[7].setAttribute("class", "windowHoverActive3");
  //     activeHoverWindow3[8].setAttribute("class", "windowHoverActive3");
  //     activeHoverWindow4[7].setAttribute("class", "windowHoverActive4");
  //     activeHoverWindow4[8].setAttribute("class", "windowHoverActive4");
  //   } else if (thRemove.className == activeHoverWindow5[7]) {
  //     activeHoverWindow3[6].setAttribute("class", "windowHoverActive3");
  //     activeHoverWindow3[8].setAttribute("class", "windowHoverActive3");
  //     activeHoverWindow4[6].setAttribute("class", "windowHoverActive4");
  //     activeHoverWindow4[8].setAttribute("class", "windowHoverActive4");
  //   } else if (thRemove.className == activeHoverWindow5[8]) {
  //     activeHoverWindow3[6].setAttribute("class", "windowHoverActive3");
  //     activeHoverWindow3[7].setAttribute("class", "windowHoverActive3");
  //     activeHoverWindow4[6].setAttribute("class", "windowHoverActive4");
  //     activeHoverWindow4[7].setAttribute("class", "windowHoverActive4");
  //   }

  //   else if (thRemove.className == activeHoverWindow6[0]) {
  //     activeHoverWindow7[1].setAttribute("class", "windowHoverActive7");
  //     activeHoverWindow7[2].setAttribute("class", "windowHoverActive7");
  //     activeHoverWindow8[1].setAttribute("class", "windowHoverActive8");
  //     activeHoverWindow8[2].setAttribute("class", "windowHoverActive8");
  //   } else if (thRemove.className == activeHoverWindow6[1]) {
  //     activeHoverWindow7[0].setAttribute("class", "windowHoverActive7");
  //     activeHoverWindow7[2].setAttribute("class", "windowHoverActive7");
  //     activeHoverWindow8[0].setAttribute("class", "windowHoverActive8");
  //     activeHoverWindow8[2].setAttribute("class", "windowHoverActive8");
  //   } else if (thRemove.className == activeHoverWindow6[2]) {
  //     activeHoverWindow7[0].setAttribute("class", "windowHoverActive7");
  //     activeHoverWindow7[1].setAttribute("class", "windowHoverActive7");
  //     activeHoverWindow8[0].setAttribute("class", "windowHoverActive8");
  //     activeHoverWindow8[1].setAttribute("class", "windowHoverActive8");
  //   } else if (thRemove.className == activeHoverWindow7[0]) {
  //     activeHoverWindow6[1].setAttribute("class", "windowHoverActive6");
  //     activeHoverWindow6[2].setAttribute("class", "windowHoverActive6");
  //     activeHoverWindow8[1].setAttribute("class", "windowHoverActive8");
  //     activeHoverWindow8[2].setAttribute("class", "windowHoverActive8");
  //   } else if (thRemove.className == activeHoverWindow7[1]) {
  //     activeHoverWindow6[0].setAttribute("class", "windowHoverActive6");
  //     activeHoverWindow6[2].setAttribute("class", "windowHoverActive6");
  //     activeHoverWindow8[0].setAttribute("class", "windowHoverActive8");
  //     activeHoverWindow8[2].setAttribute("class", "windowHoverActive8");
  //   } else if (thRemove.className == activeHoverWindow7[2]) {
  //     activeHoverWindow6[0].setAttribute("class", "windowHoverActive6");
  //     activeHoverWindow6[1].setAttribute("class", "windowHoverActive6");
  //     activeHoverWindow8[0].setAttribute("class", "windowHoverActive8");
  //     activeHoverWindow8[1].setAttribute("class", "windowHoverActive8");
  //   } else if (thRemove.className == activeHoverWindow8[0]) {
  //     activeHoverWindow6[1].setAttribute("class", "windowHoverActive6");
  //     activeHoverWindow6[2].setAttribute("class", "windowHoverActive6");
  //     activeHoverWindow7[1].setAttribute("class", "windowHoverActive7");
  //     activeHoverWindow7[2].setAttribute("class", "windowHoverActive7");
  //   } else if (thRemove.className == activeHoverWindow8[1]) {
  //     activeHoverWindow6[0].setAttribute("class", "windowHoverActive6");
  //     activeHoverWindow6[2].setAttribute("class", "windowHoverActive6");
  //     activeHoverWindow7[0].setAttribute("class", "windowHoverActive7");
  //     activeHoverWindow7[2].setAttribute("class", "windowHoverActive7");
  //   } else if (thRemove.className == activeHoverWindow8[2]) {
  //     activeHoverWindow6[0].setAttribute("class", "windowHoverActive6");
  //     activeHoverWindow6[1].setAttribute("class", "windowHoverActive6");
  //     activeHoverWindow7[0].setAttribute("class", "windowHoverActive7");
  //     activeHoverWindow7[1].setAttribute("class", "windowHoverActive7");
  //   }
    

  //   else if (thRemove.className == activeHoverWindow6[3]) {
  //     activeHoverWindow7[4].setAttribute("class", "windowHoverActive7");
  //     activeHoverWindow7[5].setAttribute("class", "windowHoverActive7");
  //     activeHoverWindow8[4].setAttribute("class", "windowHoverActive8");
  //     activeHoverWindow8[5].setAttribute("class", "windowHoverActive8");
  //   } else if (thRemove.className == activeHoverWindow6[4]) {
  //     activeHoverWindow7[3].setAttribute("class", "windowHoverActive7");
  //     activeHoverWindow7[5].setAttribute("class", "windowHoverActive7");
  //     activeHoverWindow8[3].setAttribute("class", "windowHoverActive8");
  //     activeHoverWindow8[5].setAttribute("class", "windowHoverActive8");
  //   } else if (thRemove.className == activeHoverWindow6[5]) {
  //     activeHoverWindow7[3].setAttribute("class", "windowHoverActive7");
  //     activeHoverWindow7[4].setAttribute("class", "windowHoverActive7");
  //     activeHoverWindow8[3].setAttribute("class", "windowHoverActive8");
  //     activeHoverWindow8[4].setAttribute("class", "windowHoverActive8");
  //   } else if (thRemove.className == activeHoverWindow7[3]) {
  //     activeHoverWindow6[4].setAttribute("class", "windowHoverActive6");
  //     activeHoverWindow6[5].setAttribute("class", "windowHoverActive6");
  //     activeHoverWindow8[4].setAttribute("class", "windowHoverActive8");
  //     activeHoverWindow8[5].setAttribute("class", "windowHoverActive8");
  //   } else if (thRemove.className == activeHoverWindow7[4]) {
  //     activeHoverWindow6[3].setAttribute("class", "windowHoverActive6");
  //     activeHoverWindow6[5].setAttribute("class", "windowHoverActive6");
  //     activeHoverWindow8[3].setAttribute("class", "windowHoverActive8");
  //     activeHoverWindow8[5].setAttribute("class", "windowHoverActive8");
  //   } else if (thRemove.className == activeHoverWindow7[5]) {
  //     activeHoverWindow6[3].setAttribute("class", "windowHoverActive6");
  //     activeHoverWindow6[4].setAttribute("class", "windowHoverActive6");
  //     activeHoverWindow8[3].setAttribute("class", "windowHoverActive8");
  //     activeHoverWindow8[4].setAttribute("class", "windowHoverActive8");
  //   } else if (thRemove.className == activeHoverWindow8[3]) {
  //     activeHoverWindow6[4].setAttribute("class", "windowHoverActive6");
  //     activeHoverWindow6[5].setAttribute("class", "windowHoverActive6");
  //     activeHoverWindow7[4].setAttribute("class", "windowHoverActive7");
  //     activeHoverWindow7[5].setAttribute("class", "windowHoverActive7");
  //   } else if (thRemove.className == activeHoverWindow8[4]) {
  //     activeHoverWindow6[3].setAttribute("class", "windowHoverActive6");
  //     activeHoverWindow6[5].setAttribute("class", "windowHoverActive6");
  //     activeHoverWindow7[3].setAttribute("class", "windowHoverActive7");
  //     activeHoverWindow7[5].setAttribute("class", "windowHoverActive7");
  //   } else if (thRemove.className == activeHoverWindow8[5]) {
  //     activeHoverWindow6[3].setAttribute("class", "windowHoverActive6");
  //     activeHoverWindow6[4].setAttribute("class", "windowHoverActive6");
  //     activeHoverWindow7[3].setAttribute("class", "windowHoverActive7");
  //     activeHoverWindow7[4].setAttribute("class", "windowHoverActive7");
  //   }


  //   else if (thRemove.className == activeHoverWindow6[6]) {
  //     activeHoverWindow7[7].setAttribute("class", "windowHoverActive7");
  //     activeHoverWindow7[8].setAttribute("class", "windowHoverActive7");
  //     activeHoverWindow8[7].setAttribute("class", "windowHoverActive8");
  //     activeHoverWindow8[8].setAttribute("class", "windowHoverActive8");
  //   } else if (thRemove.className == activeHoverWindow6[7]) {
  //     activeHoverWindow7[6].setAttribute("class", "windowHoverActive7");
  //     activeHoverWindow7[8].setAttribute("class", "windowHoverActive7");
  //     activeHoverWindow8[6].setAttribute("class", "windowHoverActive8");
  //     activeHoverWindow8[8].setAttribute("class", "windowHoverActive8");
  //   } else if (thRemove.className == activeHoverWindow6[8]) {
  //     activeHoverWindow7[6].setAttribute("class", "windowHoverActive7");
  //     activeHoverWindow7[7].setAttribute("class", "windowHoverActive7");
  //     activeHoverWindow8[6].setAttribute("class", "windowHoverActive8");
  //     activeHoverWindow8[7].setAttribute("class", "windowHoverActive8");
  //   } else if (thRemove.className == activeHoverWindow7[6]) {
  //     activeHoverWindow6[7].setAttribute("class", "windowHoverActive6");
  //     activeHoverWindow6[8].setAttribute("class", "windowHoverActive6");
  //     activeHoverWindow8[7].setAttribute("class", "windowHoverActive8");
  //     activeHoverWindow8[8].setAttribute("class", "windowHoverActive8");
  //   } else if (thRemove.className == activeHoverWindow7[7]) {
  //     activeHoverWindow6[6].setAttribute("class", "windowHoverActive6");
  //     activeHoverWindow6[8].setAttribute("class", "windowHoverActive6");
  //     activeHoverWindow8[6].setAttribute("class", "windowHoverActive8");
  //     activeHoverWindow8[8].setAttribute("class", "windowHoverActive8");
  //   } else if (thRemove.className == activeHoverWindow7[8]) {
  //     activeHoverWindow6[6].setAttribute("class", "windowHoverActive6");
  //     activeHoverWindow6[7].setAttribute("class", "windowHoverActive6");
  //     activeHoverWindow8[6].setAttribute("class", "windowHoverActive8");
  //     activeHoverWindow8[7].setAttribute("class", "windowHoverActive8");
  //   } else if (thRemove.className == activeHoverWindow8[6]) {
  //     activeHoverWindow6[7].setAttribute("class", "windowHoverActive6");
  //     activeHoverWindow6[8].setAttribute("class", "windowHoverActive6");
  //     activeHoverWindow7[7].setAttribute("class", "windowHoverActive7");
  //     activeHoverWindow7[8].setAttribute("class", "windowHoverActive7");
  //   } else if (thRemove.className == activeHoverWindow8[7]) {
  //     activeHoverWindow6[6].setAttribute("class", "windowHoverActive6");
  //     activeHoverWindow6[8].setAttribute("class", "windowHoverActive6");
  //     activeHoverWindow7[6].setAttribute("class", "windowHoverActive7");
  //     activeHoverWindow7[8].setAttribute("class", "windowHoverActive7");
  //   } else if (thRemove.className == activeHoverWindow8[8]) {
  //     activeHoverWindow6[6].setAttribute("class", "windowHoverActive6");
  //     activeHoverWindow6[7].setAttribute("class", "windowHoverActive6");
  //     activeHoverWindow7[6].setAttribute("class", "windowHoverActive7");
  //     activeHoverWindow7[7].setAttribute("class", "windowHoverActive7");
  //   }
  // }

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
        break;
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


