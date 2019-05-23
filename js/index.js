class Corona{
    constructor(){
        this.prizeIndex = -1;
        this.runClircle = 0;
        this.isRotated = false;
        this.dom = $("#rotate_zhen");
    }
    init(){
        console.log(this.dom);
        this.dom.on("transitionend",()=>{
            this.runClircle++;
            var deg = this.runClircle*720;
            if(this.runClircle>=10&&this.prizeIndex>0){
               deg =  deg+this.prizeIndex*(360/8);
               this.dom.unbind("transitionend");
            }
            this.dom[0].style.transform = `rotateZ(${deg}deg)`;
        })
    }
    run(){
        this.dom.addClass("runwan");
    }
    stop(index){
        this.prizeIndex = index;
    }
}

var corona = new Corona();
$("#start").click(function(){
    console.log("start");
    corona.init();
    corona.run();
})
$("#stop").click(function(){
corona.stop(4);

})