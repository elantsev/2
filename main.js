// 1. захватываем элементы
var body = document.getElementsByTagName("body");
body[0].onkeypress = textColor;


// 2. создаем функции
function textColor(e) {
    console.log(e.charCode);
    
    
    if (e.charCode==114) body[0].style.color = "red";
    if (e.charCode==103) body[0].style.color = "green";
    if (e.charCode==98) body[0].style.color = "blue";
}