const consignes = ["Rechercher un documentaire espagnol qui a une note de 2/10", "Consigne 2", "Consigne 3"];

function afficherConsigne() {
    const indexConsigne = localStorage.getItem('indexConsigne') || 0;
    console.log('indexConsigne:', indexConsigne);
    console.log('consigne:', consignes[indexConsigne]);
    document.getElementById('instruction').innerText = consignes[indexConsigne];
}

window.addEventListener('load', afficherConsigne);

function rediriger() {
    console.log("La fonction rediriger a été appelée");

    // Vérifie le nom de la page
    if (window.location.pathname.endsWith("indexFinAI.html")) {
        console.log("La fonction rediriger a été appelée, je suis dans la condition");

        // Récupère et incrémente l'index
        let indexConsigne = (parseInt(localStorage.getItem('indexConsigne')) + 1) % consignes.length;
        localStorage.setItem('indexConsigne', indexConsigne);

        // Redirige vers la nouvelle page
        window.location.href = "../genreAleaIcone/indexGenreAI.html";
    }
}
