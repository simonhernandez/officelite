/*
    ------------------------
    ------- Variables ------
    ------------------------
*/
const form = document.getElementById('form');
const namee = document.getElementById('name');
const email = document.getElementById('email');
const company = document.getElementById('company');
const phone = document.getElementById('phone');
const text = document.getElementById('text');
const planSelector = document.getElementById('plansSelector');
const planMenu = document.getElementById('plansMenu');
const planItems = document.querySelectorAll('.plans__item');
const plansPlan = document.getElementById('plansPlan');
var hasError;

/*
    ------------------------
    --------- Main ---------
    ------------------------
*/
form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

planSelector.addEventListener('click', () => {
    planMenu.classList.toggle('show-plans');
    planSelector.classList.toggle('isOpen');
});

planItems.forEach(item => item.addEventListener('click', setSelected));

/*
    ------------------------
    ------- Functions ------
    ------------------------
*/
function checkInputs(){
    let nameValue = namee.value.trim();
    let emailValue = email.value.trim();
    let companyValue = company.value.trim();
    let phoneValue = phone.value.trim();
    hasError = false;

    if (nameValue === ''){
        setErrorFor(namee);
    }

    if (emailValue === ''){
        setErrorFor(email);
    } else if (!isValid(emailValue)){
        setErrorFor(email);
    }

    if (companyValue === ''){
        setErrorFor(company);
    }

    if (phoneValue === ''){
        setErrorFor(phone);
    }

    if (!hasError){
        clearInputs();
    }

}

function setErrorFor(input){
    const formControl = input.parentElement;

    formControl.classList.toggle('hasError');
}

function clearInputs(){
    name.value = '';
    email.value = '';
    company.value = '';
    phone.value = '';
    text.value = '';
}

function isValid(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function setSelected(){
    planItems.forEach(item => item.classList.remove('selected'));
    this.classList.add('selected');
    planMenu.classList.toggle('show-plans');
    planSelector.classList.toggle('isOpen');

    plansPlan.firstElementChild.innerText = this.firstElementChild.innerText;
    plansPlan.lastElementChild.innerText = this.lastElementChild.innerText;
}