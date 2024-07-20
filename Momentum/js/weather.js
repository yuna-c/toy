//10 
const weather = document.querySelector('.js-weather');

//9 API KEY
const API_KEY = "8258ee9675ecbef48221f95ad1a56743";

//3 스트링 상수
const COORDS = 'coords';
//https://openweathermap.org/api 구글 아이디!

//10 새로고침 없이 데이터 가져오기 및 string상태로 데이터 가져오기
function getWeather(lat, lon){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        //units=metric 기온 도로 바꾸는 법
        //$, appid 추가
    )
    .then(  //데이터가 완전히 들어 온 다음에 함수를 호출
        function(response){ //데이터 호출중, 
            return response.json();
    })
    .then(function(json){ //끝날 때 then을 쓴다
        //제이슨 호출 준비되면 
        //console.log(json); 로 온도/지역 보기
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    })
   
}

//7 좌표 저장
function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
    //저장값은 string이어야 하니까 JSON.stringify(coordsObj)
}

//6 좌표 가져오는 것 실패 함수 
function handleGeoError(){
    console.log('cant access geo location');
}

//5 좌표 가져오는 것 성공했을 때 처리하는 함수, 좌표값이 없을때만 실행 else
function handleGeoSucces(position){
    //console.log(position.coords.latitude); //위도 체크
    const latitude = position.coords.latitude; //위도
    const longitude = position.coords.longitude; //경도
    const coordsObj = { //객체
        // latitude: latitude, //객체 변수 이름 : 객체 키 이름 같게 저장시
        // longitude: longitude
        latitude, //객체 변수 이름 : 객체 키 이름 같게 저장시 간편버전
        longitude
    };
    saveCoords(coordsObj);
    //9
    getWeather(latitude, longitude);
}

//4 좌표 생성 함수
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
    //API 좌표 객체 가져오는 것 성공했을 때 처리하는 함수(5,6)
}
//2
function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){ //스트링 값이 undefind이면 
        askForCoords(); //좌표 함수를 호출한다
    }else{  //get Weather
       const parseCoords = JSON.parse(loadedCoords); //tmxmfld
       console.log(parseCoords);
       //9 함수 호출
       getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}
//1
function init(){
    //2
    loadCoords();
}

init();

//https://openweathermap.org/current 
//By geographic coordinates