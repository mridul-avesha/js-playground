function getTime(){
    let now = new Date()

    return `${now.getHours()} : ${now.getMinutes()} : ${now.getSeconds()}`
}


document.getElementById('clock').innerHTML = getTime()