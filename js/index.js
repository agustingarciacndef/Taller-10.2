document.addEventListener('DOMContentLoaded', function() {
    const inputText = document.getElementById('inputText');
    const buttonText = document.getElementById('buttonText');
    
    buttonText.addEventListener('click', function() {
        const texto = inputText.value.trim();
        
        if (texto !== '') {
            localStorage.setItem('datoGuardado', texto);
            
            inputText.value = '';
            
            alert('Dato guardado correctamente!');
        } else {
            alert('Por favor, ingresa un texto antes de guardar');
        }
    });
});