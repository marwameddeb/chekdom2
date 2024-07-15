window.addEventListener('DOMContentLoaded', (event) => {
 document.getElementById('change-color-btn').onclick = function() {
        alert("DOMContentLoaded ");
    };
});

window.addEventListener('change-color-btn', (event) => {
document.getElementById("change-color-btn").innerHTML=function select() {
    var x = document.getElementById("color-box").length;
    var y = document.getElementById("change-color-btn").length;
    document.getElementById("demo").innerHTML = x+y;
}
})

window.addEventListener('change-color-btn', (event) => {
document.getElementById("change-color-btn").innerHTML=function getRandomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
})



function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * cd )];
    }
    return color;
}

document.getElementById('change-color-btn').addEventListener('click', function() {
    var colorBox = document.getElementById('change-color-btn');
    var randomColor = getRandomColor();
    colorBox.style.backgroundColor = randomColor;
    console.log(randomColor);
});