'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
for(let i = 0; i<btnsOpenModal.length; i++)
btnsOpenModal[i].addEventListener('click', openModal);


  const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');

  }
 btnCloseModal.addEventListener('click', closeModal);
 overlay.addEventListener('click', closeModal);

 //HOW TO RESPOND TO KEYBOARD EVENTS
 //WE USE EVENT LISTENER

 document.addEventListener('keydown', function(e) {
//we have to look at the event presser
if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
  closeModal();
}
 });
