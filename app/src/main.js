import "./style.css";
const URL = "https://fortnite-api.com/v2/cosmetics/br/name/"E";
async function getData() {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    document.getElementById("api-response").textContent = data.br;
  } catch (error) {
    console.log(error);
  }
}

getData();
