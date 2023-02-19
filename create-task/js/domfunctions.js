import { DOMSelectors } from "./dom";

const URL_brawlers = "https://api.brawlapi.com/v1/brawlers";

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
                    <h4 class="brawler-rarity" id=${brawler.rarity.name}>${brawler.rarity.name}</h4>
                    <h3 class="brawler-description"> ${brawler.description}</h3>
                    <h3 class="brawler-id">Brawler ID: ${brawler.id}</h3>
                    <h6 class="id-info">To learn more about each brawler, use the ID above to search for the brawlers.</h6>
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

function starter() {
  async function getstarterBrawlers(URL_brawlers) {
    try {
      const response = await fetch(URL_brawlers);
      const data = await response.json(); //makes the data into JSON object so we ca use
      function displayStarter() {
        data.list
          .filter((starter) => starter.rarity.name.includes("Common"))
          .forEach((starter) => {
            document.getElementById("api-output").insertAdjacentHTML(
              "afterbegin",
              `<div class="brawler-card" id="${starter.name}">
                    <div class="brawler-imgBox">
                      <img class="brawler-img" src="${starter.imageUrl}" alt="${starter.name}"/>
                    </div>
                    <div class="brawler-descriptions">
                      <h3 class="brawler-name">${starter.name}</h3>
                      <h4 class="brawler-rarity" id=${starter.rarity.name}>${starter.rarity.name}</h4>
                      <h3 class="brawler-description"> ${starter.description}</h3>
                      <h3 class="brawler-id">Brawler ID: ${starter.id}</h3>
                      <h6 class="id-info">To learn more about each brawler, use the ID above to search for the brawlers.</h6>
                    </div>
                  </div>`
            );
          });
      }
      displayStarter();
    } catch (error) {
      console.log(error);
      alert("An error occured.");
    }
  }
  getstarterBrawlers(URL_brawlers);
}

function rare() {
  async function getrareBrawlers(URL_brawlers) {
    try {
      const response = await fetch(URL_brawlers);
      const data = await response.json(); //makes the data into JSON object so we ca use
      function displayRare() {
        data.list
          .filter((rare) => rare.rarity.id === (2))
          .forEach((rare) => {
            document.getElementById("api-output").insertAdjacentHTML(
              "afterbegin",
              `<div class="brawler-card" id="${rare.name}">
                    <div class="brawler-imgBox">
                      <img class="brawler-img" src="${rare.imageUrl}" alt="${rare.name}"/>
                    </div>
                    <div class="brawler-descriptions">
                      <h3 class="brawler-name">${rare.name}</h3>
                      <h4 class="brawler-rarity" id=${rare.rarity.name}>${rare.rarity.name}</h4>
                      <h3 class="brawler-description"> ${rare.description}</h3>
                      <h3 class="brawler-id">Brawler ID: ${rare.id}</h3>
                      <h6 class="id-info">To learn more about each brawler, use the ID above to search for the brawlers.</h6>
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

function superrare() {
  async function getsuperrareBrawlers(URL_brawlers) {
    try {
      const response = await fetch(URL_brawlers);
      const data = await response.json(); //makes the data into JSON object so we ca use
      function displaySuperrare() {
        data.list
          .filter((superrare) => superrare.rarity.name.includes("Super Rare"))
          .forEach((superrare) => {
            document.getElementById("api-output").insertAdjacentHTML(
              "afterbegin",
              `<div class="brawler-card" id="${superrare.name}">
                    <div class="brawler-imgBox">
                      <img class="brawler-img" src="${superrare.imageUrl}" alt="${superrare.name}"/>
                    </div>
                    <div class="brawler-descriptions">
                      <h3 class="brawler-name">${superrare.name}</h3>
                      <h4 class="brawler-rarity" id=${superrare.rarity.name[0]}>${superrare.rarity.name}</h4>
                      <h3 class="brawler-description"> ${superrare.description}</h3>
                      <h3 class="brawler-id">Brawler ID: ${superrare.id}</h3>
                      <h6 class="id-info">To learn more about each brawler, use the ID above to search for the brawlers.</h6>
                    </div>
                  </div>`
            );
          });
      }
      displaySuperrare();
    } catch (error) {
      console.log(error);
      alert("An error occured.");
    }
  }
  getsuperrareBrawlers(URL_brawlers);
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
                        <h4 class="brawler-rarity" id=${epic.rarity.name}>${epic.rarity.name}</h4>
                        <h3 class="brawler-description"> ${epic.description}</h3>
                        <h3 class="brawler-id">Brawler ID: ${epic.id}</h3>
                        <h6 class="id-info">To learn more about each brawler, use the ID above to search for the brawlers.</h6>
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

function legendary() {
  async function getlegendaryBrawlers(URL_brawlers) {
    try {
      const response = await fetch(URL_brawlers);
      const data = await response.json(); //makes the data into JSON object so we ca use
      function displayLegendary() {
        data.list
          .filter((legendary) => legendary.rarity.name.includes("Legendary"))
          .forEach((legendary) => {
            document.getElementById("api-output").insertAdjacentHTML(
              "afterbegin",
              `<div class="brawler-card" id="${legendary.name}">
                        <div class="brawler-imgBox">
                          <img class="brawler-img" src="${legendary.imageUrl}" alt="${legendary.name}"/>
                        </div>
                        <div class="brawler-descriptions">
                          <h3 class="brawler-name">${legendary.name}</h3>
                          <h4 class="brawler-rarity" id=${legendary.rarity.name}>${legendary.rarity.name}</h4>
                          <h3 class="brawler-description"> ${legendary.description}</h3>
                          <h3 class="brawler-id">Brawler ID: ${legendary.id}</h3>
                          <h6 class="id-info">To learn more about each brawler, use the ID above to search for the brawlers.</h6>
                        </div>
                      </div>`
            );
          });
      }
      displayLegendary();
    } catch (error) {
      console.log(error);
      alert("An error occured.");
    }
  }
  getlegendaryBrawlers(URL_brawlers);
}

function mythic() {
  async function getmythicBrawlers(URL_brawlers) {
    try {
      const response = await fetch(URL_brawlers);
      const data = await response.json(); //makes the data into JSON object so we ca use
      function displayMythic() {
        data.list
          .filter((mythic) => mythic.rarity.name.includes("Mythic"))
          .forEach((mythic) => {
            document.getElementById("api-output").insertAdjacentHTML(
              "afterbegin",
              `<div class="brawler-card" id="${mythic.name}">
                        <div class="brawler-imgBox">
                          <img class="brawler-img" src="${mythic.imageUrl}" alt="${mythic.name}"/>
                        </div>
                        <div class="brawler-descriptions">
                          <h3 class="brawler-name">${mythic.name}</h3>
                          <h4 class="brawler-rarity" id=${mythic.rarity.name}>${mythic.rarity.name}</h4>
                          <h3 class="brawler-description"> ${mythic.description}</h3>
                          <h3 class="brawler-id">Brawler ID: ${mythic.id}</h3>
                          <h6 class="id-info">To learn more about each brawler, use the ID above to search for the brawlers.</h6>
                        </div>
                      </div>`
            );
          });
      }
      displayMythic();
    } catch (error) {
      console.log(error);
      alert("An error occured.");
    }
  }
  getmythicBrawlers(URL_brawlers);
}

function chromatic() {
  async function getchromaticBrawlers(URL_brawlers) {
    try {
      const response = await fetch(URL_brawlers);
      const data = await response.json(); //makes the data into JSON object so we ca use
      function displayChromatic() {
        data.list
          .filter((chromatic) => chromatic.rarity.name.includes("Chromatic"))
          .forEach((chromatic) => {
            document.getElementById("api-output").insertAdjacentHTML(
              "afterbegin",
              `<div class="brawler-card" id="${chromatic.name}">
                        <div class="brawler-imgBox">
                          <img class="brawler-img" src="${chromatic.imageUrl}" alt="${chromatic.name}"/>
                        </div>
                        <div class="brawler-descriptions">
                          <h3 class="brawler-name">${chromatic.name}</h3>
                          <h4 class="brawler-rarity" id=${chromatic.rarity.name}>${chromatic.rarity.name}</h4>
                          <h3 class="brawler-description"> ${chromatic.description}</h3>
                          <h3 class="brawler-id">Brawler ID: ${chromatic.id}</h3>
                          <h6 class="id-info">To learn more about each brawler, use the ID above to search for the brawlers.</h6>
                        </div>
                      </div>`
            );
          });
      }
      displayChromatic();
    } catch (error) {
      console.log(error);
      alert("An error occured.");
    }
  }
  getchromaticBrawlers(URL_brawlers);
}

function clear() {
  DOMSelectors.api_output.innerHTML = "";
}

document.getElementById("reset").addEventListener("click", function () {
  clear();
  initial();
});

document.getElementById("starter").addEventListener("click", function () {
  clear();
  starter();
});

document.getElementById("rare").addEventListener("click", function () {
  clear();
  rare();
});

document.getElementById("superrare").addEventListener("click", function () {
  clear();
  superrare();
});

document.getElementById("epic").addEventListener("click", function () {
  clear();
  epic();
});

document.getElementById("legendary").addEventListener("click", function () {
  clear();
  legendary();
});

document.getElementById("mythic").addEventListener("click", function () {
  clear();
  mythic();
});

document.getElementById("chromatic").addEventListener("click", function () {
  clear();
  chromatic();
});