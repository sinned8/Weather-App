import "./style.css"
import searchImg from './imgs/magnify.svg'
import locationIcon from './imgs/map-marker-outline.svg'
import { arrangeData, showError } from "./modules/view.js"
import extractData from "./modules/weatherData.js"
import kToC from './modules/utils/kelvintoCelsius.js'

function displayWeather(city, converter){
    extractData(city).then((dataObj) => {
        arrangeData(dataObj, converter);
        document.querySelector('.main').classList.remove('hide')
        document.querySelector('.error').classList.add('hide')
    })
    .catch((err) => showError(err.message))
}

window.onload = () => displayWeather('miami',kToC)

export default displayWeather