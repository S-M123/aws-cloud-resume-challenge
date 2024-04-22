const counter = document.querySelector(".counter-number");

// This function updates the counter on my portfolio
async function updateCounter() {
    let response = await fetch("https://ezg6ktpmdm3jkcnsbhrl2eggfi0bjafl.lambda-url.us-east-1.amazonaws.com/");
    let data = await response.json();
    counter.innerHTML = `views: ${data.message}`;
}

updateCounter();