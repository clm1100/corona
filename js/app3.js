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
        this.kai =null;
        this.bi =null;
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
            if(this.endstage())return 
            this.loop()
        })
    }
    stop(prize){
        // 奖品1等奖;
        // 区间0-90;
        if(prize==1){
            this.kai = 20;
            this.bi = 90;
        }
        this.endDeg = true;
    }
    // 突破点在于停止的是一个区间,而不是一个具体的角度,如果是一个具体的角度,那么匀速最好完成;
    endstage(){
        if(this.endtime-this.startime>=9000){
            if(this.endDeg){
                var mode = this.deg%360;
                console.log(mode,this.kai,this.bi);
                if(this.kai<mode&&mode<this.bi){
                    return true;
                }else{
                    console.log("再转一圈");
                }
            }
            }
    }
}

var colorn = new Colorn();
colorn.startime = Date.now();
colorn.loop();

document.querySelector("h1").addEventListener("click",()=>{
    colorn.stop(1);
})