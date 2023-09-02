console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => { 
console.log("The DOM has loaded")
fetch('https://dog.ceo/api/breeds/image/random/4') 
.then(res => res.json())
.then(data => data.message.forEach(addImageElements))
function addImageElements(dogImage) {
const image = document.createElement("img")
image.src=dogImage
document.getElementById("dog-image-container").append(image)
}

let breeds = []
fetch("https://dog.ceo/api/breeds/list/all")
.then(res => res.json())
.then(data => {
   breeds = Object.keys(data.message)
   Object.keys(data.message).forEach(addBreedName)})
function addBreedName(breedName) {
const li = document.createElement('li')
li.innerText = breedName
document.getElementById("dog-breeds").append(li)
li.addEventListener('click', changeFontColor)
}

function changeFontColor(e) {
    e.target.style.color = "red"    
} 

document.querySelector("#breed-dropdown").addEventListener('change', selectLetterBox)
function selectLetterBox(e) {
 const filterBreeds = breeds.filter((breed) => breed.startsWith(e.target.value))
 document.getElementById("dog-breeds").innerHTML = ""
 filterBreeds.forEach(addBreedName) 
}

})









