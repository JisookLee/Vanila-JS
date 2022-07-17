const clock = document.querySelector("#clock");
// const todayDate = document.querySelector("#clock div:first-child");
// const todayTime = document.querySelector("#clock div:last-child");



function nowTime(){
    const todayDate = document.querySelector("#clock div:first-child");
    const todayTime = document.querySelector("#clock div:last-child");    
let today = new Date();
let date = today.toLocaleDateString();
const options = {hour:"2-digit", minute:"numeric", second:"numeric"}
let time = today.toLocaleTimeString("en-US", options);
    todayDate.innerText = `${date}`;
    todayTime.innerText = `${time}`;
}

nowTime();
setInterval(nowTime,1000);
