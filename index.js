//1
let t1 = document.querySelector('.t1');
let b1 = document.querySelector('.b1');

b1.onclick = () => {
    if ((t1.value >= 0) && (t1.value <=12)) {
        alert('Ты ребенок');
    }
    else if ((t1.value > 12) && (t1.value <=18)) {
        alert('Ты подросток');
    }
    else if ((t1.value > 18) && (t1.value <=60)) {
        alert('Ты взрослый');
    }
    else if (t1.value > 60){
        alert('Ты пенсионер');
    }
}

//2
let t2 = document.querySelector('.t2');
let b2 = document.querySelector('.b2');

b2.onclick = () => {
    switch (+t2.value) {
        case 0:
            alert(')');
            break;
        case 1:
            alert('!');
            break;
        case 2:
            alert('@');
            break;
        case 3:
            alert('#');
            break;
        case 4:
            alert('$');
            break;
        case 5:
            alert('%');
            break;
        case 6:
            alert('^');
            break;
        case 7:
            alert('&');
            break;
        case 8:
            alert('*');
            break;
        case 9:
            alert('(');
            break;
        default:
            break;
    }
}

//3
let t3 = document.querySelector('.t3');
let b3 = document.querySelector('.b3');

b3.onclick = () => {
    if (t3.value % 4 == 0) {
        alert('Год високосный');
    }
    else {
        alert('Год не високосный');
    }
}

//4
let t4 = document.querySelector('.t4');
let b4 = document.querySelector('.b4');
let sum = 0;

b4.onclick = () => {
    if (t4.value >= 200 && t4.value < 300) {
        sum = t4.value - (t4.value * 0.03);
        alert(sum);
    }
    else if (t4.value >= 300 && t4.value < 500) {
        sum = t4.value - (t4.value * 0.05);
        alert(sum);
    }
    else if (t4.value >= 500) {
        sum = t4.value - (t4.value * 0.07);
        alert(sum);
    }
    else {
        alert(t4.value);
    }
}