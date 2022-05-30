
setInterval(setClock, 1000) ;
 
const hourHand = document.getElementById("data-hour-hand");
const minuteHand = document.getElementById("data-minute-hand");
const secondHand = document.getElementById("data-second-hand");



function setClock() { 
    const currDate = new Date() 
    const secondsRatio = currDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currDate.getHours()) / 12; 

    setRotation(secondHand, secondsRatio) ;
    setRotation(minuteHand, minutesRatio); 
    setRotation(hourHand, hoursRatio) ;
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360) ;
}

setClock() ;