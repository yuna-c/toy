'use strict'; // 엄격모드

// 변수 할당
let num;
let posNum;
let posAnswer;

// 난수 생성 함수
function numMaker() {
  // let minNum = 33;
  // let maxNum = 11;

  // 1000~9000 사이의 올림/버림 정수 생성 
  let minNum = Math.ceil(1000);
  let maxNum = Math.floor(9000);

  // 숫자 섹션
  let posNum = document.querySelector('.posNum');

  // 난수 만들기
  num = Math.floor(Math.random() * (maxNum - minNum) + minNum);

  // 숫자 외부 HTML 표시 node,class,id
  posNum.innerHTML = `${num}`;
  // document.getElementsByClassName('randomNum')[0].innerHTML = `${num}`;
  // document.getElementById('randomNum').innerHTML = `${num}`;

  // 외부 허용 return
  return num;

}
// console.log(numMaker());

// 게임 시작 함수
function startGame() {

  let posAnswer = document.querySelector('.posAnswer');
  posAnswer.style.display = "none";

  numMaker();

  let posNum = document.querySelector('.posNum');
  posNum.style.display = "block";

  console.log(posNum);
  console.log(posAnswer);

  setTimeout(() => {
      endGame()
  }, 3000);
}

// posAnswer = document.querySelector('.posAnswer');
// posAnswer.style.display = "block";
// console.log(posAnswer);

// 게임 종료 함수
function endGame(){

  let posNum = document.querySelector('.posNum');
  posNum.style.display = "none";
}

// 정답 제출 함수
function submitAnswer() {
  let posAnswer = document.querySelector('.posAnswer');
  posAnswer.style.display = "block";

  let spaceNum = document.querySelector('.spaceNum').value;
  if(spaceNum == num) posAnswer.innerHTML = `정답입니다`;
  else posAnswer.innerHTML = `오답입니다! 정답은 ${num}`;
}


// //input바깥을 클릭하면 찍힘
// spaceNum.addEventListener("change", function(e) {
//     console.log("onchange", e.target.value);
		
// })

//  // 값이 바뀔때마다 찍힘
// spaceNum.addEventListener("input", function(e) {
//   console.log("oninput", e.target.value);
// })