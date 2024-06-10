function createGrid(rows, columns) {
    const gridContainer = document.createElement('div');
    gridContainer.style.display = 'flex';
    gridContainer.style.flexWrap = 'wrap';
  
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        const cell = document.createElement('div');
        cell.setAttribute('style', 'border: black solid 1px; background: lightgreen; height: 25px; width: 24px;');

        function hoverColors(){
            const colors  = ['pink', 'red', 'green', 'yellow', 'black', 'lightgreen', 'lightgrey', 'lightpink', 'maroon', 'blue','lightblue', 'aqua', 'orange'];
            const numberOfColor = Math.floor(Math.random()* colors.length);
            
            return colors[numberOfColor];
         }
 
       cell.addEventListener('mouseover', function(){
            this.style.background = hoverColors();
        });

        cell.addEventListener('mouseout', function(){
            this.style.background = hoverColors();
        });   
        
 
        
        gridContainer.appendChild(cell);
      }
    }
  
    return gridContainer;
  };

  const mainContainer = document.querySelector('.main');
  mainContainer.appendChild(createGrid(20, 20)); 
  
  


 


 
 
  
