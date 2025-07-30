let listaDeAmigos = [];

function agregarAmigo() {
    let valorNombre = document.getElementById('amigo').value;

    if (valorNombre == '') {
        alert('Por favor, inserte un nombre.');
    } else {
        listaDeAmigos.push(valorNombre);
        limpiarCaja();
        actualizarLista();
    }
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < listaDeAmigos.length; i++) {
        let amigo = listaDeAmigos[i];
        let nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = amigo;
        lista.appendChild(nuevoElemento);
    } 
}

