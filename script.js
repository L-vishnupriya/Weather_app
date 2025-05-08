function getWeather() {
    const city = document.getElementById('cityInput').value.trim();
    
    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    console.log("City entered:", city); // Debug log

    const apiKey = '4d25c580a5c28d926f488f1a680d36ed'; // Your API key from OpenWeatherMap
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error("City not found");
            return response.json();
        })
        .then(data => {
            const weatherHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
                <p><strong>Weather:</strong> ${data.weather[0].main}</p>
                <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
                <p><strong>Wind:</strong> ${data.wind.speed} m/s</p>
            `;
            document.getElementById('weatherResult').innerHTML = weatherHTML;
        })
        .catch(error => {
            document.getElementById('weatherResult').innerHTML = `<p style="color:red;">${error.message}</p>`;
        });
}
