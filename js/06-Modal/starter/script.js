'use strict';

const model = document.querySelector('.modal')
const overlay =document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnOpenModal = document.querySelectorAll('.show-modal')

const openFunc=function(){
	model.classList.remove('hidden')
	overlay.classList.remove('hidden')
}

for (let i = 0; i < btnOpenModal.length; i++) {
	console.log(btnOpenModal[i].textContent);
	btnOpenModal[i].addEventListener('click',openFunc)
		
}
const closeFunc=function(){
	model.classList.add('hidden')
	overlay.classList.add('hidden')
}

btnCloseModal.addEventListener('click',closeFunc)
overlay.addEventListener('click',closeFunc)

document.addEventListener('keydown',function(event){
	console.log(event);
	console.log(event.key);

	if (event.key === 'Escape' && !model.classList.contains('hidden')){
			closeFunc()
		
	}


})