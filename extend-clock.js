/**
* Copia e incolla il codice di clock.js come prima cosa per avere accesso alla classe Clock sviluppata nell'esercizio 1
*/
class Clock {
  render() {
    let date = new Date()

    let hours = date.getHours()
    if (hours < 10) hours = '0' + hours

    let mins = date.getMinutes()
    if (mins < 10) mins = '0' + mins

    let secs = date.getSeconds()
    if (secs < 10) secs = '0' + secs

    let output = hours + " " + mins + " " + secs

    console.log(output)
  }

  stop() {
    clearInterval(timer)
  }

  start() {
    setInterval(clock.render, 1000)
  }
}


class ExtendedClock extends Clock {
  constructor(precision = 1000) {
    super()
    this.precision = precision
  }
}

let clock = new Clock()
clockEsteso.startEsteso()
let clockEsteso = new ExtendedClock(1000)