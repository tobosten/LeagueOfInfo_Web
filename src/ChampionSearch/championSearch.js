
let champs = [];
getData() // Fetches champion id and puts them in 'champs' variable
const searchResults = document.querySelector(".searchResults");
const searchBar = document.getElementById("searchBar");
const searchItem = document.querySelector(".searchCard");


async function getData() {
    await fetch(`https://ddragon.leagueoflegends.com/cdn/15.7.1/data/en_US/champion.json`)
    .then(res => res.json())
    .then(res => {
        // 170 champs total
        for(i in res.data) {
            champs.push(res.data[i].id.toLowerCase())
        }
        console.log(champs)

    })
}


/* 
Only works when klicking Enter
resultsBox.addEventListener("searchBar", e => {
    console.log(e)
})
 */

searchBar.onkeyup = function(){
    let result = [];
    let input = searchBar.value;
    if(input.length) {
        result = champs.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result)
    }
    display(result)
    if(!result.length) {
        searchResults.innerHTML = "";
    }
}
    
function display(result) {
    const content = result.map((list) => {
        return "<li class='searchCard' onClick='selectInput(this)'>"+ 
        list.charAt(0).toUpperCase() + list.slice(1) + "</li>";
    })

    searchResults.innerHTML = "<ul>" + content.join("") + "</ul>"
}

function selectInput(list) {
    searchBar.value = list.innerHTML;
    searchResults.innerHTML = "";
    console.log(searchResults)
}


