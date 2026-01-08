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

  data.data.forEach((fortnite) => {
    fortniteDiv.innerHTML += `
      <div class="w-64 bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center">
        <h2 class="text-lg font-semibold mb-2">${fortnite.name}</h2>

        <img
          src="${fortnite.images.icon}"
          alt="${fortnite.name}"
          class="w-32 h-32 object-contain mb-3"
        />

        <p class="text-sm text-gray-600">
          Rarity: ${fortnite.rarity.displayValue}
        </p>

        <p class="text-sm text-gray-600">
          Type: ${fortnite.type.displayValue}
        </p>

        <p class="text-sm mt-2 p-2 border rounded bg-gray-100 text-gray-700">
          ${fortnite.description || "No description available."}
        </p>
      </div>
    `;
  });
}
