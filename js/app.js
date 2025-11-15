const input = document.querySelector('#temp-celsius');
const btn = document.querySelector('#btnCalc');
const kelvinResult = document.querySelector('.kelvin');
const fahrenheitResult = document.querySelector('.fahrenheit');

function tempConverter() {
    let celsius = input.value;
    clearScreen();
    
    celsius = parseFloat(celsius);
    let kelvin = celsius + 273.15;
    let fahrenheit = celsius * (9/5) + 32; 
    kelvinResult.innerText = `${kelvin} °K`;
    fahrenheitResult.innerText = `${fahrenheit} °F`;
    
    document.getElementById('form').reset();
}

btn.addEventListener('click', tempConverter);

function clearScreen() {
    kelvinResult.innerText = '';
    fahrenheitResult.innerText = '';
}