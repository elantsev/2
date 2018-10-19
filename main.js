var watermark={};
watermark.element = form.login;
watermark.element.value=watermark.element.getAttribute("watermark")
watermark.element.className = "default"
watermark.element.addEventListener("click",  function () {
        if (watermark.element.value==watermark.element.getAttribute("watermark")) 
       {watermark.element.value=""; 
       watermark.element.className = "data";}
})

watermark.element.addEventListener("change",  function () {
        if (watermark.element.value=="") watermark.element.value=watermark.element.getAttribute("watermark")
        if (watermark.element.value==watermark.element.getAttribute("watermark")) 
        watermark.element.className = "default"; // установка CSS класса 
        else watermark.element.className = "data"; 
})







