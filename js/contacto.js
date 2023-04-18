/* PARA CAMBIAR LA IMAGEN DEL DESTINO DESEADO */

var selectorImagen = document.getElementById("destino");
var miImagen = document.getElementById("imgDestino");

selectorImagen.addEventListener("change", function () {
  miImagen.src = selectorImagen.value;
});

/* PARA CAMBIAR LA IMAGEN DEL DESTINO DESEADO */

// Agregar evento de clic al botón "Enviar"
const btnEnviar = document.getElementById("enviar-formulario");

btnEnviar.addEventListener("click", () => {
  // Obtener los valores de los campos del formulario
  const nombre = document.getElementById("nom").value;
  const apellido = document.getElementById("ap").value;
  const email = document.getElementById("e-mail").value;
  const tel = document.getElementById("tel/cel").value;
  const fechaSalida = document.getElementById("fechaSalida").value;
  const fechaRegreso = document.getElementById("fechaRegreso").value;
  const pMenores = document.getElementById("pMenores").value;
  const pMayores = document.getElementById("pMayores").value;
 

  // Crear un nuevo objeto jspdf
  const doc = new jsPDF();


  // Agregar el texto al documento PDF
// Agregar el texto al documento PDF
doc.text(`Muchas gracias ${nombre} ${apellido} por contactarte con nosotros.`, 10, 20);
doc.text(`Recibiras tambien una copia de este pdf al mail ${email}.`, 10, 30);
doc.text(`Recibiras un codigo por mensaje de texto al numero ${tel}.`, 10, 40);
doc.text(`Registramos tu fecha de salida ${fechaSalida} y tu fecha de regreso ${fechaRegreso}.`, 10, 50);
doc.text(`Cantidad de pasajeros: Pasajeros menores ${pMenores} y Pasajeros mayores ${pMayores}.`, 10, 60);
doc.text('Muchas gracias por confiar en Hornero Argentino.', 10, 80);




  // Guardar el documento PDF
  doc.save("formulario-pedido.pdf");
});
