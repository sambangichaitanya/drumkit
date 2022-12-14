var w = new Audio('crash.mp3');
var a = new Audio('kick-bass.mp3');
var s = new Audio('snare.mp3');
var d = new Audio('tom-1.mp3');
var j = new Audio('tom-2.mp3');
var k = new Audio('tom-3.mp3');
var l = new Audio('tom-4.mp3');

function check(x){
    switch (x) {
        case 'w':
            w.play();
            break;
        case 'a':
            a.play();
            break;
        case 's':
            s.play();
            break;
        case 'd':
            d.play();
        case 'j':
            j.play();
        case 'k':
            k.play();
        case 'l':
            l.play();
        default:
            break;
    }
}
for(var i=0;i<document.querySelectorAll('.drum').length;i++)
{
    document.querySelectorAll('.drum')[i].addEventListener('click',function(){
        var x = this.innerHTML;
        check(x);
        animate(x);
    });
    document.addEventListener('keydown',function(x){
        check(x.key);
        animate(x.key);
    });
}
function animate(x)
{
    var act = document.querySelector("."+x);
    act.classList.add('pressed');
    setTimeout(function(){
        act.classList.remove('pressed');
    }, 200);
}