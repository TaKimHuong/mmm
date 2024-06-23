const list = document.querySelector('.list');
const imgs = document.getElementsByTagName('img');
const length = img.length
let current = 0;

setInterval(() => {
    if(current == length - 1){

    }else{
    current++;
    let width = imgs[0].offsetWidth;
    list.style.transform = `translateX(${width * - 1 * current}px)`;
    }
}, 4000);