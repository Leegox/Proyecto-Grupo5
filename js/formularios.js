
function mostrar(){
    document.getElementById('mostrarForm').style.display='block';
    
};
<<<<<<< HEAD

=======
// Agregar evento de clic al botón "Enviar"
document.getElementById("enviar-formulario").addEventListener("click", function() {
    // Crear un nuevo documento PDF
    var doc = new jsPDF();
    
    // Agregar el mensaje de agradecimiento al documento
    doc.text("Muchas gracias por dejarnos tu curriculum vitae", 10, 10);
    
    // Descargar el documento con un nombre específico
    doc.save("mensaje.pdf");
});
>>>>>>> 55d699f56b5a7a0224b31381dceda1a33a90de77
