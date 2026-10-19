function calcularFactorial() {
    const numero = parseInt(document.getElementById('numero').value);
    const contenedorResultado = document.getElementById('resultado');

    if (isNaN(numero)) {
        contenedorResultado.textContent = "Por favor, ingresa un número válido.";
        contenedorResultado.style.color = "red";
    } else if (numero < 0) {
        contenedorResultado.textContent = "El factorial no está definido para números negativos.";
        contenedorResultado.style.color = "red";
    } else {
        let factorial = 1;
        for (let i = 1; i <= numero; i++) {
            factorial *= i;
        }
        contenedorResultado.textContent = `El factorial de ${numero} es: ${factorial}`;
        contenedorResultado.style.color = "#333";
    }
}