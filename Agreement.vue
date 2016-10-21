<template>
    <!-- <canvas class="test" height="300" width="200"></canvas> -->
    <canvas id='test' style="border:2px solid #000;margin:2px"></canvas>
    <div>
    <button id='c'>clear</button>
    </div>
</template>
<script>


    export default {
        components: {
        },
        props: {

        },
        data() {
            return {

            }
        },
        computed: {

        },
        events: {

        },
        //3
        methods: {

        },
        attached() {

        },
        ready() {
            var canvas = document.getElementById('test');
            canvas.addEventListener('mousemove', onMouseMove, false);
            canvas.addEventListener('mousedown', onMouseDown, false);
            canvas.addEventListener('mouseup', onMouseUp, false);

            canvas.addEventListener('touchstart',onMouseDown,false);
            canvas.addEventListener('touchmove',onMouseMove,false);
            canvas.addEventListener('touchend',onMouseUp,false)


            canvas.height = 500;
            canvas.width = getWidth() - 25;
            var ctx = canvas.getContext('2d');

            ctx.lineWidth = 2.0; // 设置线宽
            ctx.strokeStyle = "rgb(175, 234, 175)"; // 设置线的颜色

            var flag = false;


            ctx.beginPath();
            ctx.lineWidth = 4.0;
            ctx.beginPath();
            debugger
               ctx.moveTo(500,800);
               ctx.lineTo(100,75);
                ctx.lineTo(240, 240);

               ctx.strokeStyle = "red";
               ctx.stroke();
               setTimeout(()=>{
                    ctx.beginPath();
                    ctx.moveTo(500,800);
                    ctx.lineTo(100,25);
                    ctx.stroke();
                    ctx.strokeStyle = "blue";

                    ctx.lineTo(10, 10);
                    ctx.stroke();
               },2000)
           setTimeout(()=>{
            ctx.beginPath();
            ctx.moveTo(500,800);

            ctx.strokeStyle = "green";
            ctx.lineTo(250, 250);
            ctx.stroke();

             ctx.lineTo(100, 200);
             ctx.stroke();

             ctx.lineTo(20, 20);
            ctx.stroke();

                setTimeout(()=>{
                 ctx.beginPath();
                 ctx.moveTo(500,800);

                 ctx.strokeStyle = "yellow";
                 ctx.lineTo(250, 250);
                 ctx.stroke();

                  ctx.lineTo(100, 200);
                  ctx.stroke();

                  ctx.lineTo(20, 20);
                 ctx.stroke();
                    setTimeout(()=>{
                     ctx.beginPath();
                     ctx.moveTo(500,800);

                     ctx.strokeStyle = "black";
                     ctx.lineTo(250, 250);
                     ctx.stroke();

                      ctx.lineTo(100, 200);
                      ctx.stroke();

                      ctx.lineTo(20, 20);
                     ctx.stroke();
                     },4000);

                 },4000);
            },4000);
               ctx.beginPath();
               ctx.moveTo(500,800);

               ctx.strokeStyle = "green";
               ctx.lineTo(250, 250);
               ctx.stroke();

                ctx.lineTo(100, 200);
                ctx.stroke();

                ctx.lineTo(20, 20);
               ctx.stroke();
               ctx.stroke();

               ctx.stroke();

            debugger
            // ctx.moveTo(10, 10);
            // ctx.moveTo(100, 100);
            // ctx.moveTo(20, 20);
            // ctx.lineTo(200, 200);
            // ctx.lineTo(30, 30);
            // ctx.stroke();
            // ctx.lineTo(10, 10);
            // ctx.lineTo(100, 100);
            // ctx.lineTo(20, 20);
            // ctx.stroke();
            // ctx.fill();
            function onMouseMove(evt){
                evt.preventDefault();
                if (flag){
                    var p = pos(evt);
                    ctx.lineTo(p.x, p.y);
                    ctx.lineWidth = 6.0; // 设置线宽
                    ctx.stroke();
                }
            }

            function onMouseDown(evt)
            {
                evt.preventDefault();
                ctx.beginPath();
                var p = pos(evt);
                ctx.moveTo(p.x, p.y);
                flag = true;
            }


            function onMouseUp(evt)
            {
                evt.preventDefault();
                flag = false;
            }


            var clear = document.getElementById('c');
            clear.addEventListener('click',function()
            {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            },false);


            function pos(event)
            {
                var x,y;
                if(isTouch(event)){
                    x = event.touches[0].pageX;
                    y = event.touches[0].pageY;
                }else{
                    x = event.layerX;
                    y = event.layerY;
                }
                return {x:x,y:y};
            }

            function isTouch(event)
            {
            var type = event.type;
            if(type.indexOf('touch')>=0){
            return true;
            }else{
            return false;
            }
            }

            function getWidth()
            {
            var xWidth = null;

            if (window.innerWidth !== null) {
            xWidth = window.innerWidth;
            } else {
            xWidth = document.body.clientWidth;
            }
                return xWidth;
            }
        }
    }
</script>

<style lang="sass">
    @import '../sass/variables';
    @import '../sass/fontsize';
    .test {
        background-color: rgb(175, 234, 175);
    }
    .agreement {
        .docked-body {
            overflow-y: scroll;
            -webkit-overflow-scrolling: touch;
        }
        & > .slide-right-transition {
            overflow: auto;
        }
        & > .slide-right-enter {
            transform: translateX(100%);
        }
        & > .slide-left-enter {
            transform: translateX(-100%);
        }

        .protocol {
            .body-container{
                padding: 0 rem(2*15);
                background-color: #fff;
                border-bottom: 1px solid #ddd;
            }
            .title {
                margin-top: rem(1);
                padding: rem(30) 0 rem(20);
                line-height: rem(42);
                color: #666;
            }
            .select {
                .select-container {
                    border-top: 1px solid #ddd;
                    display: flex;
                    display: -webkit-flex;
                    padding: rem(28) 0;
                    span {
                        color: #282828;
                        margin-left: rem(16);
                        line-height: rem(44);
                    }
                    .selected {
                        background-image: url(../assets/selected.png);
                        &:active {
                            background-image: url(../assets/selected_press.png);
                        }
                    }
                    .unselected {
                        background-image: url(../assets/unselected.png);
                        &:active {
                            background-image: url(../assets/unselected_press.png);
                        }
                    }
                    .arrow {
                        margin-left: auto;
                        background-image: url(../assets/right.png);
                        &:active {
                            background-image: url(../assets/right_press.png);
                        }
                    }
                }
                .select-detail {
                    .select-item {
                        display: flex;
                        display: -webkit-flex;
                        border-top: 1px solid #ddd;
                        padding: 0 rem(30) 0 rem(60);
                        color: #666;
                        span {
                            height: rem(100);
                            line-height: rem(100);
                        }
                        .see-detail {
                            margin-left: auto;
                            color: $theme-color;
                        }
                    }
                    .select-item-first {
                        border-top: none;
                    }
                }
                .select-description, .select-privacy {
                    padding-left: rem(60);
                    line-height: rem(40);
                    color: #999;
                    span {
                        vertical-align: middle;
                    }
                    .service {
                        color: $theme-color;
                    }
                }
                .select-privacy {
                    margin-bottom: rem(22);
                }
                .select-description.nz {
                    margin-bottom: rem(22);
                }

            }
            .email-container {
                margin-top: rem(20);
                padding: rem(30) rem(30) 0;
                background-color: #fff;
                color: #282828;
                border-bottom: 1px solid #ddd;
                .text {
                    color: #999;
                    line-height: rem(36);
                }
                .email-input {
                    display: flex;
                    display: -webkit-flex;
                    margin-bottom: rem(10);
                    height: rem(64);
                    & >.form-field {
                        flex: 1;
                        -webkit-flex: 1;
                        margin: 0;
                        padding: 0;
                        border-bottom: none;
                        .label {
                            display: none;
                        }

                        input {
                            text-shadow: 0 0 0 #666666;
                        }
                    }
                    .email-edit {
                        color: #999999;
                        height: rem(50);
                        line-height: rem(50);
                        margin-left: rem(10);
                    }
                }

            }
            .btn-next {
                user-select: none;
            }
        }
        .risk {
            .docked-bottom {
                position: relative;
            }
            .risk-buttom {
                height: rem(49*2);
                display: flex;
                display: -webkit-flex;
                justify-content: space-between;
                -webkit-justify-content: space-between;
                a {
                    flex: 1;
                    -webkit-flex: 1;
                    border-top: 1px solid #ddd;
                    background-color: #fff;
                    color: $theme-color;
                    line-height:rem(49*2);
                    text-decoration: none;
                }
            }
            .text-mask {
                width: 100%;
                height: rem(100);
                position: absolute;
                background: linear-gradient(rgba(255,255,255,0), #fff);
                top: rem(-98);
                left: 0;
            }
            .fill-bottom {
                height: rem(10);
                width: 100%;
                background-color: #f7f7f7;
            }
        }
        .detail {
            overflow: auto;
            -webkit-overflow-scrolling: touch;
            position: absolute;
            top: 0;
            left: 0;
            margin-top: rem(2);
            width: 100%;
            height: 100%;

            iframe {
                //transform:scale(2);
                //transform-origin: 0 0;
                //-moz-transform:scale(2);
                //-moz-transform-origin: 0 0;
                //-o-transform: scale(2);
                //-o-transform-origin: 0 0;
                //-webkit-transform: scale(2);
                //-webkit-transform-origin: 0 0;
            }
        }
        .sign-board {
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            z-index: 1000;
        }
        .gold & {
            .protocol {
                .see-detail , .service {
                    color: $gold-theme-color;
                }
                .select {
                    .select-container {
                        .arrow {
                            background-image: url(../assets/gold/gold_right.png);
                            &:active {
                                background-image: url(../assets/gold/gold_right_press.png);
                            }
                        }
                    }
                    .select-detail {
                        .select-item {
                            .see-detail {
                                color: $gold-theme-color;
                            }
                        }
                    }
                    .select-description , .select-privacy {
                        .service {
                            color: $gold-theme-color;
                        }
                    }
                }
            }

            .risk {
                .risk-buttom {
                    a {
                        color: $theme-color;
                    }
                }
            }
        }

        .dpr1 & {
            .detail {
                iframe {
                    //transform:scale(1);
                    //transform-origin: 0 0;
                    //-moz-transform:scale(1);
                    //-moz-transform-origin: 0 0;
                    //-o-transform: scale(1);
                    //-o-transform-origin: 0 0;
                    //-webkit-transform: scale(1);
                    //-webkit-transform-origin: 0 0;
                }
            }
        }

        .dpr3 & {
            .detail {
                iframe {
                    //transform:scale(3);
                    //transform-origin: 0 0;
                    //-moz-transform:scale(3);
                    //-moz-transform-origin: 0 0;
                    //-o-transform: scale(3);
                    //-o-transform-origin: 0 0;
                    //-webkit-transform: scale(3);
                    //-webkit-transform-origin: 0 0;
                }
            }
        }
    }
</style>
