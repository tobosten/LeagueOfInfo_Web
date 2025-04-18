
let champs = [];
getData() // Fetches champion id and puts them in 'champs' variable


async function getData() {
    await fetch(`https://ddragon.leagueoflegends.com/cdn/15.7.1/data/en_US/champion.json`)
    .then(res => res.json())
    .then(res => {
        // 170 champs total
        for(i in res.data) {
            champs.push(res.data[i].id)
        }
        console.log(champs)
      
    })
}



const resultsBox = document.querySelector(".searchResults")
const searchBar = document.getElementById("searchBar");

/* 
Only works when klicking Enter
resultsBox.addEventListener("searchBar", e => {
    console.log(e)
})
 */


searchBar.onkeyup = function(){
    console.log(searchBar.value)
}
    
