const inputVal = document.getElementById('login')
const pELement = document.getElementById('p1');
const button = document.getElementById('loginBut');


function output() {
    pELement.innerText = inputVal.value;
}
inputVal.oninput = output;



const color = document.getElementById('colorBut');
const bodyColor = document.querySelector("body");
function changeBackground() {
    bodyColor.classList.toggle("purple");
}
color.addEventListener("click", changeBackground);



const buttonT = document.getElementById('buttonT');
const area = document.getElementById('testArea');

function test() {
    area.innerHTML = "Hello friend!";
}

buttonT.addEventListener("click", test);