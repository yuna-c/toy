//1
const canvas = document.getElementById('jsCanvas');
//8 
const ctx = canvas.getContext('2d'); //canvas 안에 context요소를 가지고 있다. 픽셀 컨트롤 => getContext() 픽셀 안에 접근 할 수있게 하는 요소 
//ctx.strokeStyle = "#2c2c2c"; //주어진 (x, y) 위치에 주어진 색을 준다. default
//12
const colors = document.getElementsByClassName('jsColor');
//15
const range = document.getElementById('jsRange');
//18 
const mode = document.getElementById('jsMode');
//26 버튼 저장
const saveBtn = document.getElementById('jsSave');


//21 
const INITIAR_COLOR = "#2c2c2c";
//23
const CANVAS_SIZE = 700; //700px



//11 width,height를 js상에서도 잡아줘야 line이 나옴 fixel modifer
canvas.width = CANVAS_SIZE; 
canvas.height = CANVAS_SIZE;



//24
ctx.fillStyle = "white"; //png 배경 투명이라서 default값 잡아줘야돼 
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
//21
ctx.strokeStyle = INITIAR_COLOR; 
//ctx.fillStyle = "#2c2c2c"; // strokeStyle = fillStyle variable 같아야함
ctx.fillStyle = INITIAR_COLOR; 
//8
ctx.lineWidth = 2.5; // 라인너비, input type = range, px



//4 
let painting = false;
//19
let filling = false; //filling하고 있으면 그걸 말해줄 variable(변수) 필요함

/*3
function onMouseDown(event){
    //console.log(event);
    painting = true;  //캔버스를 눌렀을때 painting이 true가 된다. 클릭을 멈췄을때는 다시 false로 돌아가 클릭 못하게
}
*/



/*6
function onMouseLeave(event){
    painting = false; 
} 
*/

//7
function stopPainting(){
    painting = false;
}

//9
function startPainting(){
    painting = true;
}

//2
function onMouseMove(event){ //중요, 라인 만들어야하기 때문
    //console.log(event);
    //offset -> 캔버스 내부 부분만 관련있는 값, 선택한 요소의 좌표를 가져옴
    //client -> body내의 좌표값

    const x = event.offsetX;
    const y = event.offsetY;

    //console.log(x,y); 캔버스 안에 좌표를 가지고옴

    //10 
    if (!painting) { //클릭 하지 않고 움직였을때, Path(선)실행 
        //console.log("creating path in", x, y);
        ctx.beginPath(); //하위 경로 목록을 비워 새 경로를 시작, 새 경로를 만들려면이 메서드를 호출
        ctx.moveTo(x, y); //시작점을 (x, y) 좌표로 이동
    } else {
        //경로의 마지막 점을 지정된 (x, y) 좌표에 직선으로 연결
        //console.log("creating line in", x, y);
        ctx.lineTo(x, y); //시작부터 지금위치까지 패스를 만든다
        ctx.stroke(); //획을 그림
        //ctx.closePath();
    }
}

//14
function handleColorClick(event){
    //console.log(event.target.style);
    const color = event.target.style.backgroundColor;
    //console.log(color);

    ctx.strokeStyle = color; //default 값을 target으로 받아서 바꾸게 하는 법 
    //20 
    ctx.fillStyle = color;
}

//17
function handleRangeChange(event){
    //console.log(event.target.value);
    const size = event.target.value;
    ctx.lineWidth = size;
}

//13
//console.log(colors);
//console.log(Array.from(colors)); //Array.from() object로 부터 array를 만듬

//Array안에서 forEach로 color을 가질 수 있다.

//16
function handleModeClick(){
    if(filling === true){
        filling = false;
        mode.innerText = "Fill";
    } else {
        filling = true; 
        mode.innerText = "Paint";
        //20
        //ctx.fillStyle = ctx.strokeStyle; //컬러차트 색 가져오기
    }
}

//22
function handleCanvasClick(){
    //ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    //ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (filling) {
        ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    }
}

//5
function onMouseUp(event){
    //console.log(event);
    //painting = false;
    stopPainting()
    //라인이 필요하기 때문에 이건 생략 안함
}

//25 우클릭 방지
function handleCM(event){
    //console.log(event);
    event.preventDefault();
    
}

//28
function handleSaveClick(){ 
    //1 캔버스 데이터를 이미지처럼 얻기
    const image = canvas.toDataURL(); 
    //console.log(image);
    //2 링크 만들기
    const link = document.createElement("a");
    link.href = image;
    link.download = "PaintJS[😃]";
    //console.log(link);
    //3 클릭 가짜로 만들기
    link.click();
    //console.log(link);

}



if (canvas) { //if 컨버스 성공
    canvas.addEventListener("mousemove", onMouseMove);
    //canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mousedown", startPainting);
    //canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    //22
    canvas.addEventListener("click", handleCanvasClick);
    //25 우클릭 방지 이벤트
    canvas.addEventListener("contextmenu", handleCM); 
}



//if (colors) { 확인 방법 작동 오류있는지 없는지
    Array.from(colors).forEach(color => //네이밍 맞춰주면 뭐든 상관 X
        color.addEventListener("click", handleColorClick)
    );
//}

//16
if (range) {
    //console.log(range);
    range.addEventListener("input", handleRangeChange);
}

//16
if(mode){
    mode.addEventListener("click", handleModeClick);
}

/*
//20 Fill 색상으로 canvas 채우기
ctx.fillStyle = "pink"; //색상 채우기, fillRect 위에 있어야 함
ctx.fillRect( 50, 20, 100, 49 ); //x, y, width, height / 사각형 랜더링 
ctx.fillStyle = "red"; // 몇개를 해도 앞의 사각형에 영향을 주지 않는다.
ctx.fillRect( 80, 100, 100, 49 );  
*/

//27 버튼저장
if(saveBtn){
    saveBtn.addEventListener("click", handleSaveClick);
}