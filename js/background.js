let image = Array.from({length:26}, (v,i)=> `${i+1}.png`)
console.log(image);
const body  = document.body
// const image = [];
// for(let i=1;i<27;i+=1) {
// image.push(`${i}.jpeg`)
// }
const chosenImage = image [Math.floor(Math.random()*image.length)];
const bgImage = document.createElement("img");

// bgImage.src=`img/${chosenImage}`;
// document.body.appendChild (bgImage);
// bgImage.classList.add("backgroundImage");


body.style.backgroundImage = `url(img/${chosenImage})`
console.log(bgImage);