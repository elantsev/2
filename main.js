// 1. захватываем элементы
var body = document.getElementsByTagName("body");
body[0].onkeydown = textColor;
// 2. создаем функции
function textColor(e) {
    console.log(e);
    if (e.keyCode==83&e.ctrlKey==true&e.shiftKey==0) {
        body[0].style.color = "red";
        message=document.createElement("p");
        message.innerHTML = "сохранено";
              document.getElementsByTagName("div")[0].appendChild(message);
      }
      else if (e.keyCode==65&e.ctrlKey==true) {
        body[0].style.color = "red";
        message=document.createElement("p");
        message.innerHTML = "выбрано все";
             document.getElementsByTagName("div")[0].appendChild(message);
      }
      else if (e.keyCode==83&e.ctrlKey==true&e.shiftKey==true) {
        body[0].style.color = "red";
        message=document.createElement("p");
        message.innerHTML = "Сохранено все";
             document.getElementsByTagName("div")[0].appendChild(message);
      }
}
