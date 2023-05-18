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
  } catch (error) {
    console.log(error);
  }
}
