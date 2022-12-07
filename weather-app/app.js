const request = require("request");
const chalk = require("chalk");
const api = require('./utils/api')

const latitude = 29.1026;
const longitude = -110.97732;
const API_URL = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&daily=weathercode,sunrise,sunset,windspeed_10m_max&timezone=America%2FSao_Paulo`;

// Print a small forecast to the user
//
// 1. Print "It is currently 58.55 degrees out. There is a 0% chance of rain"
// 2. Test your work

/* request({ url: API_URL, json: true }, (error, response) => {
  if (!error) {
    if (!response.body.error) {
      response.body.hourly.temperature_2m.forEach((item, index) =>
              console.log(
                `${chalk.yellow(index + 1)} - It is currently ${chalk.yellow.bold(
                  item
                )} degrees out at ${chalk.yellow.bold(
                  response.body.hourly.time[index].slice(
                    response.body.hourly.time[index].indexOf("T") + 1
                  )
                )} hours on ${chalk.yellow.bold(
                  response.body.timezone
                )} time zone, with an elevation of ${chalk.yellow.bold(
                  response.body.elevation
                )}`
              )
            );
      response.body.daily.time.map((item, index) => {
        console.log(
          `${chalk.blue(index + 1)} - Wind speed on ${chalk.blue.bold(
            item
          )} at ${chalk.blue.bold(
            response.body.daily.sunrise[index].slice(
              response.body.daily.sunrise[index].indexOf("T") + 1
            )
          )} hours of ${chalk.blue.bold(
            response.body.daily.windspeed_10m_max[index]
          )} ${chalk.blue.bold(response.body.daily_units.windspeed_10m_max)}`
        );
      });
    } else {
      console.log(chalk.red.bold(response.body.reason));
    }
  } else {
    console.log(chalk.red(error.code));
  }
}); */

/* console.log('Starting')

setTimeout(() => {
    console.log('2 Second Timer')
}, 2000)

setTimeout(() => {
    console.log('0 Second Timer')
}, 0)

console.log('Stopping') */

api({lat: latitude, lon: longitude}, (data) => {
  console.log(data);
});

