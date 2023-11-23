# cinematèque
Bonjour, voici des indications pour lire notre site. 

Premièrement, il se compose de plusieurs dossiers qui contient l'accueil, une bdd (pas encore faite) et les quatres dossiers restants (AleaIcone, AleaTexte, TriIcone, TriTexte) contiennent les pages des 4 sites de notre expérience. 

Voici à quoi correspondent les 4 sites : 

AleaIcone : groupe ayant un site contenant des menus filtrant avec des items placés de manière aléatoire et avec des icônes
AleaTexte : groupe ayant un site contenant des menus filtrant avec des items placés de manière aléatoire et sans icônes
TriIcone :  groupe ayant un site contenant des menus filtrant avec des items triés et avec des icônes
TriTexte :  groupe ayant un site contenant des menus filtrant avec des items triés et sans icônes

Le début du site commence via l'url : /cineteque/Accueil/formConsentement.html 

La première page est une page de consentement avec une consigne. Si l'utilisateur clique sur "oui", celui-ci est redirigé vers une page qui lui demande à quel groupe il appartient. Cette page contient ainsi 4 boutons qui renvoient chacun vers le "site" associé.
Les 4 sites sont composés de la même façon : une consigne en rouge mène le sujet à naviguer sur trois pages succéssives (genre, pays et note). Une fois arrivé sur la page Note (page qui corresponds à la fin de la consigne), il appuie sur "continuer". Ensuite, celui-ci est redirigé vers la page "genre" qui corresponds à la première page du site avec une nouvelle consigne. Une fois qu'il a effectué les trois consignes, l'utilisateur peut appuyer sur le bouton "terminer" qui le dirige vers un questionnaire de satisfaction et de niveau de maitrise. Une fois le questionnaire rempli, il appuie sur un nouveau bouton "terminer" qui le mène vers une page de remerciement.

Voici la séquence de navigation pour un utilistaeur : 

formulaire de consentement > accueil (choix du groupe) > (page genre > page pays > page note) x3 > questionnaire satisfaction et maitrise > remerciement

Difficultées : 
La navigation fonctionne cependant nous n'avons, pour le moment, pas terminé le script java qui va permettre de modifier la consigne trois fois. De plus, il va permettre de faire affiché le bouton "terminé" une fois les trois consignes réalisées. Nous avons un bug au niveau de l'indexconsigne qui est réinitialiser une fois la redirection sur la page genre. Ainsi, il y a une seule consigne qui peut tourner en boucle pour le moment. 

Merci d'avance pour votre retour, 

A lundi, 

DURET Laura et PHILIPPE Aurore




