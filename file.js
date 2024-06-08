function createGrid(rows, columns) {
    const gridContainer = document.createElement('div');
    gridContainer.style.display = 'flex';
    gridContainer.style.flexWrap = 'wrap';
  
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        const cell = document.createElement('div');
        cell.setAttribute('style', 'border: black solid 1px; background: lightgreen; height: 25px; width: 24px;');
        cell.addEventListener('mouseover', function(){
            this.style.background = 'lightpink';
        });

        cell.addEventListener('mouseout', function(){
            this.style.background = 'lightpink';
        });

        gridContainer.appendChild(cell);
      }
    }
  
    return gridContainer;
  };

  const mainContainer = document.querySelector('.main');
  mainContainer.appendChild(createGrid(20, 20)); 
 // mainContainer.setAttribute('style', 'border:none;')

 


 
 
  
