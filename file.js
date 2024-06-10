function createGrid(rows, columns) {
  const gridContainer = document.createElement("div");
  gridContainer.style.display = "flex";
  gridContainer.style.flexWrap = "wrap";
  gridContainer.style.flexDirection = 'row';
  

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const cell = document.createElement("div");
      cell.classList.add('grid-cell')
      cell.style.border = '1px solid black';
      cell.style.height = '25px'
      cell.style.width = '24px';
      cell.style.justifyContent = 'center';
      cell.style.alignItems = 'center';


      cell.addEventListener('mouseover', function(){
        this.style.background = 'black';
      })

      gridContainer.appendChild(cell);
    }
  }

  return gridContainer;
}

const mainContainer = document.querySelector(".main");
mainContainer.appendChild(createGrid(16, 16)); 

const buttonGridSize = document.getElementById("gridSize");
buttonGridSize.textContent = "Change size";
buttonGridSize.addEventListener('click', function(event) {
    event.preventDefault(); 
    const newSize = parseInt(prompt("Choose a grid dimension (1-100): "));
  
    if (isNaN(newSize) || newSize < 1 || newSize > 100) {
      alert("Invalid input. Try another one ...");
      return;
    }
  
    const mainContainer = document.querySelector(".main");
    mainContainer.innerHTML = '';
  
    const gridContainerNew = createGrid(newSize, newSize); 
    mainContainer.appendChild(gridContainerNew);
  });
  

const rainbowGrid = document.getElementById("rainbow");
function hoverColors() {
    const colors = [
      "pink",
      "red",
      "green",
      "yellow",
      "black",
      "lightgreen",
      "lightgrey",
      "lightpink",
      "maroon",
      "blue",
      "lightblue",
      "aqua",
      "orange",
    ];
    const numberOfColor = Math.floor(Math.random() * colors.length);

    return colors[numberOfColor];
  }

rainbowGrid.textContent = 'colorful';

rainbowGrid.addEventListener('click', function() {
    const gridContainer = document.querySelector('.main'); 
    const gridCells = gridContainer.querySelectorAll('.grid-cell');
  
    for (let cell of gridCells) {
      cell.addEventListener('mouseover', function(){
        this.style.background = hoverColors();
      });
    }
  });
  

