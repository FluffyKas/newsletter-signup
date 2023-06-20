const email = document.getElementById('email') as HTMLInputElement;
const errorMsg = document.getElementById('error-msg') as HTMLElement;
const submitBtn = document.getElementById('submit-btn') as HTMLButtonElement;
const regex = /^[w.-]+@[w.-]+.w+$/;
console.log('CICA');
console.log(email, submitBtn);

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (regex.test(email.value)) {
    console.log(regex.test(email.value));
    email.classList.remove('error');
    errorMsg.classList.add('hidden');
  } else {
    e.preventDefault();
    email.classList.add('error');
    errorMsg.classList.remove('hidden');
  }
});
