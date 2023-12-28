var domCar1
var domCar2
function start(){
    let domred = document.getElementById('red');
    let domyellow = document.getElementById('yellow');
    let domgreen = document.getElementById('green');

    domred.style.backgroundColor = "#fff"
    domyellow.style.backgroundColor = "#fff"
    domgreen.style.backgroundColor = "#fff"
    setTimeout(() => {
        domred.style.backgroundColor = 'red'
    }, 1000);

    setTimeout(() => {
        domyellow.style.backgroundColor = 'yellow'
    }, 2000);

    setTimeout(() => {
        domgreen.style.backgroundColor = 'green'
        isRunninsg = true
    }, 3000);
} 
carOne = 1;
carTwo = 2;
var STEP = 40;
var y = 0;
var x = 0;
var x1 = 100;
var x2 = 100;
car1 = document.getElementById('car_1');
car2 = document.getElementById('car_2');
xang1 = document.getElementById('xang1');
xang2 = document.getElementById('xang2');
const log = document.getElementById('log');
document.addEventListener('keyup', logKey);
function logKey(e) {
    console.log(e['key'])
    switch(e['key']){
        case '1':
            x += STEP;
            x1 -= 1;
            car1.style.paddingLeft = x + 'px';
            xang1.style.width =  x1 + 'px';
            break;
        case '0':
            y += STEP;
            x2 -= 1;
            car2.style.paddingLeft = y + 'px';
            xang2.style.width =  x2 + 'px';
            break;
    }
    if(x == 1200){
        alert('X chiến thắng');
        repeat();
    }else if(y == 1200){
        alert('Y chiến thắng');
        repeat();
    }
}
function repeat() {
    x = 0;
    y = 0;
    x1 = 100;
    x2 = 100; 

    let domred = document.getElementById('red');
    let domyellow = document.getElementById('yellow');
    let domgreen = document.getElementById('green');

    
    domred.style.backgroundColor = "#fff"
    domyellow.style.backgroundColor = "#fff"
    domgreen.style.backgroundColor = "#fff"
    
    let car1 = document.getElementById('car_1');
    let car2 = document.getElementById('car_2');

    car1.style.paddingLeft = x + 'px'; 
    car2.style.paddingLeft = y + 'px'; 
    xang1.style.width = x1 + "px"; 
    xang2.style.width = x2   + "px"; 
    car1Finished = false; 
    car2Finished = false; 
}