import "./style.css"
import searchImg from './imgs/magnify.svg'
import locationIcon from './imgs/map-marker-outline.svg'
import { arrangeData, showError } from "./modules/view.js"
import extractData from "./modules/weatherData.js"
import kelvinToCelsius from './modules/utils/kelvintoCelsius.js'
import getCurrentLocation from "./modules/currentLocation.js"
import validateInput from "./modules/utils/validate.js"

function displayWeather(city, converter){
    extractData(city).then((dataObj) => {
        arrangeData(dataObj, converter);
        document.querySelector('.main').classList.remove('hide')
        document.querySelector('.error').classList.add('hide')
    })
    .catch((err) => showError(err.message))
}

const searchBtn = document.querySelector('.search')
const cityNameInput = document.querySelector('.cityNameInput')

document.querySelector('.status').addEventListener('click',getCurrentLocation)

searchBtn.addEventListener('click', () =>{
    const city = cityNameInput.value.trim();
    if (validateInput(city)) {
        displayWeather(city, kelvinToCelsius)

    }else{
        showError('Please enter a valid city name')
    }
});

window.addEventListener('keydown', (e) =>{
    let city = cityNameInput.value.trim()
    if (e.key === 'Enter' && validateInput(city)) {
        e.preventDefault()
        displayWeather(city, kelvinToCelsius)
    }
});

window.onload = () => displayWeather('Miami',kelvinToCelsius)

export default displayWeather