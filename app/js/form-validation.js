/*
    ------------------------
    ------- Variables ------
    ------------------------
*/
const form = document.getElementById('form');
const name = document.getElementById('name');
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
    let nameValue = name.value.trim();
    let emailValue = email.value.trim();
    let companyValue = company.value.trim();
    let phoneValue = phone.value.trim();
    let textValue = text.value.trim();
    hasError = false;

    if (nameValue === ''){
        setErrorFor(name, 'Name cannot be blank');
    }

    if (emailValue === ''){
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isValid(emailValue)){
        setErrorFor(email, 'Email is not valid');
    }

    if (companyValue === ''){
        setErrorFor(company, 'Company cannot be blank');
    }

    if (phoneValue === ''){
        setErrorFor(phone, 'Phone cannot be blank');
    }

    if (textValue === ''){
        setErrorFor(text, 'Text cannot be blank');
    }

    if (!hasError){
        clearInputs();
    }

}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.style.display = 'block';
    small.innerText = message;
    hasError = true;
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