
// When size is submitted by the user, call makeGrid()

function makeGrid(pixCanvas) {
    const widthValue = document.getElementById("inputWidth").value;
    const heightValue = document.getElementById("inputHeight").value;
    let row;
    let rowThis;
    let col;
    for(let i = 0;i<heightValue;i++){
        row = document.createElement('tr');
        pixCanvas.appendChild(row);
        for(let j = 0;j<widthValue;j++){
            rowThis = pixCanvas.lastChild;
            col = document.createElement('td');
            rowThis.appendChild(col);
            col.addEventListener("click", function(event){
                const colorValue = document.getElementById("colorPicker").value;
                event.target.style.backgroundColor = colorValue; 
            });
        }
    }
}

function removeGrid(pixCanvas) {
    const heightValue = document.getElementById("inputHeight").value;
    let ele = pixCanvas.firstElementChild;
    while(ele){   
        ele.remove();
        ele = pixCanvas.firstElementChild;
    }
}

document.addEventListener("submit",function(event) {
    event.preventDefault();
    const pixCanvas = document.querySelector('#pixelCanvas');
    removeGrid(pixCanvas);
    makeGrid(pixCanvas);
});


