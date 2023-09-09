//DOM 2

var image = document.querySelector("img");
var icon = document.querySelector("i");

image.addEventListener("dblclick",function(){
    icon.style.transform = 'translate(-50%,-50%) scale(1)';
    icon.style.opacity = '0.8';
    setTimeout(function(){
        icon.style.opacity = '0';
    },1000)
})