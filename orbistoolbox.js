// orbistoolbox.js
async function executeBin() {
    alert("orbistoolbox.js ha sido ejecutado."); // Alerta para verificar que el JS ha iniciado

    try {
        const response = await fetch('orbistoolbox.bin');
        if (!response.ok) throw new Error('Error al cargar el archivo bin');

        const buffer = await response.arrayBuffer();
        const blob = new Blob([buffer], { type: 'application/octet-stream' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = 'orbistoolbox.bin';
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();

        URL.revokeObjectURL(url);
        console.log("Payload binario ejecutado correctamente.");
    } catch (error) {
        console.error("Error al ejecutar el archivo bin:", error);
    } finally {
        // Crear el mensaje "Payload cargado" con el mismo estilo que el mensaje "Creado por..."
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