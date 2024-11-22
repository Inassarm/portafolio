emailjs.init("YblM1Y8k4CKaHIFg0");
    
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de manera tradicional

    // Obtención de valores del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const topic = document.getElementById('topic').value;
    const message = document.getElementById('message').value;

    // Parámetros que se enviarán en el correo
    const templateParams = {
        from_name: name,
        from_email: email,
        topic: topic,
        message: message,
    };

        // Asegúrate de que el 'service_id' y 'template_id' estén correctamente configurados
        emailjs.send("service_vf6i8g3", "template_n0frdmn", templateParams)
    .then((response) => {
        console.log('Éxito!', response.status, response.text);

        // Display success SweetAlert
        Swal.fire({
            icon: 'success',
            title: '¡Correo enviado!',
            text: 'Tu mensaje ha sido enviado con éxito.',
            confirmButtonText: '¡Genial!'
        });

        // Show success message in the result section
        document.getElementById('resultMessage').innerText = 'Mensaje enviado con éxito.';
        document.getElementById('resultMessage').style.display = 'block';

        // Reset form fields manually
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('topic').value = '';
        document.getElementById('message').value = '';
    }, (error) => {
        console.error('Error:', error);

        // Display error SweetAlert
        Swal.fire({
            icon: 'error',
            title: '¡Oops!',
            text: 'Error al enviar el mensaje. Intenta nuevamente.',
            confirmButtonText: 'Cerrar'
        });

        // Show error message in the result section
        document.getElementById('resultMessage').innerText = 'Error al enviar el mensaje.';
        document.getElementById('resultMessage').style.display = 'block';
    });

    });
        // 2. Función para cambiar el idioma dependiendo del checkbox
        var check = document.querySelector(".check");
        
        if (check) {
            check.addEventListener('click', idioma);  // Asegúrate de que el checkbox existe
        }
        
        function idioma() {
            let id = check.checked;
            console.log("Checkbox checked:", id); // Para depuración
        
            if (id) {
                // Redirige al index en inglés si el checkbox está marcado
                window.location.href = "./indexEN.html";  
            } else {
                // Redirige al index en español si el checkbox no está marcado
                window.location.href = "./index.html";  
            }
        }
    