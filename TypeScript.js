    function divExtra (){
        let neWtext = document.getElementById("noticia").value;
        let neWdiv = document.createElement("div");
        let neWp = document.createElement("p");
        neWp.innerHTML =  neWtext;
        neWdiv.appendChild(neWp) ;
        let currentlyDiv = document.getElementById("1");
        currentlyDiv.appendChild(neWdiv);
        neWdiv.className = "border border-danger border border-3 m-1";
        neWp.className = "text-center";
        document.getElementById("noticia").value = "";
    }