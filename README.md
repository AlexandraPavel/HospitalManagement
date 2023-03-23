# HospitalManagement
Aplicatie dezvoltata cu Node.js (Express.js) cu MySql si React.js.

### Backend: ###
## Init: ##
* npm i node-modules
* npm i cors
* npm i express-session
* npm install dotenv

Run:
* nodemon --tls-min-v1.1 index.js

### Frontend: ###
## Init: ##
* npm i node-modules
* npm i react-router-dom

Run:
* npm start

Login:
    username: test@test.com
    password: test

Am folosit MySqlWorkbech pentru a creea user-ul prin acest query:

```
 CREATE TABLE IF NOT EXISTS `accounts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

INSERT INTO `accounts` (`id`, `username`, `password`, `email`) VALUES (1, 'test', 'test', 'test@test.com');
```

Clusterul bazei de date e hostata pe site-ul: https://scalegrid.io/,
fiind o platforma usor accesibila pentru a crea o baza de date in urma
unui research indelungat. Am pus IP-ul 0.0.0.0/0  pentru a avea permisiune oricine
sa se conecteze la baza de date.

Am folosit un MVC pentru dezvoltarea aplicatiei.
Pentru baza de date am cerut un certificat SSL pentru securitatea sesiunii.
Am facut si un fiesier .env pe care nu l-am inclus in .gitignore din adins,
in mod normal aceste fisiere nu se fac publice si repo-urile sunt configurate
in mod special astfel incat un developer sa nu publice credientialele.
Am realizat logarea si pe Backend si Frontend.
