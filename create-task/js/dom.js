const DOMSelectors = {
  api_output: document.getElementById("api-output"),
  active: document.getElementById("active"),
  upcoming: document.getElementById("upcoming"),
  reset: document.getElementById("reset"),
  starter: document.getElementById("starter"),
  rare: document.getElementById("rare"),
  superrare: document.getElementById("superrare"),
  epic: document.getElementById("epic"),
  legendary: document.getElementById("legendary"),
  mythic: document.getElementById("mythic"),
  chromatic: document.getElementById("chromatic"),
};

export { DOMSelectors };

function initial() {
  list.forEach((brawler) => {
    DOMSelectors.api_output.insertAdjacentHTML(
      "beforeend",
      `<div class="brawler-card" id="${brawler.name}">         
        <div class="brawler-imgBox">           
          <img class="brawler-img" src="${brawler.imageUrl}" alt="${brawler.name}"/>
        </div>         
        <div class="brawler-descriptions">           
          <h3 class="brawler-name">${brawler.name}</h3>           
          <h4 class="brawler-rarity">${brawler.rarity.name}</h4>           
          <h3 class="brawler-description">${brawler.description}</  h3>         
        </div>       
      </div>`
    );
  });
}
