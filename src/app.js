
let champion = {};
let selectedChampion = "Aatrox"
/* fetch(`https://ddragon.leagueoflegends.com/cdn/15.7.1/data/en_US/champion/${selectedChampion}.json`)
    .then(res => res.json()).then(res => {   

        champion = res.data[selectedChampion]
        console.log("Fetched champion: ", champion)
})
 */



const scrollers = document.querySelectorAll(".scroller");

addAnimation();
function addAnimation() {
    scrollers.forEach(scroller => {
        scroller.setAttribute('data-animated', true);

        const scrollerInner = scroller.querySelector(".scroller_inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.map((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("area-hidden", true)
            scrollerInner.appendChild(duplicatedItem);
        })
        console.log(scrollerContent)
    })
}