/**
 * Created by zou on 2017/8/29.
 */
function randomFlicker() {
    var s1 = document.getElementsByClassName("s1");
    clearTimeout(s1.movement);
    clearColor(s1);
    var l = s1.length;
    var a = randomNumber(l);
    var b = randomNumber(l,a);
    var c = randomNumber(l,a,b);
    var color1 = Math.floor(Math.random()*0xffffff).toString(16);
    var color2 = Math.floor(Math.random()*0xffffff).toString(16);
    var color3 = Math.floor(Math.random()*0xffffff).toString(16);
    while(color1.length <6){
        color1 = "0"+color1;
    }
    while (color2.length <6){
        color2 = "0"+color2;
    }
    while (color3.length <6){
        color3 = "0"+color3;
    }
    s1[a].style.backgroundColor = "#"+color1;
    s1[b].style.backgroundColor = "#"+color2;
    s1[c].style.backgroundColor = "#"+color3;
    s1.movement = setTimeout("randomFlicker()",1000);
}
function  clearColor(s1) {
    for (var i = 0; i < s1.length; i++){
        s1[i].removeAttribute("style");
    }
}
function randomNumber( l) {
    var k;
    if (arguments.length > 1){
        for (var i = 0;;i++){
            var h = 0;
            k = Math.floor(Math.random()*l);
            for (var i = 1;i<arguments.length;i++){
                if (k == arguments[i]){
                    break;
                }
                h++;
            }
            if (h != (arguments.length - 1)){
                continue;
            }
            break;
        }

    }else {
        k = Math.floor(Math.random()*l);
    }
    return k;
}
function click() {
    var b1 = document.getElementsByClassName("b1")[0];
    var b2 = document.getElementsByClassName("b2")[0];
    b1.onclick = function () {
        randomFlicker();
    };
    b2.onclick = function () {
        var s1 = document.getElementsByClassName("s1");
        clearTimeout(s1.movement);
        clearColor(s1);
    };
}
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function'){
        window.onload = func;
    }else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}
addLoadEvent(click());