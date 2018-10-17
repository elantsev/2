// Разработайте страницу регистрации нового пользователя. Форма должна получать от 
// пользователя следующие данные: имя, фамилия, логин, пароль, подтверждение пароля
// , email, пол (мужчина/женщина). 
// Форма должна проверять: 
// 1) Все поля вводов должны быть заполнены. 
// 2) Пароль и подтверждение пароля должны совпадать.  
// 3) Email должен быть указан в правильном формате. 
// При не удовлетворении этих правил форма должна выводить сообщение об 
// ошибке (не через alert). 


// регистрация события загрузки документа.
if (window.addEventListener) window.addEventListener("load", init, false);
else if (window.attachEvent) window.attachEvent("onload", init);

// регистрация обработчиков событий элементов формы.
function init() {
        for (let i = 0; i < 4; i++) {
                form1[i].onchange = NameOnChange;      
        };
        form1.password2.onchange=password2OnChange;
        form1.email.onchange = emailOnChange;
        
        form1.onsubmit = onsubmiHandler;
}
// метод проверки значения в элементе по регулярному выражению.
function validate(elem, pattern) {
        var res = elem.value.search(pattern);
        if (res == -1) elem.className = "invalid"; // установка CSS класса 
        else elem.className = "valid";
}

// обработчики событий изменения текста в окне.
function NameOnChange() {
        var pattern = /\S/;
        validate(this, pattern);
}

function password2OnChange() {
        if (form1.password.value!==form1.password2.value){
                form1.password2.className = "invalid"; // установка CSS класса 
                document.getElementById("incorrect").innerText="Пароли не совпадают" ;
        }
        if (form1.password.value==form1.password2.value) { 
        form1.password2.className = "valid";
        document.getElementById("incorrect").innerText=" " }
} 

function emailOnChange() {
        console.log(form1.email.value);
        
        var pattern = /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/i;
        if(form1.email.value=="") {form1.email.className = "invalid";}
        validate(this, pattern);
}

// событие при отправке формы на сервер.
function onsubmiHandler() {
        
        var invalid = false;
        
        for (var i = 0; i < form1.elements.length; ++i) {
                var e = form1.elements[i];
                // проверка типа элемента и наличия обработчика события onchange.
                if (e.type == "text" && e.onchange) {
                        e.onchange(); // запуск события onchange
                        if (e.className == "invalid") invalid = true;
                }
        }
        
        if (invalid) {
                alert("Допущены ошибки при заполнении формы.");
                return false; // отмена отправки формы.
        }
}

