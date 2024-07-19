'use strict'; // 엄격모드

// 변수 할당
let num;
let spaceNum; 
let posNum = document.querySelector('.posNum');
let posAnswer = document.querySelector('.posAnswer');

// 난수 생성 함수
function numMaker() {
  // 1000~9000 사이의 올림/버림 정수 생성 
  let minNum = Math.ceil(1000);
  let maxNum = Math.floor(9000);

  // 난수 만들기
  num = Math.floor(Math.random() * (maxNum - minNum) + minNum);

  // 외부에 난수 찍기
  posNum.innerHTML = `${num}`;

  // 외부 허용 return
  return num;

}

// 게임 시작 함수
function startGame() {
  posAnswer.style.display = "none";
  numMaker();
  posNum.style.display = "block";
  // 3초 뒤 숫자 삭제 함수
  setTimeout(() => {endGame()}, 3000);
}

// 게임 종료 함수
function endGame(){
  posNum.style.display = "none";
}

// 정답 제출 함수
function submitAnswer() {
  posAnswer.style.display = "block";

  // input 값 가지고 오기
  let spaceNum = document.querySelector('.spaceNum').value;

  // 정답 체크
  if(spaceNum == num){ 
    posAnswer.innerHTML = `정답입니다`;
  }
  else{ 
    posAnswer.innerHTML = `오답입니다! 정답은 ${num}`;
  }

  // 문제 푼 후 input 초기화
  document.getElementById("spaceNum").value = '';

}

