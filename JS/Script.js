'use strict'

const boton = document.querySelector('.download-cv');

boton.addEventListener  ('click', function () {
    let descarga = confirm("desea descargar el documento?");
    if (descarga ){
        descarga = true ('descargado'); 
        console.log(descarga); 
    }
    else {
        descarga = null;
    }
      
   
})
