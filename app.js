document.addEventListener("DOMContentLoaded", () => {
    const inputAmigo = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");
    const amigos = [];

    document.querySelector(".button-add").addEventListener("click", agregarAmigo);
    document.querySelector(".button-draw").addEventListener("click", sortearAmigo);

    function agregarAmigo() {
        const nombre = inputAmigo.value.trim();

        if (!nombre) {
            alert("Por favor, inserte un nombre válido.");
            return;
        }

        if (amigos.includes(nombre)) {
            alert("Este nombre ya ha sido agregado.");
            return;
        }

        amigos.push(nombre);
        actualizarLista();
        inputAmigo.value = "";
        inputAmigo.focus();
    }

    function actualizarLista() {
        listaAmigos.innerHTML = "";
        amigos.forEach(amigo => {
            const li = document.createElement("li");
            li.textContent = amigo;
            listaAmigos.appendChild(li);
        });
    }

    function sortearAmigo() {
        if (amigos.length === 0) {
            alert("Debe agregar al menos un nombre antes de sortear.");
            return;
        }
        
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSecreto = amigos[indiceAleatorio];
        resultado.innerHTML = `<p>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong> 🎉</p>`;
    }
});