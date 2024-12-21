var growth = document.querySelector("#growth")
var add = document.querySelector("#addfriend")
var open = document.querySelector("#open")
var body = document.querySelector("body")

add.addEventListener("click",function(){
    add.innerHTML = "Added"
})

var grow = 0;
open.addEventListener("click",function(){
    var growthInterval = setInterval(function(){
        grow++;
        growth.style.width = grow + "%"
    },20)
     var count = setTimeout(function(){
        clearInterval(growthInterval)
        open.style.pointerEvents = "none";
        if(count == 3){
            var a = document.createElement("a")
            a.getAttribute("src")
            body.setAttribute("src","http://127.0.0.1:5500/project/1.html")
            console.log(a)
        }
    },2000)
})