const vd = document.getElementsByTagName('video')[0],
    btnPlay = document.getElementsByClassName('btn-play')[0].firstElementChild,
    bar = document.getElementsByClassName('cur-bar')[0],
    progressBar = document.getElementsByClassName('progress-bar')[0],
    rateRoll = document.getElementsByClassName('btn-rate-roll')[0],
    volRoll = document.getElementsByClassName('btn-volume-roll')[0],
    rate = document.getElementsByClassName('btn-rate')[0],
    volume = document.getElementsByClassName('btn-volume')[0],
    speed=document.getElementsByClassName('speed')[0];
let playing = false,
    timer = null,
    jump = null;

vd.currentTime = 100;

//工具函数
//查看元素位置
function getElementPosition(ele) {
    if (ele.offsetParent.toString() === '[object HTMLBodyElement]' || ele.offsetParent === null) {
        return {
            left: ele.offsetLeft,
            top: ele.offsetTop
        }
    } else {
        return {
            left: ele.offsetLeft + getElementPosition(ele.offsetParent).left,
            top: ele.offsetTop + getElementPosition(ele.offsetParent).top
        }
    }
}

//拖拽
function drag(ele, wrap) {
    ele.onmousedown = function(e) {
        var disX = e.clientX - ele.offsetLeft,
            realX = null;
        wrap.onmousemove = function(e) {
            realX = e.clientX - disX;
            if(realX<0){
                realX=0
            }else if(realX>wrap.offsetWidth){
                realX=wrap.offsetWidth;
            }
            ele.style.left = realX + 'px';
        }
        document.onmouseup = function(e) {
            wrap.onmousemove = null;
            document.onmouseup = null;
        }
    }
}
//点击播放
function startplay() {
    if (playing) {
        vd.pause();
        playing = false;
        btnPlay.innerText = '►';
    } else {
        vd.play();
        playing = true;
        btnPlay.innerText = '❚ ❚';
    }
}

//进度条
//进度条移动
function barMove() {
    timer = setInterval(() => {
        bar.style.marginLeft = `-${100-this.currentTime/this.duration*100}%`
    }, 30)

}

//点击跳转
function startJump(e) {
    jump = (e.clientX - (getElementPosition(this).left - this.offsetWidth / 2)) / this.offsetWidth;
    vd.currentTime = jump * vd.duration;
    bar.style.marginLeft = `-${100-vd.currentTime/vd.duration*100}%`
}

//音量和速率控制
drag(volRoll, volume);
drag(rateRoll, rate);

function changeVol(e) {
    vd.volume = parseInt(volRoll.offsetLeft) / parseInt(volume.offsetWidth).toFixed(1);
}
function changeRate(e) {
    vd.playbackRate = (parseInt(rateRoll.offsetLeft) / parseInt(rate.offsetWidth) * 2).toFixed(1);
}

//加速
function speedy(e) {
    if(e.target.tagName==='SPAN'){
        var temp=parseInt(e.target.innerText);
        vd.currentTime+=temp;
    }
}
//绑定事件
btnPlay.addEventListener('click', startplay, false)
vd.addEventListener('click', startplay, false)
vd.addEventListener('play', barMove, false)
vd.addEventListener('pause', function() {
    clearInterval(timer)
}, false)
progressBar.addEventListener('click', startJump, false)
volRoll.addEventListener('mouseup', changeVol, true)
rateRoll.addEventListener('mouseup', changeRate, true)
speed.addEventListener('click',speedy,false)