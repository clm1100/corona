class Colorn{
    constructor(){
        this.deg = 0
        this.sTime = Date.now()
        this.duration = 1000
        this.p = 0
        this.speed = 0
        this.maxSpeed = 15
        this.stopDeg = null
        this.canvas = document.querySelector('.dial')
    }
    loop() {
        requestAnimationFrame( ()=> {
            this.p = (Date.now() - this.sTime) / this.duration
            if (this.stopDeg) {
                this.speed = this.maxSpeed * (1 - this.p)
                if (this.speed <= 0) return this.speed = 0
            } else {
                this.speed = this.maxSpeed * this.p
                if (this.speed > this.maxSpeed) this.speed = this.maxSpeed
            }
    
            this.deg += this.speed
            this.canvas.style.transform = 'rotate(' + this.deg + 'deg) translate3d(0,0,0)'
            this.loop()
        })
    }
    stop(){
        this.stopDeg  = 1
        this.sTime    = Date.now()
        this.duration = 3000
    }
}

var colorn = new Colorn();
colorn.loop();

document.querySelector("h1").addEventListener("click",()=>{
    colorn.stop();
})