document.addEventListener('DOMContentLoaded', function() {
    const dato = localStorage.getItem('datoGuardado');
    
    const spanData = document.getElementById('data');
    
    if (dato) {
        spanData.textContent = dato;
    } else {
        spanData.textContent = 'No hay dato guardado en localStorage';
    }
});