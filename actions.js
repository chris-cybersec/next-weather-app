//*****************************getCountry
const getCountry = async(country) => {
  // const endpoint = `http://localhost:3000/api/geocoding`
const endpoint = `https://3e52-83-150-56-136.ngrok-free.app/api/geocoding`
  const config = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(country)
}

const res = await fetch(endpoint, config)
return res.json()
}

//*****************************getData
const getData = async(latitude, longitude) => {
  const endpoint = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&current_weather=true&timezone=auto`

  const config = {
    method: "GET",
    headers: {"Content-Type": "application/json"}
  }

const res = await fetch(endpoint, config)
return res.json()
}


export {getCountry, getData}
