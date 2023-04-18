/* PARA CAMBIAR LA IMAGEN DEL DESTINO DESEADO */

  var selectorImagen = document.getElementById("destino");
  var miImagen = document.getElementById("imgDestino");
  
  selectorImagen.addEventListener("change", function() {
    miImagen.src = selectorImagen.value;
  });
  
  /* PARA CAMBIAR LA IMAGEN DEL DESTINO DESEADO */

// Agregar evento de clic al botón "Enviar"
document.getElementById("enviar-formulario").addEventListener("click", function() {
  // Crear un nuevo documento PDF
  var doc = new jsPDF();
  
  // Agregar el mensaje de agradecimiento al documento
  doc.text("Muchas gracias por dejarnos tu curriculum vitae", 10, 10);
  
  // Descargar el documento con un nombre específico
  doc.save("mensaje.pdf");
});