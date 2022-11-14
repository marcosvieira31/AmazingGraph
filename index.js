function botao(){
    const image = document.querySelector("img")   
 
    image.remove()
    const newImage = document.createElement("img")
    newImage.src = `https://source.unsplash.com/random/800x600?=${Date.now()}`
    document.querySelector("#container").appendChild(newImage)
    console.log(newImage.src)
}

function menu() {
    var x = document.getElementById("menu-secondary");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }