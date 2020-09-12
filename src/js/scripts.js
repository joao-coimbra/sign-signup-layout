let changeButtonClick = document.querySelector('.change-button button');
let changeButtonText = document.querySelector('.change-button strong');

let signIn = document.querySelector('.sign-in');
let changeButton = document.querySelector('.change-button');
let signUp = document.querySelector('.sign-up');

changeButtonClick.addEventListener('click', () => {
    if (changeButtonText.innerHTML == 'Sign Up') {
        signIn.classList.toggle("sign-in-toggle");
        signUp.classList.toggle("sign-up-toggle");

        setTimeout(() => {
            changeButton.classList.toggle("change-button-toggle");
            changeButtonText.innerHTML = 'Sign In';
        }, 500);

    } else {
        signIn.classList.toggle("sign-in-toggle");
        signUp.classList.toggle("sign-up-toggle");

        setTimeout(() => {
            changeButton.classList.toggle("change-button-toggle");
            changeButtonText.innerHTML = 'Sign Up';
        }, 500);
    }
})