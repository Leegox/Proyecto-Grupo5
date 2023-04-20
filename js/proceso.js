
function mostrar(){
    document.getElementById('mostrarForm').style.display='block';
    
};


function pdfGen(){


  // Obtener los valores de los campos del formulario
  const nombre = document.getElementById('nom').value;
  const apellido = document.getElementById('ap').value;
  const dni = document.getElementById('dni').value;
  const tel = document.getElementById('tel-cel').value;
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
};


const botonEnviar = document.getElementById('enviar-formulario');

botonEnviar.addEventListener('click', (event) => {
  if (nombre.value === '' || apellido.value === '' || dni.value === '' || isNaN(dni.value) || telefono.value === '' || isNaN(telefono.value) || direccion.value === '' || email.value === '' || numTransac.value === '' ) {
    alert('Por favor, complete todos los campos antes de enviar el formulario.');
    event.preventDefault();
  } else {
    alert('¡Tu solicitud fue registrada con éxito!');

pdfGen();

    form.submit();
  }
});


const form = document.querySelector('form');
const nombre = document.querySelector('#nom');
const apellido = document.querySelector('#ap');
const dni = document.querySelector('#dni');
const telefono = document.querySelector('#tel-cel');
const direccion = document.querySelector('#direc');
const email = document.querySelector('#e-mail');
const numTransac = document.querySelector('#num');
const enviarBtn = document.querySelector('#enviar-formulario');

enviarBtn.addEventListener('click', (event) => {
  event.preventDefault(); // Prevenir el envío del formulario

  // Validar el campo de nombre
  if (nombre.value === '') {
    nombre.parentNode.querySelector('span').textContent = 'Campo obligatorio';
    nombre.parentNode.querySelector('span').style.color = 'red';
  } else {
    nombre.parentNode.querySelector('span').textContent = '';
  }

  // Validar el campo de apellido
  if (apellido.value === '') {
    apellido.parentNode.querySelector('span').textContent = 'Campo obligatorio';
    apellido.parentNode.querySelector('span').style.color = 'red';
  } else {
    apellido.parentNode.querySelector('span').textContent = '';
  }

  // Validar el campo de edad
  if (dni.value === '' || isNaN(dni.value)) {
    dni.parentNode.querySelector('span').textContent = 'Por favor, ingrese su DNI/Pasaporte correctamente';
    dni.parentNode.querySelector('span').style.color = 'red';
  } else {
    dni.parentNode.querySelector('span').textContent = '';
  }

  // Validar el campo de teléfono
  if (telefono.value === '' || isNaN(telefono.value)) {
    telefono.parentNode.querySelector('span').textContent = 'Por favor, ingrese su número de teléfono correctamente';
    telefono.parentNode.querySelector('span').style.color = 'red';
  } else {
    telefono.parentNode.querySelector('span').textContent = '';
  }

  // Validar el campo de direccion
  if (direccion.value === '' || isNaN(direccion.value)) {
    direccion.parentNode.querySelector('span').textContent = 'Por favor, ingrese su dirección correctamente';
  direccion.parentNode.querySelector('span').style.color = 'red';
  } else {
    direccion.parentNode.querySelector('span').textContent = '';
  }

  // Validar el campo de correo electrónico
  if (email.value === '') {
    email.parentNode.querySelector('span').textContent = 'Campo obligatorio';
    email.parentNode.querySelector('span').style.color = 'red';
  } else {
    email.parentNode.querySelector('span').textContent = '';
  }

   // Validar el campo de Numero de Transacción
   if (numTransac.value === '' || isNaN(numTransac.value)) {
    numTransac.parentNode.querySelector('span').textContent = 'Por favor, ingrese su número de Transacción correctamente';
    numTransac.parentNode.querySelector('span').style.color = 'red';
  } else {
  numTransac.parentNode.querySelector('span').textContent = '';
  }

  // Verificar si todos los campos están completos
  if (nombre.value !== '' && apellido.value !== '' && !isNaN(dni.value) && !isNaN(telefono.value) && direccion.value !=='' && email.value !== '' && numTransac.value !== '') {
    form.submit(); // Enviar el formulario
  }
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
  var tel = document.getElementById('tel-cel').value;
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