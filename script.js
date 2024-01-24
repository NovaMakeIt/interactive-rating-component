let ratingButtons = document.querySelectorAll('.button-rating');
const submit = document.getElementById('submit');
let buttonValue;
let selectedButton;

// Add a click event listener to each button
ratingButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Get the value of the clicked button
    
    buttonValue = button.value;
    console.log('Button Value:', buttonValue);

    // Remove the background color from the previously selected button, if any
    if (selectedButton) {
        selectedButton.style.backgroundColor = ''; // Set to default or any desired color
      }
  
      // Set the background color of the clicked button
      button.style.backgroundColor = 'hsl(25, 97%, 53%)'; // Replace 'your-desired-color' with the color you want
      button.style.color = 'hsl(0, 0%, 100%)';
  
      // Update the selected button
      selectedButton = button;
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