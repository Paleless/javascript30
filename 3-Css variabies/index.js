var targetPic=document.getElementsByClassName('targetPic')[0],
    spacingControl=document.getElementById('spacing-control'),
    blurControl=document.getElementById('blur-control'),
    colorControl=document.getElementById('color-control');

targetPic.firstElementChild.style.filter=`blur(${blurControl.value}px)`;
//控制边距
spacingControl.oninput=function () {
    targetPic.style.borderWidth = this.value+'px';
}

blurControl.oninput=function () {
    targetPic.firstElementChild.style.filter=`blur(${this.value}px)`;
}

colorControl.oninput=function () {
    targetPic.style.borderColor = this.value;
}