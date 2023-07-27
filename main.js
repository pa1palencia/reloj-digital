// Funcion flecha

const getHora = () => {
    const fecha = new Date(); // Creacion de objeto Date
    // console.log(fecha.getHours)
    const tiempo = {hora: fecha.getHours(), minuto:fecha.getMinutes(), segundo:fecha.getSeconds()}

    document.querySelector(".reloj").innerHTML = `${tiempo.hora}:${tiempo.minuto}:${tiempo.segundo}`
    
} 

setInterval(getHora,1000)

