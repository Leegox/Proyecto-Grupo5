
function mostrar(){
    document.getElementById('mostrarForm').style.display='block';
    
};

document.getElementById("enviar-formulario").addEventListener("click", function() {

    const logo = new Image();
    logo.src = './assets/hornero logo.png';

    const nombre = document.getElementById('nom').value;
    const apellido = document.getElementById('ap').value;
    const dni = document.getElementById('dni').value;
    const tel = document.getElementById('tel/cel').value;
    const direc = document.getElementById('direc').value;
    const email = document.getElementById('e-mail').value;
    const numPedido = document.getElementById('num').value;

    var doc = new jsPDF();
    pageMargins: [40, 60, 40, 40]

    // Definir el tamaño de la página
    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;

    // Dividir el nombre y el apellido en dos partes
    const fullName = `${nombre} ${apellido}`;
    const fullNameWidth = doc.getTextWidth(fullName);
    const firstName = doc.splitTextToSize(nombre, pageWidth / 2)[0];
    const lastName = doc.splitTextToSize(apellido, pageWidth / 2)[0];

    // Definir la posición inicial del eje y
    let y = (pageHeight - (10*6 + 40)) / 2; // Centrar en el medio de la página

    doc.addImage(logo, 'PNG', (pageWidth / 2) - 20, y, 40, 40); // Centrar el logo en la parte superior

    // Agregar el nombre a la izquierda y el apellido a la derecha
    doc.text(`Nombre: ${nombre}`, 20, y + 50);
    doc.text(`Apellido: ${apellido}`, pageWidth / 2, y + 50);

    // Agregar el DNI y el teléfono en la siguiente línea
    doc.text(`DNI: ${dni}`, 20, y + 60);
    doc.text(`Teléfono: ${tel}`, pageWidth / 2, y + 60);

    // Agregar la dirección y el email en la siguiente línea
    doc.text(`Dirección: ${direc}`, 20, y + 70);
    doc.text(`Email: ${email}`, pageWidth / 2, y + 70);

    // Agregar el número de pedido y los comentarios en la siguiente línea
    doc.text(`Numero de pedido: ${numPedido}`, 20, y + 80);

    doc.text("Recorda guardar este archivo para facilitar el soporte.", 50, y + 90);

    doc.save("mensaje.pdf");
});






  