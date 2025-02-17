// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//trim: TRIM elimina todos los espacios de un cadena de texto, dejando solo un espacio entre cada palabra.
let amigos = []; 

function addFriend() {
    let inputfriend = document.getElementById("amigo");
    let nombre = inputfriend.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    limpiarInput();
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo, index) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        li.classList.add("amigo-item"); 

        let botonEliminar = document.createElement("span");
        botonEliminar.textContent = "×";
        botonEliminar.classList.add("boton-eliminar");
        botonEliminar.onclick = () => eliminarAmigo(index); // CORREGIDO

        li.appendChild(botonEliminar);
        lista.appendChild(li);
    });
}

function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarLista();
}

function limpiarInput() {
    document.getElementById("amigo").value = "";
}

function limpiarLista() {
    amigos = [];
    document.getElementById("resultado").innerHTML = "";
    actualizarLista();
}

function sortearAmigo() {
    let amount = parseInt(document.getElementById("cantidad").value, 10);

    if (isNaN(amount) || amount <= 0) {
        alert("Ingresa un número válido mayor a 0.");
        return;
    }

    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    if (amount > amigos.length) {
        alert("No hay suficientes amigos en la lista para sortear esa cantidad.");
        return;
    }

    let amigosSorteados = obtenerSorteo(amount);
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = amigosSorteados.map(amigo => `<li>🎉 ${amigo} ha sido seleccionado! 🎉</li>`).join("");
    
}

function obtenerSorteo(amount) {
    let copiaAmigos = [...amigos];
    let seleccionados = [];

    for (let i = 0; i < amount; i++) {
        let indiceAleatorio = Math.floor(Math.random() * copiaAmigos.length);
        seleccionados.push(copiaAmigos[indiceAleatorio]);
        copiaAmigos.splice(indiceAleatorio, 1);
    }

    return seleccionados;
}
