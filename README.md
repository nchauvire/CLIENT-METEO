#Installation les API 
## Installer composer
* Documentation officiel : https://getcomposer.org/doc/00-intro.md

* Cloner les differents projets
  - https://github.com/nchauvire/API-VOL-VELO
  - https://github.com/nchauvire/API-ALERTE-METEO
  - https://github.com/nchauvire/API-POLLUTION
  - https://github.com/nchauvire/API-METEO
  - https://github.com/nchauvire/NOTIF-VOL

* Lancer la commande ```composer install``` dans chaques dossiers d'api
* Creer des vhosts pour chaques api (respecter les noms ci-dessous)
    - api-meteo
    - api-alerte-meteo
    - api-vol-velo
    - api-pollution
    - api-notif-vol
      
# CLIENTMETEO
* Installer angular-cli ``npm install -g @angular/cli``
* Cloner le projet : https://github.com/nchauvire/CLIENT-METEO
* Installer les packages ``npm install``
* Lancer le serveur angular ``ng serve --open``
* L'application s'ouvre automatiquement dans le navigateur par default