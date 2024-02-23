// Obtén las referencias a los elementos h3
const jugadoresElement = document.getElementById("jugadores");
const partidasElement = document.getElementById("partidas");
const paisesElement = document.getElementById("paises");

// Establece los valores finales para los números
const jugadoresFinal = 2500;
const partidasFinal = 2000;
const paisesFinal = 6;

// Función para animar un número gradualmente
function animateNumber(element, finalValue) {
    let currentValue = 0;
    const increment = finalValue / 100; // Cambia la velocidad de animación ajustando el divisor (100).

    const interval = setInterval(function () {
        currentValue += increment;
        element.textContent = Math.round(currentValue);

        if (currentValue >= finalValue) {
            clearInterval(interval);
            element.textContent = finalValue;
        }
    }, 10); // Cambia la velocidad de actualización ajustando el segundo argumento.
}

// Llama a la función para animar los números
animateNumber(jugadoresElement, jugadoresFinal);
animateNumber(partidasElement, partidasFinal);
animateNumber(paisesElement, paisesFinal);
