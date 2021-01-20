let clock = () => {
    const date = new Date()
    let hours = date.getHours ()
    let mins = date.getMinutes ()
    let secs = date.getSeconds ()

    if (hours == 0) hours = 12
    if (hours > 12) {
        hours = hours - 12
    }
    if (hours < 10) {
        hours = `0${hours}`
    }
    if (mins < 10) {
        mins = `0${mins}`
    }
    if (secs < 10) {
        secs = `0${secs}`
    }
    let time = `${hours}:${mins}:${secs}`
    document.getElementById("clock").innerText = (time)
    setInterval(clock, 1000)
}
clock ()