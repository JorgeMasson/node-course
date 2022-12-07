const request = require("request");
const chalk = require("chalk");

const apiRequest = (coordinates, callback) => {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${coordinates.lat}&longitude=${coordinates.lon}&hourly=temperature_2m&daily=weathercode,sunrise,sunset,windspeed_10m_max&timezone=America%2FSao_Paulo`;
  /* request({ url: apiURL, json: true }, (error, response) => {
      if (!error) {
        if (!response.body.error) {
          callback(response.body);
        } else {
          callback(chalk.red.bold(response.body.reason));
        }
      } else {
        callback(chalk.red.bold(`${error.code} ${error.hostname}`));
      }
    }); */
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      if (!json.error) {
        callback(json);
      } else {
        console.log(chalk.red.bold(json.reason));
      }
    });
};

module.exports = apiRequest;
