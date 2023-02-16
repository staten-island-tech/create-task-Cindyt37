import "./domfunctions";

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
