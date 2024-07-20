const body = document.querySelector("body");

// 원하는 숫자
const IMG_NUMBER = 3;

/*
API 용
function handleImageLoad(){
    console.log("finished loading");
}
*/

function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image); //appendChild아빠요소에 넣는다
    // API 용
    // image.addEventListener("loaded", handleImageLoad); //handleImage
}

//math.random() --> 소수점
//math.random() * 5 --> MAX 5까지
//math.floor() --> 소숫점 버림
//math.ceil() --> 소숫점 올림
//math.floor(math.random() * 5) --> 0 ~ 5
function genRandom(){
    // 원하는 숫자를 사용하면 원하는 숫자가 바뀐다
    const number =  Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

//함수 불러오기 위한 함수
function init(){
    //숫자 생성
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();