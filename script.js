// create grid
function createGrid(number) {
  const gridContainer = document.querySelector(".grid-container");
  gridContainer.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${number}, 1fr)`;
  for (let i = 1; i <= number*number; i++) {
      let div = document.createElement("div");
      div.classList.add("grid-box")
      gridContainer.appendChild(div);
  }
  document.querySelector(".grid").textContent = `${number}x${number}`;
}

// change color 
function changeColor(e){
  e.target.style.backgroundColor = "black";
}

// reset grid function
function resetGrid(){
  let num = prompt("Enter grid size less than or equal to 100:");
  if (num === undefined || num === null || num === "") {
      return;
  }
// prompt user if enters >100
  while (num > 100){
      num = prompt("Number too big! Enter grid size less than or equal to 100:");
  }

  const gridContainer = document.querySelector(".grid-container");
  while (gridContainer.hasChildNodes()) {
      gridContainer.removeChild(gridContainer.firstChild);
  }
  createGrid(num);
  let gridBoxList = document.querySelectorAll(".grid-box");
  gridBoxList.forEach(gridBox => {gridBox.addEventListener("mouseover", changeColor)});
}
// clear grid function
function clearGrid(){
  let gridBoxList = document.querySelectorAll(".grid-box");
  gridBoxList.forEach(gridBox => {gridBox.style.backgroundColor = null});
}

let gridNumber = 16;
createGrid(gridNumber);
let gridBoxList = document.querySelectorAll(".grid-box");
gridBoxList.forEach(gridBox => {gridBox.addEventListener("mouseover", changeColor)});

const clearButton = document.querySelector(".clear-button");
const resetButton = document.querySelector(".reset-button");

clearButton.addEventListener("click", clearGrid);
resetButton.addEventListener("click", resetGrid);
