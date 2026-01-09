import "./style.css";

const URL = "https://fortnite-api.com/v2/cosmetics/br";

fetch(URL)
  .then((response) => {
    if (!response.ok) {
      throw new Error("NETWORK RESPONSE ERROR");
    }
    return response.json();
  })
  .then((data) => {
    displayFortnite(data);
  })
  .catch((error) => console.error("FETCH ERROR:", error));

function displayFortnite(data) {
  const fortniteDiv = document.getElementById("fortnite");
  let html = "";

  data.data.forEach((item) => {
    const name = item.name || "Unknown";
    const image = item.images?.icon;
    const rarity = item.rarity?.displayValue || "Unknown";
    const type = item.type?.displayValue || "Unknown";
    const description = item.description || "No description available.";

    html += `
      <div class="w-64 bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center space-y-3">
        <h2 class="text-lg font-semibold">${name}</h2>

        ${
          image
            ? `
              <!-- FIXED IMAGE CONTAINER -->
              <div class="w-32 h-32 flex items-center justify-center bg-gray-100 rounded">
                <img
                  src="${image}"
                  alt="${name}"
                  class="max-w-full max-h-full object-contain"
                />
              </div>
            `
            : `
              <div class="w-32 h-32 flex items-center justify-center bg-gray-100 text-gray-400 rounded">
                No Image
              </div>
            `
        }

        <p class="text-sm text-gray-600">Rarity: ${rarity}</p>
        <p class="text-sm text-gray-600">Type: ${type}</p>

        <p class="text-sm p-2 border rounded bg-gray-100 text-gray-700">
          ${description}
        </p>
      </div>
    `;
  });

  fortniteDiv.innerHTML = html;
}
