class Corona{
    constructor(){
        this.prizeIndex = -1;
        this.runClircle = 0;
    }
    init(){
        $(document).on("animationend",function(){
            $(this).removeClass("")
        })
    }
    run(){
        this.dom.addclass("runwan");
    }
    stop(index){
        this.prizeIndex = index;
    }
}