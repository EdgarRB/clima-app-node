const axios = require('axios');

const getClima = async(lat, lon) => {
    try {
        const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=22907459f04bffb03657d4d10114521c&units=metric`);
        return resp.data.main.temp;
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    getClima
}