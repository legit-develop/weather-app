const apikey = "5075c715d1cbf033e72f0647294dd972";

const weatherDataEl = document.getElementById("weather-data");
const cityInputEl = document.getElementById("city-input");

const formEl = document.querySelector("form");
const tempEl = document.querySelector(".temperature");
formEl.addEventListener("submit", (e) => {
  //to prevent the form from refreshing
  e.preventDefault();
  const cityValue = cityInputEl.value;
  console.log(cityValue);
  getWeatherData(cityValue);
});

async function getWeatherData(cityValue) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`
    );
    if (!response.ok) {
      throw new Error("NetWork response not ok");
    }
    const data = await response.json();
    console.log(data);
    const temperature = Math.round(data.main.temp);
    console.log(temperature);
    //tempEl.innerHTML = `${temperature} C`;
    const description = data.weather[0].description;
    console.log(description);
    const icon = data.weather[0].icon;
    console.log(icon);
    const details = [
      `Feels like: ${Math.round(data.main.feels_like)}`,
      `Humidity: ${data.main.humidity}%`,
      `Wind speed: ${data.wind.speed} m/s`,
    ];
    weatherDataEl.querySelector(".icon").innerHTML = `<img
    src="http://openweathermap.org/img/wn/${icon}.png"
    alt="weather image"
  />`;
    weatherDataEl.querySelector(
      ".temperature"
    ).textContent = `${temperature} C`;
    weatherDataEl.querySelector(".description").textContent = description;
    weatherDataEl.querySelector(".details").innerHTML = details
      .map((details) => `<div>${details}</div>`)
      .join("");
  } catch (error) {
    console.log(error);
  }
}
