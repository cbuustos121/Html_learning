function agregarBacon() {
    var lista = document.getElementById('lista');
    var nuevoItem = document.createElement('li');
    nuevoItem.innerText = 'bacon 1';
    lista.appendChild(nuevoItem);
    
}

// Añadimos el evento click al botón de bacon
document.getElementById('baconButton').addEventListener('click', agregarBacon);