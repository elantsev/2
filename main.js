// Создайте страницу-калькулятор. 
// Разместите на странице два поля ввода и кнопки для арифметических операций над данными
// введенными в поля ввода. Реализуйте данную страницу двумя способами – с использованием
// модели DOM Level 0 (через свойства) и DOM Level 2.

// 1. захватываем элементы
var buttons = document.getElementsByTagName("button");


// 2. создаем функции
function plus() {
    var number1 = document.getElementsByTagName("input")[0].value;
    var number2 = document.getElementsByTagName("input")[1].value;
    var output = document.getElementsByTagName("p")[1];
    output.innerHTML = parseFloat(number1)+parseFloat(number2)
}
function substraction() {
    var number1 = document.getElementsByTagName("input")[0].value;
    var number2 = document.getElementsByTagName("input")[1].value;
    var output = document.getElementsByTagName("p")[1];
    output.innerHTML = parseFloat(number1)-parseFloat(number2)
}
function multiply() {
    var number1 = document.getElementsByTagName("input")[0].value;
    var number2 = document.getElementsByTagName("input")[1].value;
    var output = document.getElementsByTagName("p")[1];
    output.innerHTML = parseFloat(number1)*parseFloat(number2)
}
function divide() {
    var number1 = document.getElementsByTagName("input")[0].value;
    var number2 = document.getElementsByTagName("input")[1].value;
    var output = document.getElementsByTagName("p")[1];
    output.innerHTML = (number2==0)? "на ноль делить нельзя" :parseFloat(number1)/parseFloat(number2);
}
// 3. вешаем события на кнопки DOM0
// buttons[0].onclick = plus;
// buttons[1].onclick = substraction;
// buttons[2].onclick = multiply;
// buttons[3].onclick = divide;
// 4. вешаем события на кнопки DOM2
buttons[0].addEventListener("click", plus);
buttons[1].addEventListener("click", substraction);
buttons[2].addEventListener("click", multiply);
buttons[3].addEventListener("click", divide);

