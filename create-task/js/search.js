import "../styles/search.css";
import { DOMSelectors } from "./dom";

async function getData(brawlerID) {
  try {
    const response = await fetch(
      `https://api.brawlapi.com/v1/brawlers/${brawlerID}`
    );

    if (brawlerID === "16000068") {
        DOMSelectors.search_output.insertAdjacentHTML(
          "beforeend",
          `<div class="error-msg">This is the ID for the next released brawler by Supercell. Please check again when the brawler is released.</div>`
        );
      } else {
      const data = await response.json();
      console.log(data);
      function displaySearch() {
        DOMSelectors.search_output.insertAdjacentHTML(
          "beforeend",
          `<div class="brawler-card" id="${data.name}">
          <div class="simple-facts">
            <div class="brawler-imgBox">
              <img class="brawler-img" src="${data.imageUrl}" alt="${data.name}" />
            </div>
            <div class="brawler-descriptions">
              <h3 class="brawler-name">${data.name}</h3>
              <h4 class="brawler-rarity" id=${data.rarity.name}>${data.rarity.name}</h4>
              <h3 class="brawler-description"> ${data.description}</h3>
              <h3 class="brawler-id"> ${data.id}</h3>
              <a class="info-link" href="${data.link}"> ${data.link}</a>
            </div>
          </div>
          <div class="complex-facts">
            <div class="star-powers">
              <h2 class="mainTitle star">Star Powers</h2>
              <h3 class="complex_title">${data.starPowers[0].name}</h3>
              <h4 class="complex_words">${data.starPowers[0].description}</h3>
              <h3 class="complex_title">${data.starPowers[1].name}</h3>
              <h4 class="complex_words">${data.starPowers[1].description}</h3>
            </div>
            <div class="gadgets">
            <h2 class="mainTitle gadget">Gadgets</h2>
              <h3 class="complex_title">${data.gadgets[0].name}</h3>
              <h4 class="complex_words">${data.gadgets[0].description}</h3>
              <h3 class="complex_title">${data.gadgets[1].name}</h3>
              <h4 class="complex_words">${data.gadgets[1].description}</h3>
            </div>
          </div>
        </div>`
        );
      }
      displaySearch();
      }
  } catch (error) {
    console.log(error);
    DOMSelectors.search_output.insertAdjacentHTML(
      "beforeend",
      `<div class="error-msg">Sorry, the brawler ID you inputted cannot be found. Please check and try again later.</div>`
    );
  }};

DOMSelectors.form.addEventListener("submit", function (event) {
  DOMSelectors.search_output.innerHTML = "";
  DOMSelectors.api_output.innerHTML = "";
  event.preventDefault();
  getData(DOMSelectors.input.value);
  DOMSelectors.input.value = "";
});
