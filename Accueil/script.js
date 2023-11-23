let id = document.getElementById("id");
let aleaId=Math.random().toString(36).substring(0, 6);
id.innerHTML+=aleaId;
function fin(){
    console.log("La fonction fin a été appelée");
    // Ferme la page et ne commence pas le test
    window.location.href="exit.html";
    
}

function rediriger(){

    console.log("La fonction rediriger a été appelée");

    // Vérifie le nom de la page
    if (window.location.pathname.endsWith("formConsentement.html")) {
        console.log("La fonction rediriger a été appelée, je suis dans la condition");
        let aleaGroupe=Math.random()*(5-1)+1;
        if (aleaGroupe==1){
            // Redirige vers la nouvelle page
            window.location.href = "../AleaIcone/FinAleaIcone/indexFinAI.html";
        }
        else if (aleaGroupe==2){
            // Redirige vers la nouvelle page
            window.location.href = "../AleaTexte/genreAleaTexte/index.html";
        }
        else if(aleaGroupe==3){
            // Redirige vers la nouvelle page
            window.location.href = "../TriIcone/genreTriIcone/index.html";
        }
        else{
            // Redirige vers la nouvelle page
            window.location.href = "../TriTexte/genreTriTexte/index.html";
        }

    }

}
