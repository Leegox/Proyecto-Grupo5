
function mostrar(){
    document.getElementById('mostrarForm').style.display='block';
    
};



/* PDF  */


const btnEnviar = document.getElementById("enviar-formulario");

btnEnviar.addEventListener("click", () => {
  // Obtener los valores de los campos del formulario
  const nombre = document.getElementById('nom').value;
  const apellido = document.getElementById('ap').value;
  const dni = document.getElementById('dni').value;
  const tel = document.getElementById('tel/cel').value;
  const direc = document.getElementById('direc').value;
  const email = document.getElementById('e-mail').value;
  const numPedido = document.getElementById('num').value;

  // Crear un nuevo objeto jspdf
  const doc = new jsPDF();

  // Agregar los datos al documento PDF
  doc.setFontSize(20);
  doc.text("Formulario de Pedido", 105, 15, { align: "center" });
  doc.setFontSize(14);
  doc.text(`Nombre: ${nombre}`, 20, 40);
  doc.text(`Apellido: ${apellido}`, 20, 50);
  doc.text(`DNI: ${dni}`, 20, 60);
  doc.text(`Tel/Cel: ${tel}`, 20, 70);
  doc.text(`Dirección: ${direc}`, 20, 80);
  doc.text(`E-mail: ${email}`, 20, 90);
  doc.text(`Número de Pedido: ${numPedido}`, 20, 100);

  // Guardar el documento PDF
  doc.save("formulario-pedido.pdf");
});


  

// Variable global para contar el número de objetos
let numObjetos = 0;

// Array para almacenar los objetos
const arrayDatos = [];

function guardarDatos() {
  // Obtener valores de los campos
  var nombre = document.getElementById("nom").value;
  var apellido = document.getElementById("ap").value;
  var dni = document.getElementById('dni').value;
  var tel = document.getElementById('tel/cel').value;
  var direc = document.getElementById('direc').value;
  var email = document.getElementById('e-mail').value;
  var numPedido = document.getElementById('num').value;

  // Incrementar contador de objetos
  numObjetos++;

  // Crear objeto para almacenar los datos
  const datos = {
    id: numObjetos,
    nombre: nombre,
    apellido: apellido,
    dni: dni,
    tel: tel,
    direccion: direc,
    email: email,
    Pedido: numPedido,
  };

  // Agregar objeto al array
  arrayDatos.push(datos);

  // Hacer algo con los datos
  console.log(datos);
  console.log(arrayDatos);
}
