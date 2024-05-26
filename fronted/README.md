#CORRER EL BACKEND
#Abrimos una terminal
#Utilizando Git clonamos el repositorio o nos descargamos manualmente
git clone https://github.com/sebastianheras/final
#Ingresamos a la carpeta raiz
cd final
# Abrimos una terminal y descargamos Docker para correr la Base de datos PostgresSQL y ejecutamos el comando 
docker-compose up
# Abrimos el Ide de nuestra eleccion en este caso IntelliJ IDEA 2024.1.1
# Damos click en File-> Open (Buscamos la ruta donde descargamos el repositorio) C:\Users\UserP\Desktop\final\demo
# Click en el boton de correr aplicacion  
De esa manera estamos corriendo el proyecto de Spring Boot (Backend)
#CORRER EL FRONTED
cd fronted
# Dentro de la carpeta fronted ejecutamos los siguientes comandos
npm install
npm run dev
