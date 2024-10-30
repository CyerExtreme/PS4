// orbistoolbox.js
async function executeBin() {
    alert("orbistoolbox.js ha sido ejecutado."); // Alerta para verificar que el JS ha iniciado

    try {
        const response = await fetch('orbistoolbox.bin');
        if (!response.ok) throw new Error('Error al cargar el archivo bin');

        const buffer = await response.arrayBuffer();
        const blob = new Blob([buffer], { type: 'application/octet-stream' });
        const url = URL.createObjectURL(blob);

        // Crear un enlace y hacer clic para descargar el archivo
        const a = document.createElement('a');
        a.href = url;
        a.download = 'orbistoolbox.bin'; // Nombre del archivo a descargar
        document.body.appendChild(a);
        a.click();

        URL.revokeObjectURL(url); // Liberar el objeto URL
        console.log("Payload binario ejecutado correctamente.");
    } catch (error) {
        console.error("Error al ejecutar el archivo bin:", error);
        alert("Error al ejecutar el archivo bin: " + error.message); // Mostrar error en un alerta
    } finally {
        // Mensaje de carga
        const payloadMessage = document.createElement('div');
        payloadMessage.textContent = "Orbis Toolbox cargado";
        payloadMessage.style.position = 'absolute';
        payloadMessage.style.top = '0';
        payloadMessage.style.left = '50%';
        payloadMessage.style.transform = 'translateX(-50%)';
        payloadMessage.style.backgroundColor = 'transparent';
        payloadMessage.style.color = 'white';
        payloadMessage.style.padding = '5px';
        payloadMessage.style.fontSize = '5px';
        payloadMessage.style.fontFamily = 'inherit';
        document.body.appendChild(payloadMessage);

        // Eliminar el mensaje después de 5 segundos
        setTimeout(() => {
            payloadMessage.remove();
        }, 5000);
    }
}

// Esta función debe ser llamada desde tu archivo HTML
function orbisToolboxFunction() {
    executeBin(); // Llamar a la función para ejecutar el archivo bin
}
