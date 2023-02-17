import { DOMSelectors } from "./dom";

const URL_brawlers = "https://api.brawlapi.com/v1/brawlers";
const URL_events = "https://api.brawlapi.com/v1/events";

function initial() {
  async function getallBrawlers(URL_brawlers) {
    try {
      const response = await fetch(URL_brawlers);
      const data = await response.json(); //makes the data into JSON object so we ca use
      function displayBrawlers() {
        data.list.forEach((brawler) => {
          document.getElementById("api-output").insertAdjacentHTML(
            "afterbegin",
            `<div class="brawler-card" id="${brawler.name}">
                  <div class="brawler-imgBox">
                    <img class="brawler-img" src="${brawler.imageUrl}" alt="${brawler.name}"/>
                  </div>
                  <div class="brawler-descriptions">
                    <h3 class="brawler-name">${brawler.name}</h3>
                    <h4 class="brawler-rarity">${brawler.rarity.name}</h4>
                    <h3 class="brawler-description"> ${brawler.description}</h3>
                  </div>
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
  getallBrawlers(URL_brawlers);
}

function rare() {
  async function getrareBrawlers(URL_brawlers) {
    try {
      const response = await fetch(URL_brawlers);
      const data = await response.json(); //makes the data into JSON object so we ca use
      function displayRare() {
        data.list
          .filter((rare) => rare.rarity.name.includes("Rare"))
          .forEach((rare) => {
            document.getElementById("api-output").insertAdjacentHTML(
              "afterbegin",
              `<div class="brawler-card" id="${rare.name}">
                    <div class="brawler-imgBox">
                      <img class="brawler-img" src="${rare.imageUrl}" alt="${rare.name}"/>
                    </div>
                    <div class="brawler-descriptions">
                      <h3 class="brawler-name">${rare.name}</h3>
                      <h4 class="brawler-rarity">${rare.rarity.name}</h4>
                      <h3 class="brawler-description"> ${rare.description}</h3>
                    </div>
                  </div>`
            );
          });
      }
      displayRare();
    } catch (error) {
      console.log(error);
      alert("An error occured.");
    }
  }
  getrareBrawlers(URL_brawlers);
}

function epic() {
  async function getepicBrawlers(URL_brawlers) {
    try {
      const response = await fetch(URL_brawlers);
      const data = await response.json(); //makes the data into JSON object so we ca use
      function displayEpic() {
        data.list
          .filter((epic) => epic.rarity.name.includes("Epic"))
          .forEach((epic) => {
            document.getElementById("api-output").insertAdjacentHTML(
              "afterbegin",
              `<div class="brawler-card" id="${epic.name}">
                      <div class="brawler-imgBox">
                        <img class="brawler-img" src="${epic.imageUrl}" alt="${epic.name}"/>
                      </div>
                      <div class="brawler-descriptions">
                        <h3 class="brawler-name">${epic.name}</h3>
                        <h4 class="brawler-rarity">${epic.rarity.name}</h4>
                        <h3 class="brawler-description"> ${epic.description}</h3>
                      </div>
                    </div>`
            );
          });
      }
      displayEpic();
    } catch (error) {
      console.log(error);
      alert("An error occured.");
    }
  }
  getepicBrawlers(URL_brawlers);
}

function clear() {
  DOMSelectors.api_output.innerHTML = "";
}

document.getElementById("reset").addEventListener("click", function () {
  clear();
  initial();
});

document.getElementById("rare").addEventListener("click", function () {
  clear();
  rare();
});

document.getElementById("epic").addEventListener("click", function () {
  clear();
  epic();
});
