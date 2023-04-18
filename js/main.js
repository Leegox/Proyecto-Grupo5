/* CAMBIO DE IMAGENES JUNTO CON TEXTO, AVIONES */

let imgsAviones = [
  "./assets/AVIONES/avion1930.jpeg",
  "./assets/AVIONES/avion1960.jpeg",
  "./assets/AVIONES/avion1980.jpeg",
  "./assets/AVIONES/avion1997.jpeg",
  "./assets/AVIONES/avion2009.jpeg",
  "./assets/AVIONES/avion2016.jpeg",
  "./assets/AVIONES/avion2023.jpeg",
]; // Lista de imágenes
let textosAviones = [
  "Primer modelo de avión de la compañía, utilizado hasta la década de los ‘60." /* texto avion1930 */,
  "Modelo de Avión utilizado por la compañía entre las décadas de los '60 y los '80." /* texto avion1960 */,
  "Nuevo modelo de avión utilizado por la compañía entre la década de los '80 y el año 2000." /* texto avion1980 */,
  "Modelo de avión incorporado en el año 1997 y utilizado hasta los años 2000." /* texto avion1997 */,
  "Un nuevo modelo de avión mejor equipado, incorporado en 2009 y utilizado hasta el año 2015." /* texto avion2009 */,
  "Modelo de avión utilizado desde comienzos del año 2016, operando hasta el día de hoy." /* texto avion2016 */,
  "Incorporado en este 2023, el modelo de avión más nuevo de la compañía, de última generación." /* texto avion1980 */
]; // Lista de textos asociados a cada imagen
let i = 0; // Índice actual de la imagen

function cambiarImagenAviones() {
  let imgAvion = document.getElementById("imgAvion");
  let txtAvion = document.getElementById("textoAvion");
  imgAvion.src = imgsAviones[i]; // Cambiar la imagen
  txtAvion.textContent = textosAviones[i]; // Cambiar el texto asociado
  i++;
  if (i == imgsAviones.length) {
    i = 0;
  }
}

setTimeout(() => {
  setInterval(cambiarImagenAviones, 5000);
}, 1000); // Llamar a la función cada 15 segundos

/* CAMBIO DE IMAGENES JUNTO CON TEXTO, AVIONES */

/* JS VENTANA EMERGENTE */

let cookiePopup = document.getElementById("cookie-popup");
let acceptCookies = document.getElementById("accept-cookies");

function hidePopup() {
  cookiePopup.style.display = "none";
}

acceptCookies.addEventListener("click", function () {
  hidePopup();
});

window.onload = function () {
  cookiePopup.style.display = "flex";
};

/* FIN JS VENTANA EMERGENTE */







function mostrarAlerta(event) {
  if (event.type === "click") {
    alert("¡Gracias por puntuarnos!");
  }
}
