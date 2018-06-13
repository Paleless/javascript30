const control = document.getElementsByClassName('control')[0],
    start_time = document.getElementsByClassName('start-time')[0],
    end_time = document.getElementsByClassName('end-time')[0];

let timer = null
//计时器
function clock(min, sec, obj) {
    clearInterval(timer);
    timer = setInterval(function() {
        if (sec <= 0) {
            sec = 59;
            min--;
        }
        if (min < 0) {
            obj.innerText = `00:00`;
            clearInterval(timer);
        }
        obj.innerText = `${min}:${sec--}`;
    }, 900)
}

function controlClick(e) {
    let target = e.target;
    let time = e.target.innerText.split(':');
    let min = time[0],
        sec = time[1];
    if(this.getElementsByClassName('active')[0]){
        this.getElementsByClassName('active')[0].classList.remove('active');
    }
    target.classList.add('active');
    end_time.innerText = `start from ${new Date()}`;
    clock(min, sec, start_time);
}

control.addEventListener('click', controlClick, false);