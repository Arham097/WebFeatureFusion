//DOM 4

var element = document.querySelectorAll(".elem1");
var image = document.querySelector("data img");

element.forEach(function(data){{
    data.addEventListener("mousemove",function(val){
        data.childNodes[1].style.left = val.x +"px";
});
    data.addEventListener("mouseenter",function(){
        data.childNodes[1].style.opacity = 1;
    });
    data.addEventListener("mouseleave", function(){

        data.childNodes[1].style.opacity = 0;
    });
    }})

