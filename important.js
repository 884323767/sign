(function() {
    var params = {};
    //Document对象数据
    if (document) {
        params.domain = document.domain || '';
        params.url = document.URL || '';
        params.title = document.title || '';
        params.referrer = document.referrer || '';
    }
    //Window对象数据
    if (window && window.screen) {
        params.sh = window.screen.height || 0;
        params.sw = window.screen.width || 0;
        params.cd = window.screen.colorDepth || 0;
    }
    //navigator对象数据
    if (navigator) {
        params.lang = navigator.language || '';
    }
    //解析_maq配置
    if (!!_maq) {
        for (var i in _maq) {
            switch (_maq[i][0]) {
                case '_setAccount':
                    params.account = _maq[i][1];
                    break;
                default:
                    break;
            }
        }
    }
    //拼接参数串
    var args = '';
    for (var i in params) {
        if (args != '') {
            args += '&';
        }
        args += i + '=' + encodeURIComponent(params[i]);
    }
    console.log(args);
    //通过Image对象请求后端脚本
    var img = new Image(1, 1);
    img.src = 'http://analytics.codinglabs.org/1.gif?' + args;
})();

var start = new Date();
var strStart = start.getFullYear() + "-" + (start.getMonth() + 1) + "-" + start.getDate() + " " +
    start.getHours() + ":" + start.getMinutes() + ":" + start.getSeconds();
var len = 0;
var end;
var status = "in";
var second = 30;

function revive() {
    if (status == "out") {
        start = new Date();
        status = "in";
    }
    second = 30;
}
window.setInterval(function() {
    second -= 1;
    if (0 == second) {
        end = new Date();
        len += (end.getTime() - start.getTime()) / 1000;
        status = "out";
    }
}, 1000);
$('body').click(function() {
    revive();
});
$('body').mousedown(function() {
    revive();
});
$('body').mouseup(function() {
    revive();
});
$('body').mousemove(function() {
    revive();
});
//(Firefox)
$('body').bind('DOMMouseScroll', function() {
    revive();
});
//(IE,Google)
$('body').bind('mousewheel', function() {
    revive();
});
$('body').keydown(function(e) {
    revive();
});
$('body').keyup(function(e) {
    revive();
});
$('body').keypress(function(e) {
    revive();
});
window.onbeforeunload = function() {
    end = new Date();
    var strEnd = end.getFullYear() + "-" + (end.getMonth() + 1) + "-" + end.getDate() + " " +
        end.getHours() + ":" + end.getMinutes() + ":" + end.getSeconds();
    len += (end.getTime() - start.getTime()) / 1000;
    var img = new Image();
    img.src = contextPath + "behavior?stayTime=" + len + "&strStart" + strStart + "&lastDate=" + strEnd;
};

// 模拟DOMContentLoaded
document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
    initApplication();
  }
}
// 模拟 load事件
document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    initApplication();
  }
}
//发送测速请求示例
/*
统计方式
  ● 前端页面向统计后台发送带页面速度及测速key的GET请求
  ● 每个请求带有用户瑞东uin
  ● 每个HTTP请求需要带有一个key，和1-5个耗时时间。改key对应的产品需要提前向统计平台申请，并记录备案。后台需要记录相关log，并从log中提取出每个 key 对应的耗时
  ● 可视化展现，以key做第一层划分，不同的key对应不同的产品测速，对于每一个key：
*/
let sendLog = (function() {
let imgs = []
return function (key, ...times) {
let img = new Image();
imgs.push(img);
img.src = `http://statistics.reotest.com/speed/collect?key=${key}&uin=${cookie.uin}` +
`&t1=${times[0]||0}&t2=${times[1]||0}&t3=${times[2]||0}&t4=${times[3]||0}&t5=${times[4]||0}`;
}
}())

//http://statistics.reotest.com/speed/collect?key=trade_index&uin=123456&t1=500&t2=1100&t3=1500&t4=2000&t5=0
sendLog('trade_index', 500, 1100, 1500, 2000)
/*
1.2 用户行为统计
  ● 前端页面向统计后台发送带产品ID及行为key及行为详情的GET请求
  ● 每个请求带有用户瑞东uin
  ● 每个HTTP请求需要带有产品ID，该ID对应哪个产品需要提前向统计平台申请并记录备案
  ● 每个HTTP请求需要带有行为KEY，改KEY对应的行为需要有对应的说明并记录
  ● 为方便扩展，每个HTTP请求可以带一个扩展的数据对象，格式为 JSON.stringify 后的字符串，具体值及其展示方式，后续补充
*/
let sendLog = (function() {
let imgs = [];
return function (id, key, info) {
let img = new Image();
imgs.push(img);
img.src = `http://statistics.reotest.com/behavior/collect?uin=${cookie.uin}&id=${id}&key=${key}` +
`&info=${JSON.stringify(info)}`;
}
}());

//http://statistics.reotest.com/behavior/collect?uin=123456&id=onboarding&key=ocr_upload&info={"iValue":18,"sValue":"some data"}
sendLog('onboarding', 'ocr_upload', {iValue: 18, sValue: 'some data'})

function getTime() {
    return time = + new Date();
}

<a onclick="return getid(this.id)"> 按钮</a>
function getid(id) {
    var img = new Image();
    img.src = contextPath + "button?id=" + id;
}

