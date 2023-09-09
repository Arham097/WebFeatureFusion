//DOM1

var Status = document.querySelector('#str');
var btn  = document.querySelector('button');

var flag = 0;
btn.addEventListener("click",function(){
    if (flag ==0){
        Status.innerHTML = "Freinds";
        Status.style.color = 'blue';
        flag = 1;
        btn.innerHTML = 'Remove Friend'
        btn.style.backgroundColor = 'blue'
    }else{
        Status.innerHTML = "Stranger";
        Status.style.color = 'red';
        btn.innerHTML = 'Add Friend';
        btn.style.backgroundColor = 'cadetblue'
        flag = 0;
    }
})







