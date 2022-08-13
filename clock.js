const done = document.getElementById('done')
done.style.backgroundColor = 'green'
const ongoing = document.querySelectorAll('#ongoing')
ongoing.forEach((e) => { e.style.backgroundColor = 'orange' })

const coming = document.querySelectorAll('#coming')
coming.forEach((e) => { e.style.backgroundColor = 'pink' })


function currenttime12() {

    let time = new Date()
    let hh = time.getHours()
    let mm = time.getMinutes()
    let ss = time.getSeconds()
    let session = 'AM'
    if (hh == 0) {
        hh = 12
    }
    if (hh > 12) {
        hh = hh - 12
        session = 'PM'

    }
    hh = (hh < 10) ? "0" + hh : hh
    mm = (mm < 10) ? "0" + mm : mm
    ss = (ss < 0) ? "0" + ss : ss
    let finaltime = hh + ':' + mm + ':' + ss
    document.getElementById('clock1').innerText = finaltime;
    document.getElementById('clock1').style.backgroundColor = 'rgb(255, 255, 255)'
    document.getElementById('clock1').style.borderStyle = 'ridge'

    console.log('12 hours format')
    setInterval(currenttime12, 1000)
}







function currenttime24(flag) {

    let time = new Date()
    let hh = time.getHours()
    let mm = time.getMinutes()
    let ss = time.getSeconds()
    let session = 'AM'

    if (hh > 12) {

        session = 'PM'

    }
    hh = (hh < 10) ? "0" + hh : hh
    mm = (mm < 10) ? "0" + mm : mm
    ss = (ss < 0) ? "0" + ss : ss
    let finaltime = hh + ':' + mm + ':' + ss
    document.getElementById('clock').innerText = finaltime;
    document.getElementById('clock').style.backgroundColor = 'rgb(255, 255, 255)'
    document.getElementById('clock').style.borderStyle = 'ridge'
    console.log('24 hours format')
    setInterval(currenttime24, 1000)

}

function blink() {

    let random1 = Math.floor(Math.random() * 255)
    let random2 = Math.floor(Math.random() * 255)
    let random3 = Math.floor(Math.random() * 255)

    let rbg = `rgb(${random1},${random2},${random3})`
    document.getElementById('clock').style.backgroundColor = rbg
    document.getElementById('clock1').style.backgroundColor = rbg

    setInterval(blink, 2000)


}