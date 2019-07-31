const axios = require('axios');

const getLugarlatLong = async(dir) => {
    try {
        const encodedUlr = encodeURI(dir);


        /*Se puede añadir un timeout pero para el ejercicio no hace falta*/
        const instance = axios.create({
            baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUlr}`,
            headers: { 'X-RapidAPI-Key': '5b8e1b4982msh1ac1b761d13f95dp106b56jsna84e9662e697' }
        });

        const resp = await instance.get();

        if (resp.data.Results.length === 0) {
            throw new Error(`No hay resultados para ${dir}`);
        }

        const data = resp.data.Results[0];

        const direccion = data.name;
        const lat = data.lat;
        const lon = data.lon;


        return {
            direccion,
            lat,
            lon
        }
    } catch (error) {
        console.log(error);
    }

}







module.exports = {
    getLugarlatLong
}