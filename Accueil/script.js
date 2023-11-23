let id = document.getElementById("id");
let grp=document.getElementById("grp");
grp.innerHTML+=localStorage.getItem("groupe");
localStorage.setItem("aleaId", Math.random().toString(36).substring(0,6));
id.innerHTML+=localStorage.getItem("aleaId");
 
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
        if (groupe==1){
            // Redirige vers la nouvelle page
            window.location.href = "../AleaIcone/FinAleaIcone/indexFinAI.html";
        }
        else if (groupe==2){
            // Redirige vers la nouvelle page
            window.location.href = "../AleaTexte/genreAleaTexte/index.html";
        }
        else if(groupe==3){
            // Redirige vers la nouvelle page
            window.location.href = "../TriIcone/genreTriIcone/index.html";
        }
        else{
            // Redirige vers la nouvelle page
            window.location.href = "../TriTexte/genreTriTexte/index.html";
        }

    }

if (window.location.pathname.endsWith("accueil.html")) {
console.log("La fonction rediriger a été appelée, je suis dans la condition");

// affecter groupe 
var grp1=document.getElementById('groupe1').value;
var grp2=document.getElementById('groupe2').value;
var grp3=document.getElementById('groupe3').value;
var grp4=document.getElementById('groupe4').value;

if(grp1.checked==true){
    localStorage.setItem("groupe",1);
}
if(grp2.checked==true){
    localStorage.setItem("groupe",2);
}
if(grp3.checked==true){
    localStorage.setItem("groupe",3);
}
if(grp4.checked==true){
    localStorage.setItem("groupe",4);
}

// redirection 
window.location.href="formConsentement.html";
}

}
