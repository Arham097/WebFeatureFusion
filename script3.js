//DOM 3

var main = document.querySelector('.container');
var crsr = document.querySelector('.cursor');

main.addEventListener('mousemove',function(data){
    crsr.style.left = data.x + 'px';
    crsr.style.top = data.y +'px';
})

