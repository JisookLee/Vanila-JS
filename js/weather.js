const API_KEY = "927cc40ac84b84261766bc92b5f9bd21";
// const nowWeather = document.querySelector("#weather");

function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
console.log(position,lat,lon);
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
console.log(url);
fetch(url)
.then((response) => response.json())
.then((data)=>{
    const cityName = document.querySelector("#weather div:first-child"); 
    const temp = document.querySelector("#weather div:nth-child(2)");
    const weather = document.querySelector("#weather div:last-child");
    console.log(data.name,data.main.temp,data.weather[0].main);
    cityName.innerText = `${data.name}`;
    temp.innerText = `${data.main.temp}℃`;
    weather.innerText = `${data.weather[0].main}`;
    console.log(temp);
    // nowWeather.innerText = `${cityName} ${temp} ${weather}`;
});
}
function OnGeoError() {
alert("Can't find where you are.🥲")
}

navigator.geolocation.getCurrentPosition(onGeoOK,OnGeoError)