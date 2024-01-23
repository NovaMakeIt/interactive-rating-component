// Get all buttons with class "button-rating"
let ratingButtons = document.querySelectorAll('.button-rating');
const submit = document.getElementById('submit');
let buttonValue;


// Add a click event listener to each button
ratingButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Get the value of the clicked button
    buttonValue = button.value;
    console.log('Button Value:', buttonValue);
  });

});

submit.addEventListener('click', () => {
    if (buttonValue !== undefined) {
        const showCard = document.querySelector(`#rating-card`);
        const HTMLString = `
        <div class="thank-you-card">
            <div class="content-thank-you-card">

            <img src="./images/illustration-thank-you.svg">

            <div class="selected-button">
                <p class="selected-button-data">You selected ${buttonValue} out of 5</p>
            </div>

            <h1>Thank you!</h1>

            <p>We appreciate you taking the time to give a rating. If you ever need more support, 
            don’t hesitate to get in touch!</p>

            </div>
        </div>
        `;
        showCard.innerHTML = HTMLString;
        console.log('Submit:', buttonValue);
    }
    else {
        alert("Choisisser une valeur !");
    }
});