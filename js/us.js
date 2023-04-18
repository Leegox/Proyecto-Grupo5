const buttons = document.querySelectorAll(".card-buttons button");
const sections = document.querySelectorAll(".card-section");
const card = document.querySelector(".card");

const handleButtonClick = (e) => {
  const targetSection = e.target.getAttribute("data-section");
  const section = document.querySelector(targetSection);
  targetSection !== "#about"
    ? card.classList.add("is-active")
    : card.classList.remove("is-active");
  card.setAttribute("data-state", targetSection);
  sections.forEach((s) => s.classList.remove("is-active"));
  buttons.forEach((b) => b.classList.remove("is-active"));
  e.target.classList.add("is-active");
  section.classList.add("is-active");
};

buttons.forEach((btn) => {
  btn.addEventListener("click", handleButtonClick);
});





const botonEnviar = document.getElementById('enviarcv');

botonEnviar.addEventListener('click', (event) => {
  if (nombre.value === '' || apellido.value === '' || edad.value === '' || isNaN(edad.value) || telefono.value === '' || isNaN(telefono.value) || email.value === '' || cv.files.length === 0) {
    alert('Por favor, complete todos los campos antes de enviar el formulario.');
    event.preventDefault();
  } else {
    alert('¡Gracias por enviarnos tu CV, fue registrado con éxito!');
    form.submit();
  }
});


const form = document.querySelector('form');
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const edad = document.querySelector('#edad');
const telefono = document.querySelector('#telefono');
const email = document.querySelector('#email');
const cv = document.querySelector('#cv');
const enviarBtn = document.querySelector('#enviarcv');

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
  if (edad.value === '' || isNaN(edad.value)) {
    edad.parentNode.querySelector('span').textContent = 'Por favor, ingrese su edad correctamente';
    edad.parentNode.querySelector('span').style.color = 'red';
  } else {
    edad.parentNode.querySelector('span').textContent = '';
  }

  // Validar el campo de teléfono
  if (telefono.value === '' || isNaN(telefono.value)) {
    telefono.parentNode.querySelector('span').textContent = 'Por favor, ingrese su número de teléfono correctamente';
    telefono.parentNode.querySelector('span').style.color = 'red';
  } else {
    telefono.parentNode.querySelector('span').textContent = '';
  }

  // Validar el campo de correo electrónico
  if (email.value === '') {
    email.parentNode.querySelector('span').textContent = 'Campo obligatorio';
    email.parentNode.querySelector('span').style.color = 'red';
  } else {
    email.parentNode.querySelector('span').textContent = '';
  }

  // Validar el campo de currículum
  if (cv.files.length === 0) {
    cv.parentNode.querySelector('span').textContent = 'Por favor, cargue su currículum';
    cv.parentNode.querySelector('span').style.color = 'red';
  } else {
    cv.parentNode.querySelector('span').textContent = '';
  }

  // Verificar si todos los campos están completos
  if (nombre.value !== '' && apellido.value !== '' && !isNaN(edad.value) && !isNaN(telefono.value) && email.value !== '' && cv.files.length > 0) {
    form.submit(); // Enviar el formulario
  }
});
