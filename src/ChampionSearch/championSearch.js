

let champs;

fetch(`https://ddragon.leagueoflegends.com/cdn/15.7.1/data/en_US/champion.json`)
    .then(res => res.json()).then(res => {

        console.log(res.data)
        champs = res.data
       
    })

    
