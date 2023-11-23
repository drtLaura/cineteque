let consignes = ["rechercher une comédie française qui a une note de 2/10", "Consigne 2", "Consigne 3", /* autres consignes */];
var indexConsigne = 0; // Initialisation de la variable globale

function afficherConsigne() {
    console.log('indexConsigne:', indexConsigne);
    console.log('consigne:', consignes[indexConsigne]);
    document.getElementById('instruction').innerText = consignes[indexConsigne];
}

window.addEventListener('load', afficherConsigne);

function rediriger() {
    console.log("La fonction rediriger a été appelée");

    // Vérifie le nom de la page
    if (window.location.pathname.endsWith("indexFinTT.html")) {
        console.log("La fonction rediriger a été appelée, je suis dans la condition");

        // Incrémente l'index
        indexConsigne = (indexConsigne + 1) % consignes.length;

        // Redirige vers la nouvelle page
        window.location.href = "../genreTriTexte/indexGenreTT.html";
        window.addEventListener('load', afficherConsigne);

    }
}

function questionnaire() {
    // Redirige vers le questionnaire
    window.location.href = "formTriTexte.html";
}

function terminer() {
    console.log(" je suis dans la fonction terminer")
    // Redirige vers le questionnaire
    window.location.href = "../../Accueil/exit2.html";
}
function afficherBoutonApresDelai() {
    var bouton = document.getElementById("boutonTerminer");
    bouton.style.display = "block";
}
