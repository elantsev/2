
var sum=0;
function calc() {
    if (form.size.value == "small") sum=100;
    if (form.size.value == "middle") sum=150;
    if (form.size.value == "big") sum=200;
    if (form.mushrooms.checked) sum+=10;
    if (form.bacon.checked) sum+=11;
    if (form.tomatoes.checked) sum+=12;
    if (form.cheese.checked) sum+=13;
    if (form.olives.checked) sum+=14;
    document.getElementsByTagName("h2")[0].innerHTML="Цена пиццы "+sum+" р.";
}
for (let i = 0; i < form.length-3; i++) {
    form[i].addEventListener("change", calc);
}