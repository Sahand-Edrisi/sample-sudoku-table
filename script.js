let _sudokuPuzzle;
let _sudokuPuzzleGrid;
let _sudokuPuzzleSolved;
let _sudokuPuzzleSolvedGrid;

let _classIndexOne;
let _classIndexTwo;
let _input;

function generateSudoku(difficulty) {
  _sudokuPuzzle = sudoku.generate(difficulty);
  _sudokuPuzzleGrid = sudoku.board_string_to_grid(_sudokuPuzzle);
}

function solves() {
  _sudokuPuzzleSolved = sudoku.solve(_sudokuPuzzle);
  _sudokuPuzzleSolvedGrid = sudoku.board_string_to_grid(_sudokuPuzzleSolved);
}

function input(event) {
  let input = event.currentTarget;
  _classIndexOne = input.parentElement.classList[0][0];
  _classIndexTwo = input.parentElement.classList[0][1];
  _input = input;
}

function solveInput(event) {
  let input = event.currentTarget;
  switch (event.keyCode) {
    case 97:
      input.value = "1";
      break;
    case 97:
      input.value = "1";
      break;
    case 98:
      input.value = "2";
      break;
    case 99:
      input.value = "3";
      break;
    case 100:
      input.value = "4";
      break;
    case 101:
      input.value = "5";
      break;
    case 102:
      input.value = "6";
      break;
    case 103:
      input.value = "7";
      break;
    case 104:
      input.value = "8";
      break;
    case 105:
      input.value = "9";
      break;
    case 49:
      input.value = "1";
      break;
    case 50:
      input.value = "2";
      break;
    case 51:
      input.value = "3";
      break;
    case 52:
      input.value = "4";
      break;
    case 53:
      input.value = "5";
      break;
    case 54:
      input.value = "6";
      break;
    case 55:
      input.value = "7";
      break;
    case 56:
      input.value = "8";
      break;
    case 57:
      input.value = "9";
      break;
    default:
      input.value = " ";
  }

  if (input.value == _sudokuPuzzleSolvedGrid[_classIndexOne][_classIndexTwo]) {
    input.style = "color:green";
  } else {
    input.style = "color:red";
  }
}

function clearTable() {
  document.getElementById("table").innerHTML = "";
}

// addEventListener Button Numbers
function addEventOnClickToButtons() {
  let numberButton = document.querySelectorAll("#number");
  for (let i = 0; i < numberButton.length; i++) {
    numberButton[i].addEventListener("click", () =>
      addButtonNumberInInputValue(event)
    );
  }
}

function addButtonNumberInInputValue(event) {
  let buttonNumbers = event.currentTarget;
  _input.value = buttonNumbers.innerHTML;
  if (_input.value == _sudokuPuzzleSolvedGrid[_classIndexOne][_classIndexTwo]) {
    _input.style = "color:green";
  } else {
    _input.style = "color:red";
  }
}

function createTable() {
  for (i = 0; i < 9; i++) {
    let tr = document.createElement("tr");
    tr.setAttribute("onclick", "RowHoverActive(event)");
    tr.setAttribute("class", "rowTr" + [i]);
    let row = table.appendChild(tr);
    let numIndex = _sudokuPuzzleGrid[i];
    for (let j = 0; j < 9; j++) {
      if (numIndex[j] == ".") {
        row.innerHTML += `<th onclick="ColumnHoverActive(event)" class="${
          [i] + [j]
        }"><input pattern="[0-9]" inputMode='none' type="text" maxLength="1" onkeydown="solveInput(event)" onclick="input(event)"> ${(numIndex[
          j
        ] = "")}
        </input>
            </th>
            `;
      } else {
        row.innerHTML += `<th onclick="ColumnHoverActive(event)" lass="${
          [i] + [j]
        }">${numIndex[j]}</th>`;
      }
    }
  }
}

// add Class And Id To Th

function addClassAndIdToTh() {
  let rowTr0 = document.querySelector(".rowTr0").children;
  let rowTr1 = document.querySelector(".rowTr1").children;
  let rowTr2 = document.querySelector(".rowTr2").children;
  let rowTr3 = document.querySelector(".rowTr3").children;
  let rowTr4 = document.querySelector(".rowTr4").children;
  let rowTr5 = document.querySelector(".rowTr5").children;
  let rowTr6 = document.querySelector(".rowTr6").children;
  let rowTr7 = document.querySelector(".rowTr7").children;
  let rowTr8 = document.querySelector(".rowTr8").children;
  for (let i = 0; i < 9; i++) {
    rowTr0[i].setAttribute("id", "colTh" + [i]);
    rowTr1[i].setAttribute("id", "colTh" + [i]);
    rowTr2[i].setAttribute("id", "colTh" + [i]);
    rowTr3[i].setAttribute("id", "colTh" + [i]);
    rowTr4[i].setAttribute("id", "colTh" + [i]);
    rowTr5[i].setAttribute("id", "colTh" + [i]);
    rowTr6[i].setAttribute("id", "colTh" + [i]);
    rowTr7[i].setAttribute("id", "colTh" + [i]);
    rowTr8[i].setAttribute("id", "colTh" + [i]);
  }
}

function ThBorderInsideTable() {
  let colTh0 = document.querySelectorAll("#colTh0");
  let colTh8 = document.querySelectorAll("#colTh8");

  let rowTr0 = document.querySelector(".rowTr0").children;
  let rowTr8 = document.querySelector(".rowTr8").children;

  for (let i = 1; i < 8; i++) {
    rowTr0[i].style = "border-top:0px";
    colTh0[i].style = "border-left:0px";
    rowTr8[i].style = "border-bottom:0px";
    colTh8[i].style = "border-right:0px";
  }

  colTh0[0].style = "border-top:0px ; border-left:0px";
  colTh0[8].style = "border-bottom:0px ; border-left:0px";

  colTh8[0].style = "border-top:0px ; border-right:0px";
  colTh8[8].style = "border-bottom:0px ; border-right:0px";
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
      activeHoverWindow();
    } else {
      InactiveThHover();
      activeThHover();
      activeHoverWindow();
    }
  }

  function activeHoverWindow() {
    let th = document.querySelectorAll("th");
    switch (thAdd) {
      // window 1
      //row 1
      case th[0]:
        th[10].setAttribute("id", "hoverTh1");
        th[11].setAttribute("id", "hoverTh2");
        th[19].setAttribute("id", "hoverTh1");
        th[20].setAttribute("id", "hoverTh2");
        break;
      case th[1]:
        th[9].setAttribute("id", "hoverTh0");
        th[11].setAttribute("id", "hoverTh2");
        th[18].setAttribute("id", "hoverTh0");
        th[20].setAttribute("id", "hoverTh2");
        break;
      case th[2]:
        th[9].setAttribute("id", "hoverTh0");
        th[10].setAttribute("id", "hoverTh1");
        th[18].setAttribute("id", "hoverTh0");
        th[19].setAttribute("id", "hoverTh1");
        break;
      //row 2
      case th[9]:
        th[1].setAttribute("id", "hoverTh1");
        th[2].setAttribute("id", "hoverTh2");
        th[19].setAttribute("id", "hoverTh1");
        th[20].setAttribute("id", "hoverTh2");
        break;
      case th[10]:
        th[0].setAttribute("id", "hoverTh0");
        th[2].setAttribute("id", "hoverTh2");
        th[18].setAttribute("id", "hoverTh0");
        th[20].setAttribute("id", "hoverTh2");
        break;
      case th[11]:
        th[0].setAttribute("id", "hoverTh0");
        th[1].setAttribute("id", "hoverTh1");
        th[18].setAttribute("id", "hoverTh0");
        th[19].setAttribute("id", "hoverTh1");
        break;
      //row 3
      case th[18]:
        th[1].setAttribute("id", "hoverTh1");
        th[2].setAttribute("id", "hoverTh2");
        th[10].setAttribute("id", "hoverTh1");
        th[11].setAttribute("id", "hoverTh2");
        break;
      case th[19]:
        th[0].setAttribute("id", "hoverTh0");
        th[2].setAttribute("id", "hoverTh2");
        th[9].setAttribute("id", "hoverTh0");
        th[11].setAttribute("id", "hoverTh2");
        break;
      case th[20]:
        th[0].setAttribute("id", "hoverTh0");
        th[1].setAttribute("id", "hoverTh1");
        th[9].setAttribute("id", "hoverTh0");
        th[10].setAttribute("id", "hoverTh1");
        break;
      // window 2
      //row 1
      case th[3]:
        th[13].setAttribute("id", "hoverTh4");
        th[14].setAttribute("id", "hoverTh5");
        th[22].setAttribute("id", "hoverTh4");
        th[23].setAttribute("id", "hoverTh5");
        break;
      case th[4]:
        th[12].setAttribute("id", "hoverTh3");
        th[14].setAttribute("id", "hoverTh5");
        th[21].setAttribute("id", "hoverTh3");
        th[23].setAttribute("id", "hoverTh5");
        break;
      case th[5]:
        th[12].setAttribute("id", "hoverTh3");
        th[13].setAttribute("id", "hoverTh4");
        th[21].setAttribute("id", "hoverTh3");
        th[22].setAttribute("id", "hoverTh4");
        break;
      //row 2
      case th[12]:
        th[4].setAttribute("id", "hoverTh4");
        th[5].setAttribute("id", "hoverTh5");
        th[22].setAttribute("id", "hoverTh4");
        th[23].setAttribute("id", "hoverTh5");
        break;
      case th[13]:
        th[3].setAttribute("id", "hoverTh3");
        th[5].setAttribute("id", "hoverTh5");
        th[21].setAttribute("id", "hoverTh3");
        th[23].setAttribute("id", "hoverTh5");
        break;
      case th[14]:
        th[3].setAttribute("id", "hoverTh3");
        th[4].setAttribute("id", "hoverTh4");
        th[21].setAttribute("id", "hoverTh3");
        th[22].setAttribute("id", "hoverTh4");
        break;
      //row 3
      case th[21]:
        th[13].setAttribute("id", "hoverTh4");
        th[14].setAttribute("id", "hoverTh5");
        th[4].setAttribute("id", "hoverTh4");
        th[5].setAttribute("id", "hoverTh5");
        break;
      case th[22]:
        th[12].setAttribute("id", "hoverTh3");
        th[14].setAttribute("id", "hoverTh5");
        th[3].setAttribute("id", "hoverTh3");
        th[5].setAttribute("id", "hoverTh5");
        break;
      case th[23]:
        th[12].setAttribute("id", "hoverTh3");
        th[13].setAttribute("id", "hoverTh4");
        th[3].setAttribute("id", "hoverTh3");
        th[4].setAttribute("id", "hoverTh4");
        break;

      // window 3
      //row 1
      case th[6]:
        th[16].setAttribute("id", "hoverTh7");
        th[17].setAttribute("id", "hoverTh8");
        th[25].setAttribute("id", "hoverTh7");
        th[26].setAttribute("id", "hoverTh8");
        break;
      case th[7]:
        th[15].setAttribute("id", "hoverTh6");
        th[17].setAttribute("id", "hoverTh8");
        th[24].setAttribute("id", "hoverTh6");
        th[26].setAttribute("id", "hoverTh8");
        break;
      case th[8]:
        th[15].setAttribute("id", "hoverTh6");
        th[16].setAttribute("id", "hoverTh7");
        th[24].setAttribute("id", "hoverTh6");
        th[25].setAttribute("id", "hoverTh7");
        break;
      //row 2
      case th[15]:
        th[7].setAttribute("id", "hoverTh7");
        th[8].setAttribute("id", "hoverTh8");
        th[25].setAttribute("id", "hoverTh7");
        th[26].setAttribute("id", "hoverTh8");
        break;
      case th[16]:
        th[6].setAttribute("id", "hoverTh6");
        th[8].setAttribute("id", "hoverTh8");
        th[24].setAttribute("id", "hoverTh6");
        th[26].setAttribute("id", "hoverTh8");
        break;
      case th[17]:
        th[6].setAttribute("id", "hoverTh6");
        th[7].setAttribute("id", "hoverTh7");
        th[24].setAttribute("id", "hoverTh6");
        th[25].setAttribute("id", "hoverTh7");
        break;
      //row 3
      case th[24]:
        th[16].setAttribute("id", "hoverTh7");
        th[17].setAttribute("id", "hoverTh8");
        th[7].setAttribute("id", "hoverTh7");
        th[8].setAttribute("id", "hoverTh8");
        break;
      case th[25]:
        th[15].setAttribute("id", "hoverTh6");
        th[17].setAttribute("id", "hoverTh8");
        th[6].setAttribute("id", "hoverTh6");
        th[8].setAttribute("id", "hoverTh8");
        break;
      case th[26]:
        th[15].setAttribute("id", "hoverTh6");
        th[16].setAttribute("id", "hoverTh7");
        th[6].setAttribute("id", "hoverTh6");
        th[7].setAttribute("id", "hoverTh7");
        break;
      // window 4
      //row 1
      case th[27]:
        th[37].setAttribute("id", "hoverTh1");
        th[38].setAttribute("id", "hoverTh2");
        th[46].setAttribute("id", "hoverTh1");
        th[47].setAttribute("id", "hoverTh2");
        break;
      case th[28]:
        th[36].setAttribute("id", "hoverTh0");
        th[38].setAttribute("id", "hoverTh2");
        th[45].setAttribute("id", "hoverTh0");
        th[47].setAttribute("id", "hoverTh2");
        break;
      case th[29]:
        th[36].setAttribute("id", "hoverTh0");
        th[37].setAttribute("id", "hoverTh1");
        th[45].setAttribute("id", "hoverTh0");
        th[46].setAttribute("id", "hoverTh1");
        break;
      //row 2
      case th[36]:
        th[28].setAttribute("id", "hoverTh1");
        th[29].setAttribute("id", "hoverTh2");
        th[46].setAttribute("id", "hoverTh1");
        th[47].setAttribute("id", "hoverTh2");
        break;
      case th[37]:
        th[27].setAttribute("id", "hoverTh0");
        th[29].setAttribute("id", "hoverTh2");
        th[45].setAttribute("id", "hoverTh0");
        th[47].setAttribute("id", "hoverTh2");
        break;
      case th[38]:
        th[27].setAttribute("id", "hoverTh0");
        th[28].setAttribute("id", "hoverTh1");
        th[45].setAttribute("id", "hoverTh0");
        th[46].setAttribute("id", "hoverTh1");
        break;
      //row 3
      case th[45]:
        th[28].setAttribute("id", "hoverTh1");
        th[29].setAttribute("id", "hoverTh2");
        th[37].setAttribute("id", "hoverTh1");
        th[38].setAttribute("id", "hoverTh2");
        break;
      case th[46]:
        th[27].setAttribute("id", "hoverTh0");
        th[29].setAttribute("id", "hoverTh2");
        th[36].setAttribute("id", "hoverTh0");
        th[38].setAttribute("id", "hoverTh2");
        break;
      case th[47]:
        th[27].setAttribute("id", "hoverTh0");
        th[28].setAttribute("id", "hoverTh1");
        th[36].setAttribute("id", "hoverTh0");
        th[37].setAttribute("id", "hoverTh1");
        break;
      // window 5
      //row 1
      case th[30]:
        th[40].setAttribute("id", "hoverTh4");
        th[41].setAttribute("id", "hoverTh5");
        th[49].setAttribute("id", "hoverTh4");
        th[50].setAttribute("id", "hoverTh5");
        break;
      case th[31]:
        th[39].setAttribute("id", "hoverTh3");
        th[41].setAttribute("id", "hoverTh5");
        th[48].setAttribute("id", "hoverTh3");
        th[50].setAttribute("id", "hoverTh5");
        break;
      case th[32]:
        th[39].setAttribute("id", "hoverTh3");
        th[40].setAttribute("id", "hoverTh4");
        th[48].setAttribute("id", "hoverTh3");
        th[49].setAttribute("id", "hoverTh4");
        break;
      //row 2
      case th[39]:
        th[31].setAttribute("id", "hoverTh4");
        th[32].setAttribute("id", "hoverTh5");
        th[49].setAttribute("id", "hoverTh4");
        th[50].setAttribute("id", "hoverTh5");
        break;
      case th[40]:
        th[30].setAttribute("id", "hoverTh3");
        th[32].setAttribute("id", "hoverTh5");
        th[48].setAttribute("id", "hoverTh3");
        th[50].setAttribute("id", "hoverTh5");
        break;
      case th[41]:
        th[30].setAttribute("id", "hoverTh3");
        th[31].setAttribute("id", "hoverTh4");
        th[48].setAttribute("id", "hoverTh3");
        th[49].setAttribute("id", "hoverTh4");
        break;
      //row 3
      case th[48]:
        th[31].setAttribute("id", "hoverTh4");
        th[32].setAttribute("id", "hoverTh5");
        th[40].setAttribute("id", "hoverTh4");
        th[41].setAttribute("id", "hoverTh5");
        break;
      case th[49]:
        th[30].setAttribute("id", "hoverTh3");
        th[32].setAttribute("id", "hoverTh5");
        th[39].setAttribute("id", "hoverTh3");
        th[41].setAttribute("id", "hoverTh5");
        break;
      case th[50]:
        th[30].setAttribute("id", "hoverTh3");
        th[31].setAttribute("id", "hoverTh4");
        th[39].setAttribute("id", "hoverTh3");
        th[40].setAttribute("id", "hoverTh4");
        break;

      // window 6
      //row 1
      case th[33]:
        th[43].setAttribute("id", "hoverTh7");
        th[44].setAttribute("id", "hoverTh8");
        th[52].setAttribute("id", "hoverTh7");
        th[53].setAttribute("id", "hoverTh8");
        break;
      case th[34]:
        th[42].setAttribute("id", "hoverTh6");
        th[44].setAttribute("id", "hoverTh8");
        th[51].setAttribute("id", "hoverTh6");
        th[53].setAttribute("id", "hoverTh8");
        break;
      case th[35]:
        th[42].setAttribute("id", "hoverTh6");
        th[43].setAttribute("id", "hoverTh7");
        th[51].setAttribute("id", "hoverTh6");
        th[52].setAttribute("id", "hoverTh7");
        break;
      //row 2
      case th[42]:
        th[34].setAttribute("id", "hoverTh7");
        th[35].setAttribute("id", "hoverTh8");
        th[52].setAttribute("id", "hoverTh7");
        th[53].setAttribute("id", "hoverTh8");
        break;
      case th[43]:
        th[33].setAttribute("id", "hoverTh6");
        th[35].setAttribute("id", "hoverTh8");
        th[51].setAttribute("id", "hoverTh6");
        th[53].setAttribute("id", "hoverTh8");
        break;
      case th[44]:
        th[33].setAttribute("id", "hoverTh6");
        th[34].setAttribute("id", "hoverTh7");
        th[51].setAttribute("id", "hoverTh6");
        th[52].setAttribute("id", "hoverTh7");
        break;
      //row 3
      case th[51]:
        th[34].setAttribute("id", "hoverTh7");
        th[35].setAttribute("id", "hoverTh8");
        th[43].setAttribute("id", "hoverTh7");
        th[44].setAttribute("id", "hoverTh8");
        break;
      case th[52]:
        th[33].setAttribute("id", "hoverTh6");
        th[35].setAttribute("id", "hoverTh8");
        th[42].setAttribute("id", "hoverTh6");
        th[44].setAttribute("id", "hoverTh8");
        break;
      case th[53]:
        th[33].setAttribute("id", "hoverTh6");
        th[34].setAttribute("id", "hoverTh7");
        th[42].setAttribute("id", "hoverTh6");
        th[43].setAttribute("id", "hoverTh7");
        break;

      // window 7
      //row 1
      case th[54]:
        th[64].setAttribute("id", "hoverTh1");
        th[65].setAttribute("id", "hoverTh2");
        th[73].setAttribute("id", "hoverTh1");
        th[74].setAttribute("id", "hoverTh2");
        break;
      case th[55]:
        th[63].setAttribute("id", "hoverTh0");
        th[65].setAttribute("id", "hoverTh2");
        th[72].setAttribute("id", "hoverTh0");
        th[74].setAttribute("id", "hoverTh2");
        break;
      //row 2
      case th[56]:
        th[63].setAttribute("id", "hoverTh0");
        th[64].setAttribute("id", "hoverTh1");
        th[72].setAttribute("id", "hoverTh0");
        th[73].setAttribute("id", "hoverTh1");
        break;
      case th[63]:
        th[55].setAttribute("id", "hoverTh1");
        th[56].setAttribute("id", "hoverTh2");
        th[73].setAttribute("id", "hoverTh1");
        th[74].setAttribute("id", "hoverTh2");
        break;
      case th[64]:
        th[54].setAttribute("id", "hoverTh0");
        th[56].setAttribute("id", "hoverTh2");
        th[72].setAttribute("id", "hoverTh0");
        th[74].setAttribute("id", "hoverTh2");
        break;
      case th[65]:
        th[54].setAttribute("id", "hoverTh0");
        th[55].setAttribute("id", "hoverTh1");
        th[72].setAttribute("id", "hoverTh0");
        th[73].setAttribute("id", "hoverTh1");
        break;
      //row 3
      case th[72]:
        th[55].setAttribute("id", "hoverTh1");
        th[56].setAttribute("id", "hoverTh2");
        th[64].setAttribute("id", "hoverTh1");
        th[65].setAttribute("id", "hoverTh2");
        break;
      case th[73]:
        th[54].setAttribute("id", "hoverTh0");
        th[56].setAttribute("id", "hoverTh2");
        th[63].setAttribute("id", "hoverTh0");
        th[65].setAttribute("id", "hoverTh2");
        break;
      case th[74]:
        th[54].setAttribute("id", "hoverTh0");
        th[55].setAttribute("id", "hoverTh1");
        th[63].setAttribute("id", "hoverTh0");
        th[64].setAttribute("id", "hoverTh1");
        break;
      // window 8
      //row1
      case th[57]:
        th[67].setAttribute("id", "hoverTh4");
        th[68].setAttribute("id", "hoverTh5");
        th[76].setAttribute("id", "hoverTh4");
        th[77].setAttribute("id", "hoverTh5");
        break;
      case th[58]:
        th[66].setAttribute("id", "hoverTh3");
        th[68].setAttribute("id", "hoverTh5");
        th[75].setAttribute("id", "hoverTh3");
        th[77].setAttribute("id", "hoverTh5");
        break;
      case th[59]:
        th[66].setAttribute("id", "hoverTh3");
        th[67].setAttribute("id", "hoverTh4");
        th[75].setAttribute("id", "hoverTh3");
        th[76].setAttribute("id", "hoverTh4");
        break;
      //row2
      case th[66]:
        th[58].setAttribute("id", "hoverTh4");
        th[59].setAttribute("id", "hoverTh5");
        th[76].setAttribute("id", "hoverTh4");
        th[77].setAttribute("id", "hoverTh5");
        break;
      case th[67]:
        th[57].setAttribute("id", "hoverTh3");
        th[59].setAttribute("id", "hoverTh5");
        th[75].setAttribute("id", "hoverTh3");
        th[77].setAttribute("id", "hoverTh5");
        break;
      case th[68]:
        th[57].setAttribute("id", "hoverTh3");
        th[58].setAttribute("id", "hoverTh4");
        th[75].setAttribute("id", "hoverTh3");
        th[76].setAttribute("id", "hoverTh4");
        break;
      //row3
      case th[75]:
        th[58].setAttribute("id", "hoverTh4");
        th[59].setAttribute("id", "hoverTh5");
        th[67].setAttribute("id", "hoverTh4");
        th[68].setAttribute("id", "hoverTh5");
        break;
      case th[76]:
        th[57].setAttribute("id", "hoverTh3");
        th[59].setAttribute("id", "hoverTh5");
        th[66].setAttribute("id", "hoverTh3");
        th[68].setAttribute("id", "hoverTh5");
        break;
      case th[77]:
        th[57].setAttribute("id", "hoverTh3");
        th[58].setAttribute("id", "hoverTh4");
        th[66].setAttribute("id", "hoverTh3");
        th[67].setAttribute("id", "hoverTh4");
        break;

      // window 9
      //row 1
      case th[60]:
        th[70].setAttribute("id", "hoverTh7");
        th[71].setAttribute("id", "hoverTh8");
        th[79].setAttribute("id", "hoverTh7");
        th[80].setAttribute("id", "hoverTh8");
        break;
      case th[61]:
        th[69].setAttribute("id", "hoverTh6");
        th[71].setAttribute("id", "hoverTh8");
        th[78].setAttribute("id", "hoverTh6");
        th[80].setAttribute("id", "hoverTh8");
        break;
      case th[62]:
        th[69].setAttribute("id", "hoverTh6");
        th[70].setAttribute("id", "hoverTh7");
        th[78].setAttribute("id", "hoverTh6");
        th[79].setAttribute("id", "hoverTh7");
        break;
      //row 2
      case th[69]:
        th[61].setAttribute("id", "hoverTh7");
        th[62].setAttribute("id", "hoverTh8");
        th[79].setAttribute("id", "hoverTh7");
        th[80].setAttribute("id", "hoverTh8");
        break;
      case th[70]:
        th[60].setAttribute("id", "hoverTh6");
        th[62].setAttribute("id", "hoverTh8");
        th[78].setAttribute("id", "hoverTh6");
        th[80].setAttribute("id", "hoverTh8");
        break;
      case th[71]:
        th[60].setAttribute("id", "hoverTh6");
        th[61].setAttribute("id", "hoverTh7");
        th[78].setAttribute("id", "hoverTh6");
        th[79].setAttribute("id", "hoverTh7");
        break;
      //row 3
      case th[78]:
        th[61].setAttribute("id", "hoverTh7");
        th[62].setAttribute("id", "hoverTh8");
        th[70].setAttribute("id", "hoverTh7");
        th[71].setAttribute("id", "hoverTh8");
        break;
      case th[79]:
        th[60].setAttribute("id", "hoverTh6");
        th[62].setAttribute("id", "hoverTh8");
        th[69].setAttribute("id", "hoverTh6");
        th[71].setAttribute("id", "hoverTh8");
        break;
      case th[80]:
        th[60].setAttribute("id", "hoverTh6");
        th[61].setAttribute("id", "hoverTh7");
        th[69].setAttribute("id", "hoverTh6");
        th[70].setAttribute("id", "hoverTh7");
        break;
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

function init(difficulty) {
  clearTable();
  generateSudoku(difficulty);
  solves();
  createTable();
  addEventOnClickToButtons();
  addClassAndIdToTh();
  ThBorderInsideTable();
}

init("easy");