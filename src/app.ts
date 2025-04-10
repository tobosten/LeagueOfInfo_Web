
let champion: Object;
let selectedChampion = "Aatrox"
fetch(`https://ddragon.leagueoflegends.com/cdn/15.7.1/data/en_US/champion/${selectedChampion}.json`)
    .then(res => res.json()).then(res => {   

        champion = res.data[selectedChampion]
        console.log("Fetched champion: ", champion)
})



const Button = document.getElementById("btn1")!;
Button.addEventListener("click", () => {
    console.log("Button")
});



