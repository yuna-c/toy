/* <script type="module"> */

// Firebase SDK 라이브러리 가져오기
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js';
import { collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js';
import { getDocs } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js';

// Firebase 구성 정보 설정
const firebaseConfig = {
	// 본인 설정 내용 채우기
};

// Firebase 인스턴스 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 데이터 추가 스켈레톤
$('#id').click(async function () {
	let doc = {};
	await addDoc(collection(db, '콜렉션이름'), doc);
});

// 데이터 읽기 스켈레톤 코드
let docs = await getDocs(collection(db, '콜렉션이름'));
docs.forEach((doc) => {
	let row = doc.data();
	console.log(row);
});

/* </script> */
