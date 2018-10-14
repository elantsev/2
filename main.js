// 1. захватываем элементы
var button = document.getElementById("button");
button.addEventListener("mousemove", escape)
var x=0; var dx=0;
// 2. создаем функции
function escape(e) {
    if (x<=0) dx=50;
    else if (x>=document.documentElement.clientWidth-250)  dx=-50;
    x+=dx;
    button.style.left=x+"px";
};
