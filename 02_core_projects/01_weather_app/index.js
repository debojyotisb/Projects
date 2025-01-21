// API Key and base URL for OpenWeatherMap
const apiKey = 'f9cccd3eaebd9017fa0a8d8e922afc44'; // Replace with your actual API key
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

// DOM elements
const searchButton = document.getElementById('searchButton');
const cityInput = document.getElementById('cityInput');
const weatherInfo = document.getElementById('weatherInfo');

// Function to fetch weather data
async function fetchWeather(city) {
  try {
    const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
    if (!response.ok) {
      throw new Error('City not found');
    }
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    weatherInfo.innerHTML = error.message;
    weatherInfo.style.backgroundColor = '#fff';
  }
}

// Function to display weather data
function displayWeather(data) {
  const temperature = data.main.temp;
  const description = data.weather[0].description;
  const city = data.name;
  const humidity = data.main.humidity;
  const windSpeed = data.wind.speed;
  const icon = data.weather[0].icon; 
  const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString(); 
  const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString(); 
  const weatherCondition = data.weather[0].main.toLowerCase(); // e.g., "clear", "rain", "clouds"

  weatherInfo.innerHTML = `
    <h2>Weather in ${city}</h2>
    <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="Weather Icon" />
    <p>Temperature: ${temperature}°C</p>
    <p>Description: ${description}</p>
    <p>Humidity: ${humidity}%</p>
    <p>Wind Speed: ${windSpeed} km/h</p>
    <p>Sunrise: ${sunrise}</p>
    <p>Sunset: ${sunset}</p>
  `;

  const animationContainer = document.createElement('div');
  animationContainer.classList.add('weather-animation');
  // Add class based on the weather condition
  animationContainer.classList.add(`icon-${weatherCondition}`);

  // Append to the weather info
  weatherInfo.appendChild(animationContainer);


  // Change the background color based on temperature
  if (temperature < 10) {
    weatherInfo.style.backgroundColor = '#a0d8ef'; // Cool blue
  } else if (temperature < 25) {
    weatherInfo.style.backgroundColor = '#fff3b0'; // Warm yellow
  } else {
    weatherInfo.style.backgroundColor = '#ffb3b3'; // Hot red
  }
}

// Event listener for the search button
searchButton.addEventListener('click', () => {
  const cityName = cityInput.value.trim();
  if (cityName) {
    fetchWeather(cityName);
  } else {
    weatherInfo.innerHTML = 'Please enter a city name.';
    weatherInfo.style.backgroundColor = '#fff';
  }
});


//

