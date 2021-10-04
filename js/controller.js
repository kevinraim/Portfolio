window.addEventListener("scroll", function(){
    let tamanioPantalla = window.innerHeight;

    let btnCv = document.getElementById("button_cv");
    if(btnCv.getBoundingClientRect().top < tamanioPantalla){
        btnCv.style.animation = "fade-in 1.5s";
    }

    let btnEnviar = document.getElementById("button_enviar");
    if(btnEnviar.getBoundingClientRect().top < tamanioPantalla){
        btnEnviar.style.animation = "fade-left 1.5s"
    }

    let cardA = document.getElementById("card_a");
    if(cardA.getBoundingClientRect().top < tamanioPantalla){
        cardA.style.animation = "fade-right 2s";
    }

    let cardB = document.getElementById("card_b");
    if(cardB.getBoundingClientRect().top < tamanioPantalla){
        cardB.style.animation = "fade-left 2s";
    }

    let cardC = document.getElementById("card_c");
    if(cardC.getBoundingClientRect().top < tamanioPantalla){
        cardC.style.animation = "fade-right 2s";
    }

    let imagenContacto = document.getElementById("imagen_contacto");
    if(imagenContacto.getBoundingClientRect().top < tamanioPantalla){
        imagenContacto.style.animation = "fade 2s"
    }

})


function verificarCampos(){
    
    alerta = document.getElementById("alertaForm");
    alerta.style.visibility = "hidden"

    let campos = {};

    campos.nombre = document.getElementById("nombreInput").value;
    campos.email = document.getElementById("emailInput").value;
    campos.tel = document.getElementById("telInput").value;
    campos.mensaje = document.getElementById("mensajeInput").value;

    if(campos.nombre == "" || campos.email == "" || campos.tel == "" || campos.mensaje == ""){
        alerta.style.visibility = "visible"
    }

}