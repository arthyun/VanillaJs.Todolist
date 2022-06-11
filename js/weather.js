const API_key = "c05e948bb3d36237994eef82bd7ae17e";

function geoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("Your location is", lat, lon);
  const Url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`;
  fetch(Url)
    .then((Response) => Response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `/ ${data.main.temp}℃ ${data.weather[0].main}`;
    });
}

function geoError() {
  alert("Can't find you. Please try again.");
}

navigator.geolocation.getCurrentPosition(geoOk, geoError);
