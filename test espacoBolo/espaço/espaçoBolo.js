var menuLine = document.getElementById("menuLine");
var sideBar = document.getElementById("sideBar");
var x = document.getElementById("x");
var body = document.querySelector("body");


function abrirSideBar(){
  
sideBar.classList.toggle("active");
        body.style.overflowY="hidden";
        if (sideBar.classList.contains("active")){  body.style.overflowY="scroll"; 
        body.style.overflowY="hidden";
}}
function fecharSideBar(){

    if(sideBar.classList.contains("active")){
        sideBar.classList.remove("active")
        sideBar.classList.add("activeoff")
    }
         sideBar.classList.remove("activeoff")
         body.style.overflowY="scroll";

}


menuLine.addEventListener("click",abrirSideBar);
x.addEventListener("click",fecharSideBar);




let totalSlides = document.querySelectorAll('.slider--item').length;
let currentSlide = 0;

let sliderWidth = document.querySelector('.slider').clientWidth;

document.querySelector('.slider--width').style.width = 
    `${sliderWidth * totalSlides}px`;

document.querySelector('.slider--controls').style.width = 
    `${sliderWidth}px`;
document.querySelector('.slider--controls').style.height = 
    `${document.querySelector('.slider').clientHeight}px`;

function goPrev() {
    currentSlide--;
    if(currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    updateMargin();
}
function goNext() {
    currentSlide++;
    if(currentSlide > (totalSlides-1)) {
        currentSlide = 0;
    }
    updateMargin();
}

function updateMargin() {
    let sliderItemWidth = document.querySelector('.slider--item').clientWidth;
    let newMargin = (currentSlide * sliderItemWidth);
    document.querySelector('.slider--width').style.marginLeft = 
        `-${newMargin}px`;
}

setInterval(goNext, 6000);