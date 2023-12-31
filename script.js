const count = 400;
const data = fetch(`https:/dog.ceo/api/breeds/image/random/${count}`);
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

