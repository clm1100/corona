            //获取对象
            var getid = function(id) {
                return document.getElementById(id);
            };
            //按照旋转顺序的数组
            var context = ["流量100M", "谢谢参与", "RMB2", "流量100M", "谢谢参与", "RMB100", "再接再厉", "RMB100"];
            var deg = 45, //旋转的默认角度360/8
                numdeg = 0, //记录上次旋转停止时候的角度
                num = 0, //记录旋转后数组的位置
                isRotated = false; //判断是否在进行中
            window.onload = function() {
                var zhen = getid("rotate_zhen");
                getid("start").addEventListener('click', function() {
                    if(isRotated) return; //如果正在旋转退出程序
                    isRotated = true;
                    var index = Math.floor(Math.random() * 8); //得到0-7随机数
                    num = index + num; //得到本次位置
                    numdeg += index * deg + Math.floor(Math.random() * 3 + 1) * 360;
                    zhen.style.webkitTransform = zhen.style.transform = "rotateZ(" + numdeg + "deg)";
                    // setTimeout(function() {
                    //     if(num >= 8) { //如果数组位置大于7就重新开始
                    //         num = num % 8;
                    //     }
                    //     alert(context[num]);
                    //     isRotated = false; //旋转改为false说明没有旋转
                    // }, 1700)
                }, false)
            }