document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault(); //previene el comportamiento predeterminado del formulario de enviar una solicitud HTTP y recargar la página 
  
    const formData = {
      nombre: document.getElementById('nombre').value,
      apellido: document.getElementById('apellido').value,
      fechaNacimiento: document.getElementById('fechaNacimiento').value,
    };
  
    const url = 'https://jsonplaceholder.typicode.com/users';
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    };
  
    fetch(url, requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log('Respuesta del servidor:', data);
        
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
  