function botao(){
    const image = document.getElementById("main-img")   
 
    image.remove()
    const newImage = document.createElement("img")
    newImage.setAttribute("id", "main-img")
    newImage.setAttribute("src",`https://source.unsplash.com/random/800x600?=${Date.now()}`)
    document.querySelector("#img-container").appendChild(newImage)
}

function menu() {
    var x = document.getElementById("menu-secondary");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }