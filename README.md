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

Le bouton Supprimer Tout fonctionne correctement

## Sérialisation / désérialisation des données localement (Local Storage) - Pour sauvegarder les données localement

Les données restent bien sauvegarder entre 2 navigation dans l'application 

## Version responsive (application qui s'adapte aux tailles d'écran, comme un smartphone)

L'application reste bien utilisable quand on change la taille de l'écran. Petit problème sur certains téléphones (voir ci-dessous dans la partie problème rencontrés)

## Copie de listes par QR-code

Affichage d'un QR Code qui permet d'exporter notre liste. La forme des données de la liste n'est pas sous la meilleure forme possible (voir ci-dessous dans la partie problème rencontrés)

## Passage à une application hybride avec IONIC

Le projet est initialisé avec Ionic grâce à la commande "ionic init". 2 lignes de codes ont du être changé pour que l'appli soit deployable : dans index.html, "<base href=”/”>" par "<base href=”./”>" et dans angular.json, le outputh-path "dist" par "www".
Les versions Android et IOS sont disponibles via les commandes "ionic cordova run android" et "ionic cordova run ios"

# Problème rencontrés 

## Responsive

Lors du test sur le navigateur chrome en mode mobile, sur certains téléphones, les boutons de la todo-list ne prennent pas exactement toute la largeur de l'écran

## QR Code

Les données exporté par le QR Code ne sont pas idéales à lire (même si elles restent lisible). J'ai essayer d'améliorer ça mais je n'ai pas réussi et ai préférer me concentrer sur d'autres fonctionalités vu que celle-ci marchait quand même.

## Firebase

J'ai essayer de connecter mon appli à une base de données Firebase mais je n'ai pas réussi à gérer le stockage et l'affichage des données. La création de compte, la connexion et la déconnexion des utilisateurs marchaient mais je l'ai enlevé de l'application car inutile sans affichage des données; J'ai neanmoins laisser les fonctions qui permettaient ça et la config de ma base Firebase dans le cas ou vous souhaitez les voirs. 

# Lancement du projet
"npm install"
"npm start"

Si il y a le moindre problème qui n'est pas défini ici, n'hésitez pas à me contacter à l'adresse suivante : romain.pinelgermain@gmail.com

