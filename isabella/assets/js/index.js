
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); 

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const topic = document.getElementById('topic').value;
        const message = document.getElementById('message').value;

        
        const templateParams = {
            from_name: name,
            from_email: email,
            topic: topic,
            message: message,
        };

        emailjs.send("service_gq19ndi", "template_fapxq9r", templateParams) 
            .then((response) => {
                console.log('Éxito!', response.status, response.text);
                document.getElementById('resultMessage').innerText = 'Mensaje enviado con éxito.';
                document.getElementById('resultMessage').style.display = 'block';
                document.getElementById('contactForm').reset(); 
            }, (error) => {
                console.error('Error:', error);
                document.getElementById('resultMessage').innerText = 'Error al enviar el mensaje.';
                document.getElementById('resultMessage').style.display = 'block';
            });
        }
    )
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
    