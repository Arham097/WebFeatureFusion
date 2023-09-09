// DOM 5

var arr = [
    {
        dp: "Arham1.jpg", 
        story:"Arham2.jpg",
    },
    {
        dp: "bilal1.jpg", 
        story:"bilal2.jpg",
    },
    {
        dp: "ibad1.jpg", 
        story:"ibad2.jpg",
    },
    {
        dp: "muneer1.jpg", 
        story:"muneer2.jpg",
    },
    {
        dp: "shayan1.jpg", 
        story:"shayan2.jpg",
    },
];
var stories = document.querySelector(".stories");
var clutter = ''
arr.forEach(function (elem, idx) {
    clutter += `<div class="story">
         <img id = "${idx}"src = "${elem.dp}" alt = " "> </img>
    </div>`
})
stories.innerHTML = clutter;

stories.addEventListener("click", function (dets) {
    var val = (arr[dets.target.id].story);
    document.querySelector(".fullscreen").style.display = 'block';
    document.querySelector(".fullscreen").style.backgroundImage = `url(${val})`

    setTimeout(function () {
        document.querySelector(".fullscreen").style.display = 'none';

    }, 3000)

});