function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  return `${day}, ${hours}:${minutes}`;
}

let realDate = document.querySelector("#realTime");
let currentTime = new Date();
realDate.innerHTML = formatDate(currentTime);

function searh(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city-element");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;

  function showTemperature(response) {
    let temperature = Math.round(response.data.main.temp);
    let temperatureInCity = document.querySelector("#temperature");
    temperatureInCity.innerHTML = `${temperature}`;
    let humidity = document.querySelector("#humidity");
    humidity.innerHTML = response.data.main.humidity;
    let wind = document.querySelector("#wind");
    wind.innerHTML = response.data.wind.speed;
    let pressure = document.querySelector("#pressure");
    pressure.innerHTML = response.data.main.pressure;
    let cloudiness = document.querySelector("#cloudiness");
    cloudiness.innerHTML = response.data.weather[0].description;
  }

  let cityName = document.querySelector("#city-element");
  let city = cityName.textContent;
  let apiUrlcity = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=77d3d633b9876eac8a61018dc1263fb7&units=metric`;

  axios.get(apiUrlcity).then(showTemperature);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searh);

function showPosition(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
}

navigator.geolocation.getCurrentPosition(showPosition);

let apiKey = "77d3d633b9876eac8a61018dc1263fb7";
