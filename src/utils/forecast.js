const request = require('request');

const chalk = require('chalk');

const forecast = (lat, long, callback) => {
const url = 'https://api.darksky.net/forecast/5b60798b721103882f06b9c4bc5736f5/' +lat + ',' +long ;

request({ url:url , json: true}, (error, response) =>{
  if(error){
    callback('Unable to connect with weather application', undefined);
  }else if(response.body.error){
    callback('unable to find location', undefined);
  }else{
    callback(undefined, response.body.daily.data[0].summary +' Is is Currently '+ response.body.currently.temperature+' F degrees out. There is a '+  response.body.currently.precipProbability+ '% chance of rain.');
  }
});

}

module.exports = forecast;
