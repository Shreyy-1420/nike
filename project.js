const setCookie = (cname, cvalue, exdays) => {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    document.cookie = `${cname}=${cvalue};expires=${d.toUTCString()};path=/`;
  };
  
  const handleButtonClick = (accepted) => {
    popup_bx.style.display = "none";
    setCookie("cookiesAccepted", accepted.toString(), 30);
  };
  
  const yes = document.getElementById('yes');
  const nope = document.getElementById('nope');
  const popup_bx = document.querySelector('.popup_bx');
  
  yes.addEventListener('click', () => handleButtonClick(true));
  nope.addEventListener('click', () => handleButtonClick(false));
  
let left = document.getElementsByClassName('bi-caret-left-fill')[0];
let right = document.getElementsByClassName('bi-caret-right-fill')[0];
let cards = document.getElementsByClassName('cards')[0];

left.addEventListener('click', () => {
cards.scrollLeft -= 210;
})
right.addEventListener('click', () => {
cards.scrollLeft += 210;
})

let poster = document.getElementById('poster');
let title = document.getElementById('title');
let price_cont = document.getElementById('price_cont');

Array.from(document.getElementsByClassName('card')).forEach((ele, i) => {
// console.log(ele)
ele.addEventListener('click', () => {
poster.src = ele.getElementsByTagName('img')[0].src;
title.innerText = ele.getElementsByTagName('h5')[0].innerText;
price_cont.innerText = ele.getElementsByTagName('h4')[0].innerText
})
})


Array.from(document.getElementsByTagName('input')).forEach((i, a)=>{
    i.addEventListener('focus', ()=>{
        document.getElementsByClassName('login_field')[a].style.borderBottom = "2px solid #be6b70";
    })
    i.addEventListener('focusout', ()=>{
        document.getElementsByClassName('login_field')[a].style.borderBottom = "2px solid gray";
    })
})