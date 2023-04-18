/* PARA CAMBIAR LA IMAGEN DEL DESTINO DESEADO */

  var selectorImagen = document.getElementById("destino");
  var miImagen = document.getElementById("imgDestino");
  
  selectorImagen.addEventListener("change", function() {
    miImagen.src = selectorImagen.value;
  });
  
  /* PARA CAMBIAR LA IMAGEN DEL DESTINO DESEADO */

// Agregar evento de clic al botón "Enviar"
const btnEnviar = document.getElementById("enviar-formulario");

btnEnviar.addEventListener("click", () => {
  // Obtener los valores de los campos del formulario
 

  // Crear un nuevo objeto jspdf
  const doc = new jsPDF();

  // Agregar los datos al documento PDF
  doc.setFontSize(20);
  doc.text("Formulario de Pedido", 105, 15, { align: "center" });
  doc.setFontSize(14);

  // Guardar el documento PDF
  doc.save("formulario-pedido.pdf");
});


  