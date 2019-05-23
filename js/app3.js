class Colorn{
    constructor(){
        this.deg = 0;
        this.speed = 5;
        this.canvas = document.querySelector('.dial');
        this.lock = false
        this.stopDeg=-1;
        this.endDeg = 0;
        this.startime=null;
        this.endtime = null;
    }
    loop() {
        requestAnimationFrame(()=> {
            this.endtime = Date.now()
            if(this.speed<20){
                this.speed+=(1/20);
            }
            if(this.endtime-this.startime>=4000){
                this.speed-=(1/10);
                if(this.speed<=5){
                    this.speed=5;
                }
            }
            this.deg+=this.speed;
            this.canvas.style.transform = 'rotate(' + this.deg + 'deg) translate3d(0,0,0)';
            if(this.endDeg){
                var mode = this.deg%360;
                console.log(mode);
                if(0<mode&&mode<=90){
                    return;
                }else{
                    console.log("再转一圈");
                }
            }
            this.loop()
        })
    }
    stop(){
        // 奖品1等奖;
        // 区间0-90;
        
        this.endDeg = true;
    }
}

var colorn = new Colorn();
colorn.startime = Date.now();
colorn.loop();

document.querySelector("h1").addEventListener("click",()=>{
    colorn.stop();
})