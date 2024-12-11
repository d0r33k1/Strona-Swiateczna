document.addEventListener('DOMContentLoaded', function () {
    const snowContainer = document.getElementById('snow-container');
    const numberOfSnowflakes = 100;

    for (let i = 0; i < numberOfSnowflakes; i++) {
        let snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.innerText = '❄';  // Używamy emoji płatka śniegu
        snowflake.style.left = Math.random() * 100 + '%';  // Losowa pozycja pozioma
        snowflake.style.animationDuration = Math.random() * 10 + 5 + 's';  // Losowa prędkość
        snowflake.style.animationDelay = Math.random() * 5 + 's';  // Losowe opóźnienie
        snowContainer.appendChild(snowflake);
    }
});
