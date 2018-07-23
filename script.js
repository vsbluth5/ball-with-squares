let myContainer = document.querySelector('#container');
console.log(myContainer);
const mySphere = document.querySelector('#ball');
const squareDiv = document.querySelector('#squares')

let y = 1.5;

mySphere.addEventListener('click', addbox);

function addbox() {
    console.log("sphere clicked");
    y += 1;
    // mySphere.setAttribute('scale', { x: 1, y: 2, z: 3 })
    
    squareDiv.innerHTML += `<a-box color="red" depth="0.5" height="0.5" width="0.5" position="0 ${y} -5"></a-box>`;
    
    // let newBox = document.createElement('a-box');
    // newBox.setAttribute('color', "red");
    // newBox.setAttribute('depth', "0.5");
    // newBox.setAttribute('height', "0.5");
    // newBox.setAttribute('width', "0.5");
    // newBox.setAttribute('position', "0 "+y+" -5");
    // myContainer.appendChild(newBox);
    
    console.log(myContainer);
}
