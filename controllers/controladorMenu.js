let menu = document.getElementById("menu");


//detectar scroll o movimiento en la ventana

window.addEventListener("scroll", function(){

    if(document.documentElement.scrollTop <50){
        //el menu es tranparente
        menu.classList.add("menu");
        menu.classList.remove("menu2");
    }else{
            //el menu es de color
            menu.classList.add("menu2");
            menu.classList.remove("menu");
        }
})


