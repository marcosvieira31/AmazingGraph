function botao(){
    const image = document.querySelector("img")   
 
    image.remove()
    const newImage = document.createElement("img")
    newImage.src = `https://source.unsplash.com/random/800x600?=${Date.now()}`
    document.querySelector("#container").appendChild(newImage)
    console.log(newImage.src)    

    console.log(typeof(image))
}