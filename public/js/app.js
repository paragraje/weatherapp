const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const msgOne = document.querySelector('#message_one');
const msgTwo = document.querySelector('#message_two');

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const location = search.value;

  msgOne.textContent = 'getting weather information.....';

  fetch('http://localhost:3000/weather?address='+location).then((response) => {

    response.json().then((data) => {
      if (data.error) {
        msgOne.textContent = data.error;
      } else {
        msgOne.textContent = data.location;
        msgTwo.textContent = data.forecast;
      }
    });

  });
});
