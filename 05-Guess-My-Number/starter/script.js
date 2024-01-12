'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent= 'Correct Number';

// document.querySelector('.number').textContent= 13;
// document.querySelector('.score').textContent= 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let score = 20;
let highScore = 0;

const number = Math.floor(Math.random() * 20 + 1);
console.log(number);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent =
      '⛔️ Number not valid or Null';
  } else if (guess === number) {
    document.querySelector('.message').textContent = '🎉 Correct Number';

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = guess;

  } else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
   score = 20;
   document.querySelector('.score').textContent = score;
   highScore = 0;

   document.querySelector('.guess').value = '';
   document.querySelector('body').style.backgroundColor = '#222';
   document.querySelector('.number').textContent = '?';
   document.querySelector('.message').textContent = 'Start guessing...';


})
