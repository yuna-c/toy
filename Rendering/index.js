'use script';

let list = ``;
const menuList = document.querySelector('#menuList');

const menuItems = [
  { name: '비빔밥', description: '밥 위에 나물, 고기, 고추장 등을 얹고 비벼 먹는 한국 요리', price: '7.000' },
  { name: '김치찌개', description: '김치와 돼지고기 등을 넣고 끓인 한국의 찌개 요리', price: '7.000' },
  { name: '불고기', description: '양념한 고기를 구워서 먹는 한국 요리', price: '12.000' },
  { name: '떡볶이', description: '떡과 어묵을 고추장 양념에 볶아 만든 한국의 간식', price: '4.000' },
  { name: '잡채', description: '당면과 여러 채소, 고기를 볶아 만든 한국 요리', price: '8.000' },
  { name: '된장찌개', description: '된장과 여러 채소를 넣어 끓인 한국의 찌개 요리', price: '7.000' },
  { name: '감자전', description: '감자를 강판에 갈아 구운 한국의 전 요리', price: '5.000' },
  { name: '제육볶음', description: '돼지고기를 고추장, 고춧가루와 양념해 양파와 볶은 한국의 볶음 요리', price: '10.000' }
];

const menuElements = menuItems.map((data, idx) => {
  const { name, description, price } =  data;

  if(data.description.includes('고기')) {
    list += `
    <li class="color">
      <h3>${data.name}</h3>
      <p>${data.description}</p>
      <p>${data.price}원</p>
    </li>`;
    } else {
      list += `
      <li>
        <h3>${data.name}</h3>
        <p>${data.description}</p>
      </li>`;
    }
    
    return false;
});

menuList.innerHTML = list;