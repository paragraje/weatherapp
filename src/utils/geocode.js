const request = require('request');

const geocode = (address, callback) =>{
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoicGFyYWdyYWplIiwiYSI6ImNrOWw2ZG93cTAxajEzbXA1ZzhwMG0yd3QifQ.sj-wucUR0LKmbC4I7dqt-w';

  request({ url , json: true}, (error, response)=>{

      if(error){
       callback('Unable to connect to weather application at this time, Check your internet connection', undefined);
    }else if(response.body.features.length === 0) {
       callback('cannot find the location', undefined);
    }else{
        callback(undefined, {
          latitude : response.body.features[0].center[1],
          longitude : response.body.features[0].center[0],
          location : response.body.features[0].place_name
        });
    }
  });

}

module.exports = geocode ;
