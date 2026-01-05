import "./style.css";
const URL = "https://fortnite-api.com/v2/cosmetics/br";

fetch(URL)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then((data) => {
    console.log(data);
    displayfortnite(data);
  })
  .catch((error) => console.error("FETCH ERROR:", error));

function displayfortnite(data) {
  const fortnite = data.data[0];

  const fortniteDiv = document.getElementById("fortnite");
  const fortniteName = document.getElementById("name");

  const heading = document.createElement("h2");
  heading.textContent = fortnite.name;
  fortniteName.appendChild(heading);

  const fortniteImage = document.createElement("img");
  fortniteImage.src = fortnite.images.icon;
  fortniteDiv.appendChild(fortniteImage);
}
/* async function getData() {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    document.getElementById("api-response").textContent = JSON.stringify(
      data.data,
      null,
      2
    );
  } catch (error) {
    console.log(error);
  }
}

getData();

async function getImage() {
  const response = await fetch(URL);
  const data = await response.json();
  const imageUrl = data.data[0].images.icon;
  document.getElementById("api-image").src = imageUrl;
}
getImage(); */
