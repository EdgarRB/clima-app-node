const argv = require('./config/yargs');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const getInfo = async(dir) => {
    /*Asi es como lo desarrolle en un principio, spoiler, funciona pero sobran 30 lineas */
    /*  let datos;
     let temp;

     await lugar.getLugarlatLong(dir).then(resp => {
         datos = {
             direc: resp.direccion,
             lat: resp.lat,
             lon: resp.lon
         }
     }).catch(err => {
         console.log(err)

     });

     await clima.getClima(datos.lat, datos.lon).then(res => {
         temp = res;
     }).catch(err => {
         console.log('Casca en la temperatura');
         console.log(err);
         throw new Error(`No se ha encontrado la temperatura de ${dir}`);
     });

     return {
         datos,
         temp
     } */


    /**Asi se hace de forma mas compacta */
    try {
        const latLon = await lugar.getLugarlatLong(dir);
        const temp = await clima.getClima(latLon.lat, latLon.lon);

        return (`La temperatura de ${latLon.direccion} es de ${temp}`)
    } catch (error) {
        return (`No se pudo determinar el clima de ${dir}`)
    }
}



getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);








/* clima.getClima(40.419998, -3.700000)
    .then(console.log)
    .catch(err => {
        console.log(err);
    }); */


/* lugar.getLugarlatLong(argv.direccion).then(console.log);
 */




/* console.log(argv.direccion);

const encodedUlr = encodeURI(argv.direccion);
console.log(encodedUlr);

/* if () */


/*Se puede añadir un timeout pero para el ejercicio no hace falta*/
/* const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUlr}`,
    headers: { 'X-RapidAPI-Key': '5b8e1b4982msh1ac1b761d13f95dp106b56jsna84e9662e697' }
});

instance.get().then(resp => {
        console.log(resp.data.Results[0]);
    })
    .catch(err => {
        console.log('Error, quizas, solo quizas, he hecho algo mal, pero jamas lo admitiré.');
    }) */