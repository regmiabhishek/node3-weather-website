const request = require ('request')

const forecast = ( latitude, longitude , callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=3d4b223d952576ed31010977e2b9bae7&query='+latitude +','+ longitude +'&units=f'
    request({ url  , json: true}, (error, {body}) => {
        if(error){
            callback('unable to connect to weather services!', undefined)
        }else if (body.error){
            callback('Unable to find location. Try another search.',undefined)
        }else{
            callback(undefined , body.current.weather_descriptions[0] + ' .It is currently ' + body.current.temperature + ' degrees out.  It feels like ' + body.current.feelslike + ' degrees though also the precipitation for the day is ' + body.current.precip )
        }
    })
}

module.exports = forecast