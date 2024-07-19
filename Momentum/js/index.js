 /* 변수 */
// const a = 221; //상수 첫사용, a = 4; 안됨, 바꿀 수 없음
// let b = a - 5; //변수 초기화, 바꿀 수 있음 

// console.log(b, a);
// console.log(b);

 /* 데이터 */
// const string = "text";
// console.log(string);

// const boolean = false;
// const boolean1 = true;
// console.log(boolean, boolean1);

// const Number = 101;
// console.log(Number);

// const Float = 5.1100011111;
// console.log(Float);

 /* 데이터 타입 정렬 */
// //array
// const something = 'be happy!';
// const array = ['sunday', 'monday', 'tuesday', 'wednesnday', 'thursday', 'friday', 'saturday', 1, true, something];
// const mon = "Mon";
// const tue = "tue";
// const wed = "wed";
// console.log(array, mon, tue, wed);
// console.log(array[3]);

// //object
// const object = {
//     name : "yuna",
//     city : "Seoul",
//     age : 30,
//     gender : "female",
//     isPretty : true,
//     favMovie : ["Joker", "aaa", 'bbb'],
//     favFood : [
//         {
//             name : 'kimchi', 
//             fatty: false
//         },
//         {
//             name : "cheese bugger",
//             fatty : true
//         }
//     ]
     
// };
// console.log(object);
// object.city = 'Nework';
// console.log(object.city);
// console.log(object.favFood[0].name);
// console.log(object.favFood[1].fatty);

// console.log(object, console); //내장함수 

 /* function */
//console.log("hello");
// function sayHello(name, age){
//     // console.log( "Hello!", name, "you have", age, "years of age!" );
//     // console.log( 'Hello!' + name + 'you have' + age + 'years of age!' );
//     console.log( `Hello! ${name} I am ${age} years old!`);
    
// }

// sayHello("Yuna", 30);
// console.log("hi!");

// function sayHello(name, age){
//     return `Hello! ${name} I am ${age} years old!`;
    
// }
// //greetYuna는 sayhello의 return 반환 값이다. 
// const greetYuna = sayHello("nana", 14);
// console.log(greetYuna);



// const cal = {
//     plus : function(a, b){
//         return a + b;
//     },
//     minus : function(a, b){
//         return a - b;
//     },
//     multiply : function(a, b){
//         return a * b;
//     },
//     devide : function(a, b){
//         return a / b;
//     },
//     power : function(a, b){
//         return a ** b;
//     },
// }

// const plus = cal.plus(5,5);
// const minus = cal.minus(5,5);
// const multiply = cal.multiply(5,5);
// const devide = cal.devide(5,5);
// const power = cal.power(5,5);

// console.log(`결과는 : ${plus} ${minus} ${multiply} ${devide} ${power}`);



 /* DOM */
//  const h1 = document.querySelector('#title');// 도큐먼트의 모든 요소에서 첫 선택자를 찾는다
// // const h1 = document.getElementById('title');
// // const h1 = document.getElementsByClassName('title');
// // console.log(h1); 
// h1.innerHTML = "i want go home!";
// h1.style.color = 'blue';
// // h1.style.textTransform ="uppercase";
// console.errer('에러닷');
// console.dir(document); //객체 표기법, 이벤트 나옴
// document.title = "I own you now!"; //타이틀 바꾸는 법



 /* event handling */
// const h1 = document.querySelector('#title');

// //handling
// function handleResize(evnet){
//     console.log(event); //event로 인해 이벤트가 발생할 때마다 함수를 호출했다. (폼, 링크 시 유용)
//     console.log("I nave been resized");
// }

// window.addEventListener("resize", handleResize); //이벤트 받기를 기다리고 있다,  handleResize() -> 지금 바로 호출 / handleResize ->함수를 내가 필요한 시점에 호출 

// //click이벤트
// function handleClick(){
//     h1.style.color = "pink";
// }

// h1.addEventListener("click", handleClick); //click을 기다린다

// console.log(); //객체



 /* if else or */
// if("10" === 10 /*true*/){ //ture 일 때 10 > 5 -> 10이 5보다 크면, 10 === 5 -> 같을 때 체크하는 것
//     //if 참일 때 동작
//     console.log('hi');
// } else if( "10" === "11"){
//     console.log('lalalalalal');
// } else {
//     console.log('ho');
// }

// if(20 > 5 || "na2na" === "nana"){ 
//     /*
//     ture && ture = ture;   
//     false && ture = false;
//     ture && false = false;
//     false && false = false;

//     ture || ture = ture;   
//     false || ture = ture;
//     ture || false = ture;
//     false || false = false;
//     */
//     console.log("cat!");
// } else {
//     console.log('No');
// }

// prompt("Ask something"); 취소/확인
// const age = prompt("How old are you");

// if(age >= 18 && age <= 21){ //18 보다 많고 21보다 작으면 
//     console.log('you can drink but you should not');
// } else if(age > 21){ //age가 크면 
//     console.log('go ahead'); 
// } else {
//     console.log('too yong');
// }
// console.log(age);


 /* DOM if else function */
// const h1 = document.querySelector('#title');

// const BASE_COLOR = "rgb(178, 190, 195)";
// const OTHER_COLOR = "#2d3436";

// //click이벤트 https://developer.mozilla.org/ko/docs/Web/Events
// function handleClick(){
//     //console.log(h1.style.color);
//     const currentColor = h1.style.color;
//     if(currentColor === BASE_COLOR){
//         h1.style.color = OTHER_COLOR;
//     } else {
//         h1.style.color = BASE_COLOR;
//     }
// }

// function init(){ //모든 어플리케이션을 초기화 
//     h1.style.color = BASE_COLOR;
//     h1.addEventListener("click", handleClick); 
// }
// h1.addEventListener("click", handleClick); 
// init();

// console.log(h1);

// function handleOffline(){
//     console.log('lalalalal'); 
// }
// function handleOnline(){
//     console.log('welcome'); 
// };
// window.addEventListener("offline", handleOffline);
// window.addEventListener("online", handleOnline);
// console.log(); //객체

/* 복습 https://dmitripavlutin.com/what-is-string-in-javascript/  */
// const smile = `😀`;
// console.log(`😈` + smile.length);
// console.log(smile);

// function imoge(imo, ele){
//     console.log(`This is ${imo}, I'm very ${ele}`);
// }
// imoge(`😈 imoge`,"angry");

// const h2 = document.querySelector('#tit');
// // console.log(h2);

// const BASE_COLORS = "rgb(73, 179, 224)";
// const OTHER_COLORS = "#105772";
// // const FONT_SIZE = "30px";

// function handleMouseenter(){
//     //console.log(h2.style.color);
//     const currentsColor = h2.style.color;
//     // const currentsFont = h2.style.fontSize;
//     if( currentsColor === BASE_COLORS ){
//         h2.style.color = OTHER_COLORS;
//         // h2.style.fontSize = FONT_SIZE;
//         h2.innerHTML = `😈Imoge`;
//     } else {
//         h2.style.color = BASE_COLORS;
//         h2.innerHTML = `😀Imoge`;
        
//     }
// }

// function CCC(){
//     h2.style.color = BASE_COLORS;
//     h2.addEventListener("mouseenter", handleMouseenter);
// }
// CCC();

//console.log(h2);

/* 0903 */

// const h1 = document.querySelector('#title');
// const CLICKED_CLASS = "clicked";

// function handleClick(){
//     const currentClass = h1.className;
//     // console.log(currentClass); 클래스 이름 빔
//     if(currentClass !== CLICKED_CLASS){
//         h1.className =  CLICKED_CLASS;
//     } else{
//         h1.className = "";
//     }
// }

// function handleClick(){
//     const hasClass = h1.classList.contains(CLICKED_CLASS);
//     // console.log(currentClass); 클래스 이름 빔
    
//     // if(!hasClass){ //한개 클래스만 체크되서 이것도 바꿔야함 contain -> value 체크 
//     //     //!hasClas false일 때 true 이다
//     //     h1.classList.add(CLICKED_CLASS);
//     // } else{
//     //     h1.classList.remove(CLICKED_CLASS); //상태가 돌아가지 않는다
//     // }

//     // if(hasClass){ //한개 클래스만 체크되서 이것도 바꿔야함 contain -> value 체크 
//     //     //!hasClas false일 때 true 이다
//     //     h1.classList.remove(CLICKED_CLASS); 
//     // } else{
//     //     h1.classList.add(CLICKED_CLASS);  
//     // }
    
// }

// function init(){ 
//     h1.addEventListener("click", handleClick); 
// }

// init();

// console.log(h1); //확인용

// const h1 = document.querySelector('#title');
// const CLICKED_CLASS = "clicked";

// function handleClick(){
//     h1.classList.toggle(CLICKED_CLASS);
    
// }

// function init(){ 
//     h1.addEventListener("click", handleClick); 
// }

// init();

// console.log(h1); //확인용

/***************************************************************************************/

 // alert('im working'); //경고창
        /* 변수 */
        // const a = 221; // 상수 변하지 않음, 첫 사용
        // let b = a - 5; // 변수 바꿀 수 있음, 필요할 때만, 변수 초기화, 생성
        // //var c = 1;  변수 바꿀 수 있음
        // //a = 4; const 선언시 바꿀 수 없음
        // console.log(b, a);

        /* 데이터 */
        // /*--------------------------------------------------*/
        // //string 문자열 객체
        // const what = '뭉뭉이';
        // console.log(what);

        // //boolean 참 거짓
        // const wat = true; 
        // console.log(wat);

        // //number
        // const num1 = 55;
        // console.log(num1);

        // //float
        // const num = 55.1;
        // console.log(num);


        // /*--------------------------------------------------*/
        // //Array 배열-> 데이터 형/ 리스트
        // const something = "something";
        // const dayOfWeek = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun', true, 444, 'stuff', something];
        // console.log(dayOfWeek);
        // console.log(dayOfWeek[0]);

        // const mon = 'Mon';
        // const tue = 'Tue';
        // const wen = 'Wen';
        // const fri = 'Fri';
        // console.log(mon, tue, wen, fri);

        // //Object 각 value에 값을 줄 수 있다. -> 실제 객체  ->object 안에 array넣을 수 있다.

        // const myInfo = {
        //     name : "yuna",
        //     age : 33,
        //     gender : 'Male',
        //     isHandsome : true,
        //     favMovies : ['joker','LOTR','Oldboy'],
        //     //object안에 array만들기
        //     favFood : [
        //         {
        //             name:'kimchi', 
        //             fatty:false
        //         }, 
        //         {
        //             name:'chese burger',
        //             fatty : true
        //         }
        //     ]
        // };
        // console.log(myInfo.favFood[0].fatty);
        // console.log(myInfo.favFood[0].name);
        // console.log(myInfo);
        // //const 안의 값을 바꿀 수 있다. object 접근
        // console.log(myInfo.gender);

        // myInfo.gender = "Female";
        // console.log(myInfo.gender);

        // console.log(myInfo, console);

        // //console.log, alert 내장함수


        // /*--------------------------------------------------*/
        // //첫 함수
        // function sayHello(name, age){//감자 파라미터,인자, 함수 안에서 사용할 변수, 함수 외부에 데이터를 주는 방법
        //     console.log('hello!', name, 'you have', age, 'years of age.');//''싱글 
        //     console.log("hello!" + name + "you are" + age + "years old.");//""더블 
        //     console.log(`hello ${name} you are ${age} years old`);//``백틱
        //     //console.log(arg1,arg2);
        // }
        // sayHello('yuna', 15);//argument(인자) = 변수 같은 것,값을 저장 

        // //log = 함수(console object 안에 있는 함수)
        // console.log("Hi");


        // /*--------------------------------------------------*/
        // //두번째 함수 잘못된 것
        // function sayHEllo(name, age){
        //     return `hello ${name} you are ${age} years old`; //return 잔돈받기 같은것 console.log 로 하면 undefined
        // }

        // const greetYuna = sayHEllo("Yuna", 6) //greetYuna sayHello의 리턴 값/실행된 값/반환 값
        // console.log(greetYuna)


        // /*--------------------------------------------------*/
        // const calculator = {
        //     plus: function(a, b){
        //         return a + b;
        //     },
        //     minus: function(a, b){
        //         return a - b;
        //     },
        //     multiply: function(a, b){
        //         return a * b;
        //     },
        //     devide: function(){
        //         return a / b;
        //     },
        //     power: function(){
        //         return a ** b;
        //     }

        // }
        // //plus() 두개의 인자를 가진 함수
        // //           console.log(greetYuna)
        // const plus = calculator.plus(5, 5)
        // const minus = calculator.minus(5, 5)
        // const multiply = calculator.multiply(5, 5)
        // const devide = calculator.devide(5, 5)
        // const power = calculator.power(5, 5)

        // //방법 1
        // console.log(plus);
        // console.log(minus);
        // console.log(multiply);
        // console.log(devide);
        // console.log(power);

        // //방법 2
        // console.log(`결과 :  ${plus},  ${minus},  ${multiply},  ${devide},  ${power}`)

        // //방법 3
        // result = {
        //     plus: calculator.plus(5, 5),
        //     minus: calculator.minus(5, 5),
        //     multiply: calculator.multiply(5, 5),
        //     devide: calculator.devide(5, 5),
        //     power: calculator.power(5, 5),
        // };
            
        // console.log(result);


        // /*---------------------------0825-----------------------------*/
        // //함수들은 우리가 찾는 객체상태의 함수를 DOM 형태로 변형이 가능
        // const title = document.querySelector('#title');// csst선택자와 비슷
        // //const title = document.getElementById('title');
        // //const title = document.getElementsByClassName('title');
        // title.innerHTML = "Hi From js"; //가나다라마바사에서 바뀌었다.
        // title.style.color = "#000";
        // console.log(title); //모든 HTML은 객체가 된다. ex).log,.name,.handsome,.plus => 객체
        // // console.errer('에러닷');
        // console.dir(title);//자바스크립트 객체 표기법이 나옴

        // document.title = "I own you now!";