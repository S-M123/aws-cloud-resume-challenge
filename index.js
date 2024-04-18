const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://ezg6ktpmdm3jkcnsbhrl2eggfi0bjafl.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = ' views: ${data}';
}

updateCounter();