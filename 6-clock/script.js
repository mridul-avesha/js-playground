function getTime(){
    let now = new Date()

    let hours = now.getHours().toString().padStart(2, '0')
    let minutes = now.getMinutes().toString().padStart(2, '0')
    let seconds = now.getSeconds().toString().padStart(2, '0')

    return `${hours} : ${minutes} : ${seconds}`
}

setInterval(function(){
    document.getElementById('clock').innerHTML = getTime()
}, 1000)

// hours>=12 ? "PM" : "AM"