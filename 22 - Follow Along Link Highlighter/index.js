const floatBox = document.getElementsByClassName('float-box')[0];
document.addEventListener('mousemove', cover, false);

function cover(e) {
    if (e.target.tagName === 'A') {
        startMoveN(floatBox, {
            'left': e.target.offsetLeft,
            'top': e.target.offsetTop,
            'width': e.target.offsetWidth,
            'height': e.target.offsetHeight
        })
    }
}

//运动函数
function startMoveN(obj, json, callback) {
    clearInterval(obj.timer);
    var speed, icur;

    obj.timer = setInterval(function() {
        var bStop = true;
        for (var attr in json) {
            if (attr === 'opacity') {
                icur = parseFloat(getComputedStyle(obj)[attr]) * 100;
            } else {
                icur = parseInt(getComputedStyle(obj)[attr]);
            }
            speed = (json[attr] - icur) / 3;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (attr === 'opacity') {
                obj.style[attr] = (icur + speed) / 100;
            } else {
                obj.style[attr] = icur + speed + 'px';
            }
            if (icur != json[attr]) {
                bStop = false;
            }
        }
        if (bStop) {
            clearInterval(obj.timer);
            typeof callback === 'function' ? callback() : '';
        }
    }, 17)
}