
/* JS VENTANA EMERGENTE */

var cookiePopup = document.getElementById("cookie-popup");
var acceptCookies = document.getElementById("accept-cookies");

function hidePopup() {
    cookiePopup.style.display = "none";
}

acceptCookies.addEventListener("click", function() {
    hidePopup();
});

window.onload = function() {
    cookiePopup.style.display = "flex";
};


/* FIN JS VENTANA EMERGENTE */


