const keys = document.getElementsByClassName('keys');
const keysWra=document.getElementsByClassName('keysWra')[0];
let i = 0;

document.onkeydown = function(e) {
    switch (e.which) {
        case 65:
            i = 0;
            break;
        case 83:
            i = 1;
            break;
        case 68:
            i = 2;
            break;
        case 70:
            i = 3;
            break;
        case 71:
            i = 4;
            break;
        case 72:
            i = 5;
            break;
        case 74:
            i = 6;
            break;
        case 75:
            i = 7;
            break;
        case 76:
            i = 8;
            break;
        default:
            i = -1;
            break;
    }
    if (i >= 0) {

        keys[i].firstElementChild.currentTime=0;
        keys[i].firstElementChild.play();
        keys[i].classList.add('active');
        var t=i;
        setTimeout(function () {
            keys[t].classList.remove('active');
        },100);
    }
}

keysWra.onclick=function (e) {
    e.target.firstElementChild.play();
}