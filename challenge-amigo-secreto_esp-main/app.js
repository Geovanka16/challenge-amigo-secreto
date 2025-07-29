let listaDeAmigos = [];

function agregarAmigo() {
    let valorNombre = document.getElementById('amigo').value;

    if (valorNombre == '') {
        alert('Por favor, inserte un nombre.');
    } else {
        listaDeAmigos.push(valorNombre);
        console.log(listaDeAmigos);
        limpiarCaja();
    }
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}