'use strict'


// Con este seleccionas el elemento de la vista HTML, haciendo referencia al atributo ID del elemento dentro del documento.
const tabla = document.getElementById("tablaJugadores");
const botonAgregar = document.getElementById('botonAgregar')

console.log(tabla);

const agregarJugador = () => {
    // Aca insertamos valor por teclado a las variables.
    let jugador = prompt('Ingrese su Nombre');
    let nivel = prompt('Ingrese su Nivel');
    let pais = prompt('Ingrese su Pais de Origen');
    
    // Aca creamos un elemento de html especificado en el parametro del metodo, y lo guardamos en una variable.
    let tablaRow = document.createElement('tr');
    let tablaRowJugador = document.createElement('td');
    let tablaRowNivel = document.createElement('td');
    let tablaRowPais = document.createElement('td');
    let tablaRowLiga = document.createElement('td');
    
    if (parseInt(nivel) >= 10){
        tablaRowLiga.innerText = 'WPL'
    }
    else{
        tablaRowLiga.innerText = 'WQA'
    }
    tablaRow.setAttribute("id", jugador.toLowerCase());
    // Insertamos valor de texto a los nodos que creamos mas arriba, entonces quedarian <td>TEXTO</td>
    tablaRowJugador.innerText = jugador;
    tablaRowNivel.innerText = nivel;
    tablaRowPais.innerText = pais;
    
    tablaRow.appendChild(tablaRowJugador);
    tablaRow.appendChild(tablaRowNivel);
    tablaRow.appendChild(tablaRowPais);
    tablaRow.appendChild(tablaRowLiga);
    
    tabla.appendChild(tablaRow);
    console.log(tablaRowJugador.innerText);
} 

const borrarJugador = () => {
    let jugador = prompt("Ingrese el jugador que quiere eliminar");
    const jugadorEliminar = document.querySelector("#"+jugador.toLowerCase())
    jugadorEliminar.remove();
    alert("Jugador Eliminado");
    
    // // tablaRowJugador.innerText = ' ';
    // // tablaRowNivel.innerText = ' ';
    // // tablaRowPais.innerText = ' ';
    
    console.log();
        
    // tabla.remove(tablaRow);

    
}



botonAgregar.addEventListener('click',() => agregarJugador())

botonBorrar.addEventListener('click',() => borrarJugador())