export default function fetchData(city) {
    const response  = fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${process.env.API_KEY}`,
    { mode: "cors" }
    )
    return response
}