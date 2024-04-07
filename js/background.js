const images = ["0.jpeg","1.jpeg","2.jpeg"];


const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style = `background-image:url("img/${chosenImage}")`;

document.body.classList.add("bodyque");