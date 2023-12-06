import "./style.css"
import searchImg from './imgs/magnify.svg'
import locationIcon from './imgs/map-marker-outline.svg'
import { arrangeData, showError } from "./modules/view.js"
import extractData from "./modules/weatherData.js"
import kelvinToCelsius from './modules/utils/kelvintoCelsius.js'
import getCurrentLocation from "./modules/currentLocation.js"

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

window.onload = () => displayWeather('Miami',kelvinToCelsius)

export default displayWeather