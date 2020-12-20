# TODOLIST 

# Fonctionnalités de base 

Ajout des fonctionnalités de la TODOLIST Vanilla :

- Edit
- Supprimés Cochées 
- Tout cochés et tout décochés (implémentation de la touche CTRL+B qui fait la même action que la flèche présente dans l'application)
- Filtres 
- Barés les labels qui sont cochés

# Fonctionalités Implémentés

## Effacer Tout

Le bouton Supprimer Tout fonctionne correctement.

## Sérialisation / désérialisation des données localement (Local Storage) - Pour sauvegarder les données localement

Les données restent bien sauvegarder entre 2 navigation dans l'application 

## Version responsive (application qui s'adapte aux tailles d'écran, comme un smartphone)

L'application reste bien utilisable quand on change la taille de l'écran. Petit problème sur certains téléphones (voir ci-dessous dans la partie problème rencontrés)

## Copie de listes par QR-code

Affichage d'un QR Code qui permet d'exporter notre liste. La forme des données de la liste n'est pas sous la meilleure forme possible (voir ci-dessous dans la partie problème rencontrés)

## Passage à une application hybride avec IONIC

Le projet est initialisé avec Ionic grâce à la commande "ionic init". 2 lignes de codes ont du être changé pour que l'appli soit deployable : dans index.html, "<base href=”/”>" par "<base href=”./”>" et dans angular.json, le outputh-path "dist" par "www".
Les versions Android et IOS sont disponibles via les commandes "ionic cordova run android" et "ionic cordova run ios". J'ai neanmoins un problème avec cette commande (voir ci-dessous dans la partie problème rencontrés)

# Problèmes rencontrés 

## Responsive

Lors du test sur le navigateur chrome en mode mobile, sur certains téléphones, les boutons de la todo-list ne prennent pas exactement toute la largeur de l'écran

## QR Code

Les données exporté par le QR Code ne sont pas idéales à lire (même si elles restent lisible). J'ai essayer d'améliorer ça mais je n'ai pas réussi et ai préférer me concentrer sur d'autres fonctionalités vu que celle-ci marchait quand même.

## Firebase

J'ai essayer de connecter mon appli à une base de données Firebase mais je n'ai pas réussi à gérer le stockage et l'affichage des données. La création de compte, la connexion et la déconnexion des utilisateurs marchaient mais je l'ai enlevé de l'application car inutile sans affichage des données; J'ai neanmoins laisser les fonctions qui permettaient ça et la config de ma base Firebase dans le cas ou vous souhaitez les voirs. 

## CSS

Je n'ai pas trop changer l'IHM par rapport à celle de l'application de base, préférent me concentrer sur la partie technique.

## IONIC 

ionic cordova run android --device
> ng.cmd run app:ionic-cordova-build --platform=android
An unhandled exception occurred: Project does not exist.app
See "C:\Users\romai\AppData\Local\Temp\ng-Klpbzv\angular-errors.log" for further details.
[ERROR] An error occurred while running subprocess ng.

        ng.cmd run app:ionic-cordova-build --platform=android exited with exit code 127.

        Re-running this command with the --verbose flag may provide more information.
       
Ce message s'affiche lors de la commande "ionic cordova run android --device". J'ai pourtant réaliser un projet dans le cours d'IHM avec Ionic et je n'ai eu acun problème à deployer l'appli. Le problème vient peut être du fait que cette appli n'a pas été réaliser dès le début en Ionic. J'ai essayer de corriger l'erreur mais je n'ai malheuresement pas eu le temps vu que j'ai deployer l'appli ionic quelques minutes avant le rendu final (pensant naivement que comme je l'avais déjà fait, cela serait assez rapide). Peut être que le deploiement marcherait via un émulateur android mais je n'ai malheuresement eu le temps d'essayer que sur mon smartphone. Tout le build nécessaire au deploiement est neanmoins réussi et la correction de cette erreur devrait suffire pour que l'application marche sur android et IOS.

## Angular 

J'aurais aimé ajouter d'autres fonctionalité ou améliorer celles présentent mais j'ai eu un peu de mal à m'habituer à Angular au milieu de tous les autres projets qu'on avait en cours. En effet Angular est assez différents des frameworks utilisé dans les autres projets et lors de différents tests réalisé pour des offres de stage, et j'ai trouvé assez difficile de switcher entre ces frameworks. J'espère néanmoins que mon travail sur ce projet sera suffisant pour m'assurer la moyenne !

# Lancement du projet
"npm install"
"npm start"

Si il y a le moindre problème qui n'est pas défini ici, n'hésitez pas à me contacter à l'adresse suivante : romain.pinelgermain@gmail.com

