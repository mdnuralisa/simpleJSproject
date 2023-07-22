function paint(color) {
    console.log(color);
    const circle = document.getElementById('circleID');
    circle.style = `background-color:${color}`;
    console.log(circle);
}

// function random(){
//     const randomColor = Math.floor(Math.random()*16777215).toString(16);
//     randomColor.style = `background-color:${"#" + randomColor}`;
// }
function randomized(){
    const circle = document.getElementById('circleID');
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    circle.style = `background-color:${"#" + randomColor}`;
    console.log(circle);
}