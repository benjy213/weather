# weather
Projet Ionic 3 cordova with firebase

benjamin.carles@epitech.eu
Projet réalisé seul.
Je n'ai pas pu assisté au cours

- Un readme à la base du projet expliquant le projet et toutes les contraintes techniques de lui ci (Front, backend) et la composition du groupe, ainsi une information si vous avez oui ou non assisté au cours inhérent au module

Une page d'authentification qui donne accès soit à une page pour s'enregistrer soit à la page Home.
L'authentification n'est pas terminée, lorsque je rentre des mails/mdp érroné dans mon formulaire il envoi un message d'erreur à la console mais authorise l'accès à la page Home.
La page Home permet de connaitre la météo du moment de 3 grandes villes ainsi que de connaitre la météo de votre position grace a la géolocalisation du téléphone.

api natif utilisé : @ionic-native/geolocation
api fireBase utilisé : angularfire2/auth
api pour récupérer les info de la météo: https://www.wunderground.com/
