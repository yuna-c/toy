const form = document.querySelector('.js-form'),  
      input = form.querySelector('input'),
      greeting = document.querySelector('.js-greetings');
    
const USER_LS = "currentUser",
      SHOWING_CN = "showing"; //클래스 이름 가져오기 


function saveName(text){//유저의 이름을 내 크롬APP에 저장하는 법, 새로고침 방지
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){  //form에 무언가를 하면 처리하게끔 하는 함수, but 새로고침 없어진다.
    event.preventDefault();
    const currentValue = input.value;//인풋의 value값
    // console.log(currentValue);
    // input.placeholder =
    // value를 가지고 paintGreeting(text)를 다시 불러서 폼이랑 인풋을 지우고  greeting.innerText = `Hello를 실행해야됨
    paintGreeting(currentValue); 
    saveName(currentValue); //saveName이라는 함수를 또 만들어줘야함
}    

function askForName(){ //이름이 없으면 물어보게 하는 함수를 만듬
    form.classList.add(SHOWING_CN); //form에 클래스 추가 
    form.addEventListener("submit", handleSubmit); //특정함수 실행할 수 있게하는 함수, 다른 이벤트를 없애기위해
}

function paintGreeting(text){ //인자 1개,
    form.classList.remove(SHOWING_CN);  //폼에 있는 showing을 지우고
    greeting.classList.add(SHOWING_CN); //js-greetings에 showing을 추가한다
    greeting.innerText = `Hello ${text}`; //1
    
}

function loadName(){ //로컬 스토리지에서 값 가져오기                  
    // loadName();
    const currentUser = localStorage.getItem(USER_LS);

    if(currentUser === null){ //만약 현재 유저가 null값이면 
        //유저가 없을 때
        askForName();
        
    } else {
        //유저 있을 때
        paintGreeting(currentUser);
    }
    
}
function init(){
    loadName();
}
init();





// querySelector() 찾은 첫번째 것을 가져옴
// querySelectorAll() 모든걸 가져옴 array[]
// document.getElementById(); 
// document.getElementByTagName(); //html, input, section
// document.getElementsByClassName();
// document.getElementsByName();

// const form = document.querySelector(".js-form"),
//       input = form.querySelector("input"),
//       greeting = document.querySelector(".js-greetings");

// const USER_LS = "currentUser",
//       SHOWING_CN = "showing";

// function handleSubmit(event){
//     event.preventDefault();
//     const currentValue = input.value;
//     paintGreeting(currentValue);
//     saveName(currentValue);
// }

// function paintGreeting(text){
//     form.classList.remove(SHOWING_CN);
//     greeting.classList.add(SHOWING_CN);
//     greeting.innerText = `Hello ${text}`;
// }

// function askForName(){
//     form.classList.add(SHOWING_CN);
//     form.addEventListener("submit", handleSubmit);
// }

// function loadName(){
//     const currentUser = localStorage.getItem(USER_LS);
//     if(currentUser === null){
//         askForName(); 
//     } else {
//         paintGreetiong(currentUser);
//     }
// }
// function init(){
//     loadName();
// }
// init();

