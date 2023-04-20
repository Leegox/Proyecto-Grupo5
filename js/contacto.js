/* PARA CAMBIAR LA IMAGEN DEL DESTINO DESEADO */

var selectorImagen = document.getElementById("destino");
var miImagen = document.getElementById("imgDestino");

selectorImagen.addEventListener("change", function () {
  miImagen.src = selectorImagen.value;
});

/* PARA CAMBIAR LA IMAGEN DEL DESTINO DESEADO */

// Agregar evento de clic al botón "Enviar"
const btnEnviar = document.getElementById("enviar_formulario");

btnEnviar.addEventListener("click", () => {
  // Obtener los valores de los campos del formulario
  const nombre = document.getElementById("nom").value;
  const apellido = document.getElementById("ap").value;
  const email = document.getElementById("e-mail").value;
  const tel = document.getElementById("tel_cel").value;
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



//validacion de formulario

const botonEnviar = document.getElementById('enviar_formulario');

botonEnviar.addEventListener('click', (event) => {
  if (nombre.value === '' || apellido.value === '' || email.value === ''  || telefono.value === '' || isNaN(telefono.value) || fechaSalida.value === '' || fechaRegreso.value === '' || pasajerosMen.value === '' || pasajerosMay.value === '' || destino.value === ''|| motivo.value === ''|| codigo.value === '' || noti.value === '') {
    alert('Por favor, complete todos los campos antes de enviar el formulario.');
    event.preventDefault();
  } else {
    alert('¡Tu solicitud fue registrada con éxito!');
    form.submit();
  }
});


const form = document.querySelector('form');
const nombre = document.querySelector('#nom');
const apellido = document.querySelector('#ap');
const email = document.querySelector('#e-mail');
const telefono = document.querySelector('#tel_cel');
const fechaSalida = document.querySelector('#fechaSalida');
const fechaRegreso = document.querySelector('#fechaRegreso');
const pasajerosMen = document.querySelector('#pMenores');
const pasajerosMay = document.querySelector('#pMayores');
const destino = document.querySelector('#destino');
const motivo = document.querySelector('#Motivo');
const codigo = document.querySelector('#descuento');
const noti = document.querySelector('.notificaciones');
const enviarBtn = document.querySelector('#enviar_formulario');


enviarBtn.addEventListener('click', (event) => {
  event.preventDefault(); // Prevenir el envío del formulario

  // Validar el campo de nombre
  if (nombre.value === '') {
    nombre.parentNode.querySelector('span').textContent = 'Por favor, ingrese su nombre completo';
    nombre.parentNode.querySelector('span').style.color = 'red';
  } else {
    nombre.parentNode.querySelector('span').textContent = '';
  }

  // Validar el campo de apellido
  if (apellido.value === '') {
    apellido.parentNode.querySelector('span').textContent = 'Por favor, ingrese su apellido';
    apellido.parentNode.querySelector('span').style.color = 'red';
  } else {
    apellido.parentNode.querySelector('span').textContent = '';
  }

  // Validar el campo de email
  if (email.value === '') {
    email.parentNode.querySelector('span').textContent = 'Por favor, ingrese su E-mail de contacto';
    email.parentNode.querySelector('span').style.color = 'red';
  } else {
    email.parentNode.querySelector('span').textContent = '';
  }

  // Validar el campo de teléfono
  if (telefono.value === '' || isNaN(telefono.value)) {
    telefono.parentNode.querySelector('span').textContent = 'Por favor, ingrese su número de teléfono correctamente';
    telefono.parentNode.querySelector('span').style.color = 'red';
  } else {
    telefono.parentNode.querySelector('span').textContent = '';
  }

  // Validar el campo de fecha de salida
  if (fechaSalida.value === '' || isNaN(fechaSalida.value)) {
    fechaSalida.parentNode.querySelector('span').textContent = 'Por favor, ingrese la fecha de salida correctamente';
  fechaSalida.parentNode.querySelector('span').style.color = 'red';
  } else {
    fechaSalida.parentNode.querySelector('span').textContent = '';
  }

  // Validar el campo de fecha de regreso
  if (fechaRegreso.value === '' || isNaN(fechaRegreso.value)) {
    fechaRegreso.parentNode.querySelector('span').textContent = 'Por favor, ingrese la fecha de regreso correctamente';
    fechaRegreso.parentNode.querySelector('span').style.color = 'red';
  } else {
    fechaRegreso.parentNode.querySelector('span').textContent = '';
  }

   // Validar el campo de pasajeros menores
  if (pasajerosMen.value === '' || isNaN(pasajerosMen.value)) {
    pasajerosMen.parentNode.querySelector('span').textContent = 'Por favor, ingrese la cantidad de pasajeros menores';
    pasajerosMen.parentNode.querySelector('span').style.color = 'red';
  } else {
  pasajerosMen.parentNode.querySelector('span').textContent = '';
  }

    // Validar el campo de pasajeros mayores
    if (pasajerosMay.value === '' || isNaN(pasajerosMay.value)) {
      pasajerosMay.parentNode.querySelector('span').textContent = 'Por favor, ingrese la cantidad de pasajeros mayores';
      pasajerosMay.parentNode.querySelector('span').style.color = 'red';
    } else {
    pasajerosMay.parentNode.querySelector('span').textContent = '';
    }

    // Validar el campo de destino deseado
    if (destino.value === '') {
      destino.parentNode.querySelector('span').textContent = 'Por favor, ingrese su destino';
      destino.parentNode.querySelector('span').style.color = 'red';
    } else {
    destino.parentNode.querySelector('span').textContent = '';
    }

  // Verificar si todos los campos están completos
  if (nombre.value !== '' && apellido.value !== '' && (email.value) && !isNaN(telefono.value) && fechaSalida.value !=='' && fechaRegreso.value !== '' && pasajerosMen.value !== '' && pasajerosMay.value !== '' && destino.value !== '' && noti.value !== '') {
    form.submit(); // Enviar el formulario
  }
});