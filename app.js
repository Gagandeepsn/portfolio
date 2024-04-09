const home=document.querySelector(".Home");
const about=document.querySelector(".About_Me");
const project=document.querySelector(".My_Projects");
const contact=document.querySelector(".connect");
const body=document.querySelector("body");

home.addEventListener(("click"),()=>{
    // var currentMargin = parseInt(window.getComputedStyle(navbarr).Top);
    //     // Add 25px to the current margin-top value
    //     var newMargin = currentMargin + 1500;
    //         // Set the new margin-top value to move the page down
    // navbarr.style.Top = newMargin + 'px';

    // // line.style.bottom="25px";
    body.scrollTop+= 500;
    console.log("clicked")
});
document.addEventListener("DOMContentLoaded", function() {
    var scrollButton = document.getElementById('scrollButton');
    var content = document.getElementById('content');

    scrollButton.addEventListener('click', function() {
        // Scroll to the bottom of the content
        content.scrollTop = content.scrollHeight;
    });
});

about.addEventListener(("click"),()=>{
    console.log("gagan");
});

project.addEventListener(("click"),()=>{
    console.log("gagan");
});

contact.addEventListener(("click"),()=>{
    console.log("gagan");
});
