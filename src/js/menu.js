let menu = document.querySelector('.menu-burger');
let body = document.querySelector('body');
let headerMenu = document.querySelector('.header-menu');
let mobileMenu = document.querySelector('.menu-mobile');


menu.addEventListener('click', event => {
  event.preventDefault();
  menu.classList.toggle('start');// замінила active на start+ в стилях
  headerMenu.classList.toggle('start');
  mobileMenu.classList.toggle('hidden');
  body.classList.toggle('lock');
});

//Validation input form
let form  = document.querySelector('form');
let fields = form.querySelectorAll('.field');

form.addEventListener('submit', function (event) {
  event.preventDefault()

  var errors = form.querySelectorAll('.error')

  for (var i = 0; i < errors.length; i++) {
    errors[i].remove()
  }

  for (var i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      var error = document.createElement('div')
      error.className = 'error'
      error.style.color = 'red'
      error.innerHTML = 'Cannot be blank'
      form[i].parentElement.insertBefore(error, fields[i])
    }
  }

})

//відкриття форми

let closeButton = document.querySelector('#close');
let sendButton = document.querySelector('#send');
let headerBtnOpenform = document.querySelector('#btn');
let formSend = document.querySelector('.form-send');

headerBtnOpenform.addEventListener('click', event => {
  event.preventDefault();
  formSend.classList.add('show');
});

closeButton.addEventListener('click', event => {
  event.preventDefault();
  formSend.classList.remove('show');
  formSend.classList.add('hide');
});

sendButton.addEventListener('submit', event => {
  event.preventDefault();

  formSend.classList.remove('show');
  formSend.classList.add('hide');
  sendMessage(form);
});

//function send message form

async function sendMessage(form) {
  const formData = new formData(form);
  if (formData){
    const url = 'sendmessage.php';
    const response = await fetch(url,{
      method:"POST",
      body:formData
    });
    if (response.ok){
      formSend.reset();
      alert('Form sent');
    } else {
      alert ('Eror');
    }
   }
}

