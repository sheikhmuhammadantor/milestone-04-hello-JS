/*
Celsius to Fahrenheit       - ° F = 9/5 ( ° C) + 32
Kelvin to Fahrenheit	    - ° F = 9/5 (K - 273) + 32
Fahrenheit to Celsius	    - ° C = 5/9 (° F - 32)
Celsius to Kelvin	        - K = ° C + 273
Kelvin to Celsius	        - ° C = K - 273
Fahrenheit to Kelvin	    - K = 5/9 (° F - 32) + 273
*/

function celsiusToFahrenheit(celsius) {
    return 1.8 * celsius + 32;
}

const fahrenheit = celsiusToFahrenheit(-40);
console.log(fahrenheit);
