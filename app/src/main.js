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
  const fortniteDiv = document.getElementById("fortnite");
  const fortniteName = document.getElementById("name");

  data.data.forEach((fortnite) => {
    const heading = document.createElement("h2");
    heading.textContent = fortnite.name;
    fortniteName.appendChild(heading);

    const fortniteImage = document.createElement("img");
    fortniteImage.src = fortnite.images.icon;
    fortniteImage.alt = fortnite.name;
    fortniteDiv.appendChild(fortniteImage);

    const fortniteStats = document.createElement("p");
    fortniteStats.textContent = `Rarity: ${fortnite.rarity.displayValue}`;
    fortniteDiv.appendChild(fortniteStats);
  });
}
