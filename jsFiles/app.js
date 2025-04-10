"use strict";
let champion;
let selectedChampion = "Aatrox";
fetch(`https://ddragon.leagueoflegends.com/cdn/15.7.1/data/en_US/champion/${selectedChampion}.json`)
    .then(res => res.json()).then(res => {
    champion = res.data[selectedChampion];
    console.log("Fetched champion: ", champion);
});
const Button = document.getElementById("btn1");
Button.addEventListener("click", () => {
    console.log("Button");
});
var image = document.createElement("img");
var imageParent = document.getElementById("champImage");
image.id = "champImage";
image.className = "class";
image.src = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${selectedChampion}_0.jpg`;
imageParent === null || imageParent === void 0 ? void 0 : imageParent.appendChild(image);
