const https = require('node:https')
const latitude = 29.1026;
const longitude = -110.97732;
const API_URL = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&daily=weathercode,sunrise,sunset,windspeed_10m_max&timezone=America%2FSao_Paulo`;

const request = https.request(API_URL, (response) => {
    let data = ''

    response.on('data', (chunk) =>{
        data = data + chunk.toString()
    })

    response.on('end', () =>{
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('An error ', error)
})

request.end()