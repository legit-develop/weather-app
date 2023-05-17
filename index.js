const apikey = "5075c715d1cbf033e72f0647294dd972";

const weatherDataEl = document.getElementById("weather-data");
const cityInputEl = document.getElementById("city-input");

const formEl = document.querySelector("form");

formEl.addEventListener("submit", (e) => {
  //to prevent the form from refreshing
  e.preventDefault();
  const cityValue = cityInputEl.value;
  console.log(cityValue);
});
