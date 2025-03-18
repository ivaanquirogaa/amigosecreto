// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del numero secreto';
let amigos = [];

function agregarAmigo(){
    let input = document.getElementById('amigo');
    let nombre = input.value.trim();

    if (nombre !== ''){
        amigos.push(nombre);
        actualizarLista();
        input.value = '';

    }
    else{
        alert('Por favor ingresa un nombre valido');

    }
}
    function actualizarLista() {
        let lista = document.getElementById("listaAmigos"); 
        lista.innerHTML = ""; 
    
        amigos.forEach(amigo => {
            let li = document.createElement("li"); 
            li.textContent = amigo; 
            lista.appendChild(li); 
        });
}


function sortearAmigo() {
    if (amigos.length === 0) { 
        alert("Agrega al menos un amigo antes de sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length); 
    let amigoSorteado = amigos[indiceAleatorio]; 

    // Mostrar el nombre en la lista de resultados
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}