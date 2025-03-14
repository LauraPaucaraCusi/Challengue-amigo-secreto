// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    const lista = document.getElementById("listaAmigos");
    
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }
    
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }
    
    amigos.push(nombre);
    
    const item = document.createElement("li");
    item.textContent = nombre;
    lista.appendChild(item);
    
    input.value = "";
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos dos participantes para realizar el sorteo.");
        return;
    }
    
    let sorteados = [...amigos];
    let resultado = [];
    
    for (let i = 0; i < amigos.length; i++) {
        let opciones = sorteados.filter(nombre => nombre !== amigos[i]);
        
        if (opciones.length === 0) {
            alert("No se pudo realizar el sorteo. Intente nuevamente.");
            return;
        }
        
        let indiceAleatorio = Math.floor(Math.random() * opciones.length);
        let asignado = opciones[indiceAleatorio];
        
        resultado.push(`${amigos[i]} → ${asignado}`);
        sorteados.splice(sorteados.indexOf(asignado), 1);
    }
    
    mostrarResultado(resultado);
}

function mostrarResultado(resultado) {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";
    
    resultado.forEach(asignacion => {
        const item = document.createElement("li");
        item.textContent = asignacion;
        listaResultado.appendChild(item);
    });
}
