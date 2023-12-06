import displayWeather from "..";
import { showError } from "./view";
import kelvinToCelsius from "./utils/kelvintoCelsius";
import { get } from "lodash";

function getCurrentLocation(){
    if(!navigator.geolocation){
        showError("Geolocation is not supported by your browser")
    } else {
        navigator.geolocation.getCurrentPosition(success, () =>
        showError('Unable to retrieve your location')
        )
    }
}
async function success(position){
    const { latitude, longitude } = position.coords
    let response = await fetch(
        `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&APPID=${process.env.API_KEY}`,
        {mode : 'cors'}
    )
    let data = await response.json()
    displayWeather(data[0].name, kelvinToCelsius)
}

export default getCurrentLocation;