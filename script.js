const one = document.querySelector(".one")
const first = document.querySelector(".first")
const one1 = document.querySelector(".one1")

first.addEventListener("click", function(){
    const display1 = window.getComputedStyle(one).display;
    if (display1 === "none"){
        one.style.display = "flex";
        one1.src = "assets/images/icon-minus.svg";
         first.style.border = "none"
    }
    else {
        one.style.display = "none"
        one1.src = "assets/images/icon-plus.svg"
         first.style.borderBottom = "2px solid hsl(275, 100%, 97%)";
    }
}
)

const second = document.querySelector(".second");
const two = document.querySelector(".two");
const one2 = document.querySelector(".one2")

second.addEventListener("click", function(){
    const display2 = window.getComputedStyle(two).display
    if (display2 === "flex") {
    two.style.display = "none"
    one2.src = "assets/images/icon-plus.svg";
     second.style.borderBottom = "2px solid hsl(275, 100%, 97%)"
}
else {
    two.style.display = "flex";
    one2.src = "assets/images/icon-minus.svg"
 second.style.border = "none"
}
})

const third = document.querySelector(".third");
const one3 = document.querySelector(".one3")
const three = document.querySelector(".three")

third.addEventListener("click", function(){
    const display3 = window.getComputedStyle(three).display;
    if (display3 === "none") {
        three.style.display = "flex";
        one3.src = "assets/images/icon-minus.svg";
       third.style.border = "none";
    }
    else {
        three.style.display = "none";
        one3.src = "assets/images/icon-plus.svg"
         third.style.borderBottom = "2px solid hsl(275, 100%, 97%)"
    }
})


const four = document.querySelector(".four");
const fourth = document.querySelector(".fourth");
const one4 = document.querySelector(".one4");

fourth.addEventListener("click", function(){
    const display4 = window.getComputedStyle(four).display;
    if (display4 === "none"){
        four.style.display = "flex";
        one4.src = "assets/images/icon-minus.svg"
        fourth.style.border = "none";
    }
    else {
        four.style.display = "none"
        one4.src = "assets/images/icon-plus.svg"
        fourth.style.borderBottom = "2px solid hsl(275, 100%, 97%)"
    }
})