const section = document.getElementsByTagName('section')[0],
    nav = document.getElementsByTagName('nav')[0],
    nav_title=document.getElementsByClassName('nav-title')[0];
let nav_top=nav.offsetTop;
//绑定事件
document.addEventListener('scroll', throttle(fixNav,100),true);

function fixNav(e) {
    if(scrollY>=nav_top){
        nav.classList.add('active');
    }else{
        nav.classList.remove('active');
    }
}

//防抖
function throttle(fn,delay) {
    var lasttime=+new Date();
    return function (e) {
        var that=this;
        if(+new Date()-lasttime>delay){
            lasttime=+new Date();
            fn.call(that,e)
        }
    }
}