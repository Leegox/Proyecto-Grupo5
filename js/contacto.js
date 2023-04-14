/* PARA CAMBIAR LA IMAGEN DEL DESTINO DESEADO */

  var selectorImagen = document.getElementById("destino");
  var miImagen = document.getElementById("imgDestino");
  
  selectorImagen.addEventListener("change", function() {
    miImagen.src = selectorImagen.value;
  });
  
  /* PARA CAMBIAR LA IMAGEN DEL DESTINO DESEADO */
