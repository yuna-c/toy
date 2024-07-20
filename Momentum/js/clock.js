// const date = new Date()
// undefined
// date
// Thu Sep 03 2020 15:41:15 GMT+0900 (대한민국 표준시)
// date.getDay() -> 요일
// 4
// date.getDate() -> 날짜
// 3
// date.getHours() -> 시간
// 15
// date.getMinutes() -> 분은 new Date()에 호출된 것을 기준으로 변하지 않음

const clockContainer = document.querySelector('.js-clock'),
      clockTitle = clockContainer.querySelector('h1');

// console.log(clockContainer);
// console.log(clockTitle);

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${
        hours < 10 ? `0${hours}` : hours
    }:${
        minutes < 10 ? `0${minutes}` : minutes
    }:${
        seconds < 10 ?/*if*/ `0${seconds}`/*true*/ : seconds /*false*/
    }`;
    //삼항연산자 
    //만약 초가 9보다 작다면 0을 포함한 문자열을 리턴, else 초 그대로 리턴

}

function init(){ 
    getTime();
    setInterval(getTime,1000);
}
init();

//setInterval(fn, 1000);//(인자1, 인자2), 실행될 함수, 실행하고 싶은 시간

// function sayHi(){
//     console.log("say Hi");
// }
// sayHi();
// setInterval(sayHi, 100);