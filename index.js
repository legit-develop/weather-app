const apikey = "5075c715d1cbf033e72f0647294dd972";

const weatherDataEl = document.getElementById("weather-data");
const cityInputEl = document.getElementById("city-input");

const formEl = document.querySelector("form");

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
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;
    const details = [
      `Feels like: ${Math.round(data.main.feels_like)}`,
      `Humidity: ${data.main.humidity}`,
      `Wind speed: ${data.wind.speed}`,
    ];
  } catch (error) {
    console.log(error);
  }
}
