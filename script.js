const min = document.getElementById('min');
const max = document.getElementById('max');
const guessInput = document.getElementById('guessInput');
const message = document.querySelector('.message');
const newTarget = document.getElementById('new-target');
const checkBtn = document.getElementById('check_btn');

let randomNumber;
let attempts = 0;

newTarget.addEventListener('click', function () {
    let minNumber = Number(min.value);
    let maxNumber = Number(max.value);

    if (!minNumber || !maxNumber || minNumber >= maxNumber) {
        message.innerHTML = 'Please enter valid Min and Max values where Min < Max!';
        return;
    }

    randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    attempts = 0;
    message.innerHTML = `Target number between ${minNumber} and ${maxNumber} generated. Start guessing!`;
    guessInput.value = '';
    guessInput.focus();
});

checkBtn.addEventListener('click', function () {
    if (!randomNumber) {
        message.innerHTML = 'Please click "New Target" first to generate a number!';
        return;
    }

    let userGuess = Number(guessInput.value);
    let minNumber = Number(min.value);
    let maxNumber = Number(max.value);

    if (isNaN(userGuess)) {
        message.innerHTML = 'Please type a valid number!';
        return;
    }

    if (userGuess < minNumber || userGuess > maxNumber) {
        message.innerHTML = `Your guess must be between ${minNumber} and ${maxNumber}!`;
        return;
    }

    attempts++;

    if (userGuess === randomNumber) {
        message.innerHTML = `🎉 Well Done! It took you ${attempts} attempts to guess the number ${randomNumber}.`;
    } else if (userGuess < randomNumber) {
        message.innerHTML = 'Too low! Try a higher number.';
    } else {
        message.innerHTML = 'Too high! Try a lower number.';
    }

    guessInput.value = '';
    guessInput.focus();
});
