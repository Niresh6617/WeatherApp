document.getElementById('getWeatherBtn').addEventListener('click', function () {
    const city = document.getElementById('cityInput').value;
    const apiKey = '5112a342e640a5eef9d94b7c9f07873a'; // Replace with your actual OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const weatherInfo = document.getElementById('weatherInfo');
                weatherInfo.classList.add('visible');
                weatherInfo.innerHTML = `
                    <h2>${data.name}, ${data.sys.country}</h2>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                `;
            } else {
                alert('City not found. Please enter a valid city name.');
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
});
