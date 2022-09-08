

let btnSubmit = document.querySelector('.btn-submit');
let btns = document.querySelectorAll('.btn');


let btnOne = document.getElementById('one');
// console.log(btnOne.innerHTML)

let rate = document.querySelector('.rate');

let thanks = document.querySelector('.thanks');
let res = document.querySelector('.result');



for (let btn of btns) {
    btn.addEventListener('focus', () => {
        btnSubmit.addEventListener('click', () => {
            rate.classList.add('rate-disabled')
            thanks.classList.remove('thanks-disabled')
            res.innerHTML = btn.innerHTML  
        });
    });
}




