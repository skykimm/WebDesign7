var firstslide = document.querySelector(".img:first-child");
var clickbtn = document.querySelectorAll(".btn");
var clicktab = document.querySelectorAll(".tab");


function slideshow(){
    var currentslide = document.querySelector(".showing");
    if(currentslide){
        currentslide.classList.remove("showing");
        var nextslide = currentslide.nextElementSibling;
        
        if(nextslide){
            nextslide.classList.add("showing");
        }
        else{
            firstslide.classList.add("showing");
        }
    }
    else{
        firstslide.classList.add("showing");
    }
}
slideshow();
window.setInterval("slideshow()",2000);

function tabmenu(n){
    var tabclick = document.querySelector(".btns");
    var tabchange = document.querySelector(".tabs");
    
    if(tabclick){
        tabclick.classList.remove("btns");
        tabchange.classList.remove("tabs");
    }
    clickbtn[n].classList.add("btns");
    clicktab[n].classList.add("tabs");
}