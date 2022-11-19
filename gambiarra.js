const input1 = document.querySelector('.login_input1');
const input2 = document.querySelector('.login_input2');
const button = document.querySelector('.login_button');
const form = document.querySelector('.login_form');
var paranaue = 0;
localStorage.clear();

const validateInput1 = ({ target }) => {
    if(target.value.length > 2){
        paranaue = 1;
    }

    button.setAttribute('disabled', '');
}
const validateInput2 = ({ target }) => {
    if(target.value.length > 2){
        if(paranaue===1){
            button.removeAttribute('disabled');
            return;
        }
    }

    button.setAttribute('disabled', '');
}

const handlesubimit = (event) => {
    event.preventDefault();

    localStorage.setItem('JogadorVelha1', input1.value);
    localStorage.setItem('JogadorVelha2', input2.value);
    window.location = 'jogo.html';
}

input1.addEventListener('input',validateInput1);
input2.addEventListener('input',validateInput2);
form.addEventListener('submit', handlesubimit);