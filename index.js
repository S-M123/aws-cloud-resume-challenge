const counter = document.querySelector(".counter-number");

// This function updates the counter on my portfiolio
async function updateCounter() {
    let response = await fetch("https://eo6zkbfg3ty6igk4fxe2c5seri0sldln.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML =  `views: ${data}`;
}

updateCounter();