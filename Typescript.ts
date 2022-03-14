function divExtra (){
    let neWtext = document.getElementById("noticia").value;
    let neWdiv = document.createElement("div");
    let neWp = document.createElement("p");
    neWp.innerHTML =  neWtext;
    neWdiv.innerHTML = neWp;
    let currentlyDiv = document.getElementById("1");
    document.body.insertBefore(currentlyDiv,neWdiv);

}