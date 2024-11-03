let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let el = document.querySelector(".increase");
one.onclick = function() {
    el.classList.toggle("activeone");
    // one.innerHTML="FULL" 
}
two.onclick = function() {
    el.classList.toggle("activetwo")
}
three.onclick = function() {
    el.classList.toggle("activethree")
}
four.onclick = function() {
    el.classList.toggle("activefour")
}
five.onclick = function() {
    el.classList.toggle("activefive")
}
six.onclick = function() {
    el.classList.toggle("activesix")
}