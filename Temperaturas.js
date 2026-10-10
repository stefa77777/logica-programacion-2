function convertirTemperaturas() {
    const celsius = parseFloat(document.getElementById('celsius').value);

    if (isNaN(celsius)) {
        alert("Por favor, ingresa una temperatura en Celsius válida.");
    } else {
        const fahrenheit = (celsius * 9/5) + 32;
        const kelvin = celsius + 273.15;

        alert(
            `--- RESULTADOS ---\n` +
            `• Temperatura en Celsius: ${celsius}°C\n` +
            `• Temperatura en Fahrenheit: ${fahrenheit.toFixed(2)}°F\n` +
            `• Temperatura en Kelvin: ${kelvin.toFixed(2)}K`
        );
    }
}

        alert(
            `--- RESULTADOS ---\n` +
            `• Temperatura en Celsius: ${celsius}°C\n` +
            `• Temperatura en Fahrenheit: ${fahrenheit.toFixed(2)}°F\n` +
            `• Temperatura en Kelvin: ${kelvin.toFixed(2)}K`
        );
