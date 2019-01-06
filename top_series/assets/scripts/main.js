console.log("Hola Mundo");


//DOM
//Query Selector/ Query Selector All

 let contenedor = document.querySelector(".div-contenedor");
 let tabla = document.querySelector("table");
 let cover = document.querySelector(".img-style");
 let links = document.querySelectorAll(".link-style");
 let encabezados = document.querySelectorAll(".th-style");
 let celdas = document.querySelectorAll(".td-style");
 let atras = document.querySelectorAll(".home");
 let ver = document.querySelectorAll(".botton");
 let iconos = document.querySelectorAll("li");
 let contenido = document.querySelector(".div-contenido");
 let img_fondo = document.querySelector(".div-img");
 

 //Funciones y recorrer los querySelectorAll

 /*iconos.forEach(function(clases){
     clases.classList.remove("fa-star-half-alt");
     clases.classList.add("fa-star");
     clases.classList.remove("far");
     clases.classList.add("fas");

 })*/
 atras.forEach(function(animacion){
     animacion.addEventListener("click", function(event){
        event.preventDefault();

        
        //Quitando animación
         img_fondo.classList.remove("animated");
         img_fondo.classList.remove("bounceInLeft");
         contenido.classList.remove("animated");
         contenido.classList.remove("bounceInLeft");

         //Añadiendo animación
         img_fondo.classList.add("animated");
         img_fondo.classList.add("bounceOutUp");
         contenido.classList.add("animated");
         contenido.classList.add("bounceOutUp");        
         
         //Tiempo de animación para volver a la pantalla primcipal
         setTimeout(function(){
            location.href = "../index.html";
         },600)
     })
 })

 ver.forEach(function(series){
     series.addEventListener('click', function(){
         console.log("Que bueno que decidiste ver la serie");
     })
 })

 /*atras.forEach(function(home){
     home.addEventListener("click", function(event){
         event.preventDefault();
         console.log("click");         
     })
 })*/
 
 celdas.forEach(function(td){
     td.addEventListener('click', function(){
         console.log("click");
     })
 })

 links.forEach(function(link){
     console.log(link); 
 })

 encabezados.forEach(function(encabezado){
     console.log(encabezado);
 })

 //Mostrar en consola

 console.log(contenedor);
 console.log(tabla);
 console.log(cover);
 
