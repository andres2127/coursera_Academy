function showweatherDetails(event) {
  event.preventDefault(); // Evita que se recargue el formulario

  const latitude = document.getElementById('latitude').value;
  const longitude = document.getElementById('longitude').value;
  const apiKey = '06ac2de5758dda3ca38f7ff17aab3b32';
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = `
        <h2>Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp} &#8451;</p>
        <p>Weather: ${data.weather[0].description}</p>
      `;
    })
    .catch(error => {
      console.error('Error fetching weather:', error);
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = `<p>Falló al obtener el clima. Por favor, inténtalo de nuevo.</p>`;
    });
}

document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);
