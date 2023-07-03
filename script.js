const form = document.querySelector("#tst");
const ratingCard = document.querySelector("#rating-card");
const thankCard = document.querySelector("#thank-card");
const selected = document.querySelector('#selection');
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const selectedRadioButton = document.querySelector(
    'input[name="rate-value"]:checked'
  );
  const selectedValue = selectedRadioButton.value;
  ratingCard.classList.add('is-hidden')
  setInterval(() => {
    thankCard.classList.remove('is-hidden')
    selected.textContent = selectedValue;
  }, 100)
});
