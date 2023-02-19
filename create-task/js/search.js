import "../styles/search.css";
import { DOMSelectors } from "./dom";

async function getData(brawlerID) {
    try {
        const response = await fetch(`https://api.brawlapi.com/v1/brawlers/${brawlerID}`);
        if (response.status < 200 || response.status > 299) {
            throw error(response);
        } else {
            const data = await response.json();
            console.log(data);
            function displaySearch() {
                DOMSelectors.search_output.insertAdjacentHTML("beforeend",
                `<div class="brawler-card" id="${data.name}">         
                    <div class="brawler-imgBox">           
                        <img class="brawler-img" src="${data.imageUrl}" alt="${data.name}"/>
                    </div>         
                    <div class="brawler-descriptions">           
                        <h3 class="brawler-name">${data.name}</h3>           
                        <h4 class="brawler-rarity" id=${data.rarity.name}>${data.rarity.name}</h4>           
                        <h3 class="brawler-description"> ${data.description}</h3>
                        <h3 class="brawler-id"> ${data.id}</h3>
                        <a class="info-link" href="${data.link}"> ${data.link}</a>
                    </div>       
                </div>`);
            }
            displaySearch();
        }
    } catch (error) {
        console.log(error);
        DOMSelectors.search_output.insertAdjacentHTML("beforeend",
        `<div class="error-msg">Sorry, the brawler ID you inputed cannot be found. Please check and try again later.</div>`)
    }
}

DOMSelectors.form.addEventListener("submit", function (event) {
    DOMSelectors.search_output.innerHTML = "";
    event.preventDefault();
    getData(DOMSelectors.input.value);
  });