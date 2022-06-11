const images = [
  "1-2.jpg",
  "1-3.jpg",
  "1-4.jpg",
  "1-5.jpg",
  "1-6.jpg",
  "1-7.jpg",
  "1-8.jpg",
  "1-9.jpg",
];

/*
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
*/

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
