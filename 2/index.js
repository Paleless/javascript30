var hourHand = document.getElementsByClassName('hourHand')[0],
    minuteHand= document.getElementsByClassName('minuteHand')[0],
    secondHand=document.getElementsByClassName('secondHand')[0],
    h=null,
    m=null,
    s=null;
setInterval(function () {
    h=Math.floor(new Date().getHours()/12*100)/100*360-90;
    console.log(h);
    m=Math.floor(new Date().getMinutes()/60*100)/100*360-90;
    s=Math.floor(new Date().getSeconds()/60*100)/100*360-90;
    hourHand.style.transform=`rotate(${h}deg)`;
    minuteHand.style.transform=`rotate(${m}deg)`;
    secondHand.style.transform=`rotate(${s}deg)`;
},100)