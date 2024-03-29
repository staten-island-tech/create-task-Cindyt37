//main.js

import "../styles/main.css";
import "./domfunctions";
import "./search";

const URL_brawlers = "https://api.brawlapi.com/v1/brawlers";
//Source of data: https://brawlify.com/

async function getBrawlers(URL_brawlers) {
  try {
    const response = await fetch(URL_brawlers);
    const data = await response.json(); //makes the data into JSON object so we can use
    function displayBrawlers() {
      data.list.forEach((brawler) => {
        document.getElementById("api-output").insertAdjacentHTML(
          "afterbegin",
          `<div class="brawler-card main" id="${brawler.name}">         
            <div class="brawler-imgBox">           
              <img class="brawler-img" src="${brawler.imageUrl}" alt="${brawler.name}"/>
            </div>         
            <div class="brawler-descriptions">           
              <h1 class="brawler-name">${brawler.name}</h1>           
              <h2 class="brawler-rarity" id=${brawler.rarity.name}>${brawler.rarity.name}</h2>           
              <h3 class="brawler-description"> ${brawler.description}</h3>
              <h3 class="brawler-id">Brawler ID: ${brawler.id}</h3>
              <h4 class="id-info">To learn more about each brawler, use the ID above to search for the brawlers.</h4>
            </div>`
        );
      });
    }
    displayBrawlers();
  } catch (error) {
    console.log(error);
    alert("An error occured.");
  }
}
getBrawlers(URL_brawlers);
