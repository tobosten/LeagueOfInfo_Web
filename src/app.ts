
let movie: Object;
fetch(`http://www.omdbapi.com/?apikey=543c82f9&t=Bladerunner`).then(res => res.json()).then(res => {   
    movie = res
    console.log("Movie: ", movie)
})

const Button = document.getElementById("btn1")!;
Button.addEventListener("click", () => {
    console.log("Button")
    
})



