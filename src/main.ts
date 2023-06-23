const email = document.getElementById('email') as HTMLInputElement;
const errorMsg = document.getElementById('error-msg') as HTMLElement;
const submitBtn = document.getElementById('submit-btn') as HTMLButtonElement;
const subscriptionPage = document.getElementById('subscription-page') as HTMLElement;
const successPage = document.getElementById('success-page') as HTMLElement;
const successEMail = document.getElementById('success-email') as HTMLElement;
const dismissBtn = document.getElementById('dismiss-btn') as HTMLButtonElement;
const regex = /^\w+@\w+\.\w+$/;

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (!email.value) {
    errorMsg.innerText = 'Email cannot be empty';
  } else if (!regex.test(email.value)) {
    errorMsg.innerText = 'Valid email required';
  }

  if (regex.test(email.value)) {
    subscriptionPage.classList.add('hidden');
    successPage.classList.remove('hidden');
    successEMail.innerText = email.value;
  } else {
    e.preventDefault();
    email.classList.add('error');
    errorMsg.classList.remove('hidden');
  }
});

dismissBtn.addEventListener('click', (e) => {
  e.preventDefault();
  successPage.classList.add('hidden');
  subscriptionPage.classList.remove('hidden');
});

email.addEventListener('input', () => {
  email.classList.remove('error');
  errorMsg.classList.add('hidden');
});
