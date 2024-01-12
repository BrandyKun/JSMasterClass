'use strict';

const modal  = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');

for (let i = 0; i < btnsOpenModal.length; i++) 
    // console.log((btnsOpenModal[i].textContent));
    btnsOpenModal[i].addEventListener('click', function() {
        console.log('button clicked');

        modal.classList.remove('hidden');
        overlay.classList.toggle('hidden');
    });

    btnCloseModal.addEventListener('click', function() {
        modal.classList.toggle('hidden');
        overlay.classList.toggle('hidden');
    })