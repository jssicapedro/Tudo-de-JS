

function carregar(){
    let h = new Date().getHours();

    let fundo = document.body.style;

    let msg = document.getElementsById("msg");

    let img = document.getElementsById("image");
    
    if ( h>0 && h<12){
        msg.innerHTML = "Bom dia!";
        fundo.background = "bluesky";
    } else if (h>=12 && h<20 ){
        msg.innerHTML = "Boa tarde!";
        fundo.background = "orange";
        img.setAttribute("src") = "tarde.jpg";
    } else {
        msg.innerHTML = "Boa noite!";
        img.setAttribute("src") = "tarde.jpg";
    }
}