const https = require('https');

const getForecast =  function () {
    return new Promise(function (resolve, reject){
        https.get('https://api.openweathermap.org/data/2.5/weather?q=Munich&appid=30173929657489149776555c35a4e6cc', function(res){
            res.on('data', function(data){
                var data = JSON.parse(data);
                console.log(data.weather)
                resolve(data.weather);
            });
        }).end();
    });
}
getForecast();
module.exports = getForecast;