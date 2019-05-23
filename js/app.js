var deg = 0
    var sTime = Date.now()
    var duration = 1000
    var p = 0
    var speed = 0
    var maxSpeed = 15
    var stopDeg = null
    var canvas = document.querySelector('.dial')

    setTimeout(function () {
        stopDeg  = 78
        sTime    = Date.now()
        duration = 3000
    }, 5000)

    ;
    (function loop() {
        requestAnimationFrame(function () {
            p = (Date.now() - sTime) / duration
            if (stopDeg) {
                speed = maxSpeed * (1 - p)
                if (speed <= 0) return speed = 0
            } else {
                speed = maxSpeed * p
                if (speed > maxSpeed) speed = maxSpeed
            }

            deg += speed
            canvas.style.transform = 'rotate(' + deg + 'deg) translate3d(0,0,0)'
            loop()
        })
    })()