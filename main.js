
//user input.
// get user data.

const getDataFromForm = () => {
    const city = document.getElementById('city');
}

//getting data from the API.
//location
const getWeatherData =  async (city) => {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=2a892fac24fe403aae2204657241103&q=${city}`);
    const data = await response.json();
    console.log(data);
    console.log(response);
    const getWindInfo =  () =>{
        let wind = {
            direction: data.current.wind_dir,
            speedkph: data.current.wind_kph,
            speedmph: data.current.wind_mph
        }
        console.log(wind);
    }
    getWindInfo(); 
  
    //weather
    
    const getCurrentWeather = () => {
        let currentWeather = data.current.condition;
        console.log(currentWeather);
       // container.textContent=`current weather : ${data.current.condition.text}`;
        
    }
    getCurrentWeather();
    
    //
    
    const getTemperature = () =>{
        let temperature = {
            celcius: data.current.temp_c,
            faherent: data.current.temp_f
        }
        console.log(temperature);
    }
    getTemperature();
    
    //
    const getLocationInfo = () => {
        let locationData = {
            name: data.location.name,
            country: data.location.country,
            region: data.location.region,
            lattitude: data.location.lat,
            longitude: data.location.lon
        }
        console.log(locationData);
    }
    getLocationInfo();
    
    const getHumidity = () => {
        let humidityData = {
            humidity: data.current.humidity
        }
        console.log(humidityData);
    }
    getHumidity();

    const currentLocation = document.getElementById('currentLocation');
    const currentCondition = document.getElementById('currentCondition');
    const temperature = document.getElementById('temperature');
    const humidity = document.getElementById('humidity');
    const windCondition = document.getElementById('windCondition');
    currentLocation.innerHTML = `<p>${data.location.name},${data.location.country}</p>`;
    currentCondition.innerHTML = `
    <h3>Current Condtion </h3>
    <img src=${data.current.condition.icon}>
    <p>${data.current.condition.text}</p>`;
    temperature.innerHTML = `
    <h4>temperature</h4>
    <p>${data.current.temp_c} &deg;C </p>
    <p>${data.current.temp_f} F</p>`;
    humidity.innerHTML = `
    <h4>humidity</h4>
    <p>${data.current.humidity}%<p>`;     
    windCondition.innerHTML = `
    <p>wind direction: ${data.current.wind_dir}</p>
    <p>wind speed: ${data.current.wind_mph}mph ${data.current.wind_kph}kph</p>`
    console.log(container);
}


// form event

const form = document.querySelector('form');
form.addEventListener('submit',(e) => {
    e.preventDefault();
    console.log(city.value);
    getWeatherData(city.value);
   
});















