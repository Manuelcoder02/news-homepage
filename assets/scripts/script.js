'use strict';

const dropdownButtonEL = document.querySelector('.dd-btn');
const navbarContentEL = document.querySelector('.nav-bar');
const closeBtnEL = document.querySelector('.close-btn');


dropdownButtonEL.addEventListener('click', function(){
  navbarContentEL.classList.remove('hidden');
  
  
})
closeBtnEL.addEventListener('click', function(){
  navbarContentEL.classList.add('hidden');
})