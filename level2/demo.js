//防抖
function debounce(fn){
    let timeout = null;
    return function(){
        clearTimeout(timeout);
        timeout = setTimeout(()=>{
            fn.apply(this,arguments)
        },500)
    }
}
function sayHello(){
    console.log('防抖成功')

}
let inp =document.getElementById('inp')
inp.addEventListener('inp',debounce(sayHello))
//节流
function throttle(fn){
    let canRun = true;
    return function (){
        if(!canRun) return;
        canRun = false;
        setTimeout(()=>{
            fn.apply(this,arguments);
            canRun = true;

        },500)
    }
}
function sayHi(e){
    console.log(e.target.innerWidth, e.target.innerHeight)
}
window.addEventListener('resize',throttle(sayHi))