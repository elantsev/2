

(function(){
        const btn=document.getElementsByTagName("button");   
          
        for (let i = 0; i < btn.length; i++) {
                btn[i].addEventListener("click", function () {
                document.images[0].src=btn[i].attributes.img.value;
                })} 
        })()
        
