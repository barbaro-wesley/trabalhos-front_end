function ajusTime (value){
    if (value<10){
        return "0"+ value
    }
    return value
    }
const clockDisplay= document.querySelector("#clockDisplay");

    const clockInterval= setInterval(function(){
    const actualDate =new  Date();
    const hour=ajusTime(actualDate.getHours())
    const minute=ajusTime(actualDate.getMinutes())
    const seconds =   ajusTime(actualDate.getSeconds())
    clockDisplay.textContent= hour +":"+ minute +":"+ seconds;
},1000);

/*setTimeout(function(){
    clearInterval(clockInterval);
},6000)*/

