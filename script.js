// document.addEventListener("DOMContentLoaded", function () {
//   // Fetch 10 random dog images
//   const fetchDogImages = (count) => {
//     const apiUrl = `https://dog.ceo/api/breeds/image/random/${count}`;
//     return fetch(apiUrl)
//       .then(response => response.json())
//       .then(data => data.message);
//   };

//   // Create a promise for each image
//   const createImagePromises = (count) => {
//     const promises = [];
//     for (let i = 0; i < count; i++) {
//       promises.push(fetchDogImages(1));
//     }
//     return promises;
//   };

//   // Render images when all promises are resolved
//   const renderImages = (images) => {
//     const container = document.getElementById("dogCardContainer");
//     images.forEach(image => {
//       const card = document.createElement("div");
//       card.classList.add("col-lg-4","col-sm-12","col-md-12", "mb-3","card");

//       const img = document.createElement("img");
//       img.src = image;
//       img.classList.add("img-fluid", "card-img");
      
//       card.appendChild(img);
//       container.appendChild(card);
//     });
//   };

//   // Fetch and render 10 dog images
//   Promise.all(createImagePromises(10))
//     .then(renderImages)
//     .catch(error => console.error("Error fetching dog images:", error));
// });



// const count = 100;
function image(){
const data = fetch('https:/dog.ceo/api/breeds/image/random/100');
data
  .then((response) => response.json())
  .then((dogImage) => {
    for (let i = 0; i < dogImage.message.length; i++) {
      document.getElementById("cards").innerHTML += `
        <img class="col-lg-4 col-sm-12 col-md-6 card card-img" src="${dogImage.message[i]}" alt="dog-image">`;
    }
  })

  .catch(() => {
    console.log("error");
  });

}
image();