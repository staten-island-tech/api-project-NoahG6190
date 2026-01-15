import "./style.css";

const URL = "https://fortnite-api.com/v2/cosmetics/br";
let cosmeticsData = [];

fetch(URL)
  .then((response) => {
    if (!response.ok) {
      throw new Error("NETWORK RESPONSE ERROR");
    }
    return response.json();
  })
  .then((data) => {
    cosmeticsData = data.data;
    displayFortnite(cosmeticsData);
  })
  .catch((error) => console.error("FETCH ERROR:", error));

const rarityFilter = document.getElementById("rarityFilter");
rarityFilter.addEventListener("change", () => {
  const selectedRarity = rarityFilter.value;
  const filtered =
    selectedRarity === "All"
      ? cosmeticsData
      : cosmeticsData.filter(
          (item) => item.rarity?.displayValue === selectedRarity
        );
  displayFortnite(filtered);
});

function displayFortnite(data) {
  const fortniteDiv = document.getElementById("fortnite");
  let html = "";

  data.forEach((item) => {
    const name = item.name || "Unknown";

    const image =
      item.images?.icon ||
      item.images?.smallIcon ||
      item.images?.featured ||
      null;

    const rarity = item.rarity?.displayValue || "Unknown";
    const type = item.type?.displayValue || "Unknown";
    const description = item.description || "No description available.";

    html += `
      <div class="w-72 bg-indigo-50 rounded-xl shadow-lg p-5 flex flex-col items-center text-center space-y-4">
        <h2 class="text-xl font-bold text-gray-800">${name}</h2>

        <div class="bg-white rounded-lg p-4 w-full flex justify-center">
          ${
            image
              ? `<img src="${image}" alt="${name}" class="w-32 h-32 object-contain" />`
              : `<div class="w-32 h-32 flex items-center justify-center text-gray-400">
                  No Image Available
                </div>`
          }
        </div>

        <div class="w-full bg-indigo-100 rounded-lg p-3 space-y-1">
          <p class="text-sm font-semibold text-indigo-700">
            Rarity: <span class="font-normal text-gray-700">${rarity}</span>
          </p>
          <p class="text-sm font-semibold text-indigo-700">
            Type: <span class="font-normal text-gray-700">${type}</span>
          </p>
        </div>

        <p class="text-sm bg-white p-3 rounded-lg text-gray-700">
          ${description}
        </p>
      </div>
    `;
  });

  fortniteDiv.innerHTML = html;
}
