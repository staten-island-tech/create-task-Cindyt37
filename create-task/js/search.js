import "../styles/search.css";

const URL_brawlers ="https://api.brawlapi.com/v1/brawlers";

DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    getData(DOMSelectors.input.value);
  });
  
const searchInput = document.getElementById("searchInput");
