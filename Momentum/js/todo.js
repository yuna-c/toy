const toDoForm = document.querySelector(".js-todoform"),
      toDoInput = toDoForm.querySelector("input"),
      toDoList = document.querySelector(".js-todolist");

const TODOS_LS = "toDos";

let toDos = []; //TODO 저장하기 []비어있음, todolist가 만들어졌을 때 toDos array에도 추가가 되도록 만들 것

function deleteToDo(event){
    //console.log(event.target.parentNode); //x의 버튼 위치만 //parentNode 부모찾기 
    //console.dir 타겟의 정보를 찾을 때
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    //clean todo
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id); //parseInt -> string다시 숫자 변환 
    });//forEach와 같이 각각의 item이 실행됨
    // console.log(cleanToDos);
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){ //localstorage에도 저장하기 위해
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); //object를 string으로 바꾸기 위해 쓰는 것
}

function paintToDo(text){ //엘리먼트 만들기
    // 확인 console.log(text);
    const li = document.createElement("li"); // 비어있는 생성 
    const delBtn = document.createElement("button"); // 버튼 생성
    const newId = toDos.length + 1;
    delBtn.innerText = '❌';
    delBtn.addEventListener("click", deleteToDo); //todo delete
    const span = document.createElement("span"); //스팬 생성
    span.innerText = text;
    li.appendChild(span); //아빠 요소한테 넣는 것이다. //스팬과 버튼을 li안에다 넣음
    li.appendChild(delBtn); //스팬과 버튼을 li안에다 넣음
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text : text,
        // id : toDos.length + 1,
        id : newId //localstorage에도 저장하기 위해
    };
    toDos.push(toDoObj);
    saveToDos();

}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = ""; //삭제
}



function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        //console.log(loadedToDos); //스트링으로 불러옴
        const parsedToDos = JSON.parse(loadedToDos);
        // console.log(parsedToDos);
        //array forEach
        parsedToDos.forEach(function(toDo){// 자동적으로 console.log를 text로출력
           // console.log(toDo.text);
           paintToDo(toDo.text);
        });
        //함수 실행 array에 담긴 것들을 한번씩 실행

    } 
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}
init();

/* 복습

const toDoForm = document.querySelector(".js-todoform"),
      toDoInput = toDoForm.querySelector("input"),
      toDoList = document.querySelector(".js-todolist");

const TODOS_LS = 'toDos';//상수


//const ->let 으로 바꾸자 , 
let toDos = []; //todolist가 만들었을때 todos array에 추가되도록 만들꺼
//todo 지우기
function deleteToDo(event){
    //console.log(event.target.parentNode); //x의 버튼 위치만 //parentNode 부모찾기 
    //console.dir 타겟의 정보를 찾을 때
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    //clean todo
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id); //parseInt -> string다시 숫자 변환 
    });//forEach와 같이 각각의 item이 실행됨
    // console.log(cleanToDos);
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); //스트링으로 저장하기위해
}

function paintToDo(text){
    //console.log(text);
    const li = document.createElement("li"); //li를 만들고
    const delBtn = document.createElement("button"); //버튼을 만들고
    const span = document.createElement("span");//li안에 스펜을 만들고
    const newId = toDos.length + 1; //li 에 id줌
    delBtn.innerHTML = "❌"; //innerText도 가능 버튼안에 이모지를 넣고
    delBtn.addEventListener("click", deleteToDo); //todo delete
    span.innerText = text;//텍스트를 넣을 꺼다

    li.appendChild(delBtn);// 부모 버튼에
    li.appendChild(span);//li의 부모 스펜에
    li.id = newId;//로컬 스트리지에 저장위해 
    toDoList.appendChild(li);// 투두리스트 li를 삽입

    const toDoObj = {
        text : text,
        id : newId
    };
    toDos.push(toDoObj);
    saveToDos();//object로 나옴 -> string으로저장해야함
          
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){//❌ 
        // toDoForm  스트링을 오브젝트로 또 바꿔야 지워짐
        // console.log(loadedToDos);
        const parsedToDos = JSON.parse(loadedToDos);
        // console.log(parsedToDos);
        parsedToDos.forEach(function(toDo){
            console.log(toDo.text);
            paintToDo(toDo.text);
        });//array에 담겨있는 것을 각각 한번씩 함수 실행시켜주는 것
    } 
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}
init();
 */