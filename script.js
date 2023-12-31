console.log("Welcome to the Lobster Club Improv Comedy Show!");
const btn = document.getElementById("button");
console.log("Button?: ", btn);

btn.addEventListener("click", (event) => {
    getJoke();
});

async function getJoke() {
    console.log("ur mom");
    const options = {
      method: "GET", // specify this is a GET request, not a PUT or POST
      headers: {
        Accept: "application/json", // request the response in JSON format
      },
    };

    try {
      const response = await fetch("https://icanhazdadjoke.com/", options);
      const responseAsJson = await response.json();
      console.log(responseAsJson);
      document.getElementById("joke").innerText = responseAsJson.joke;
    } catch (error) {
      console.log(error);
    }
  
}


