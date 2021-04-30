console.log(`hi,im attached`);

const catUrl = "https://api.thecatapi.com/v1/images/search";

fetch(`${catUrl}`, {
  headers: {
    "x-api-key": "fa540c07-f78e-4088-8454-8f8a25bf9c80",
  },
});
// ----------get random button-------
let rando = document.querySelector(".randomButton");
// console.log(rando);
rando.addEventListener("click", () => {
  // check to see if click worked.
  console.log(`working.`);
  fetch(`${catUrl}`)
    .then((res) => res.json())
    .then((cats) => {
      console.log(cats);
      // had to specify [0] because it is a whole array
      document.querySelector("img").src = cats[0].url;
    });
});

// getting the category id to work
let form = document.querySelector("form");
let button = document.querySelector(".searchButton");
// adding the submit to work
form.addEventListener("submit", function (e) {
  let search = document.querySelector(".input");
  //   let categoryIMG = document.querySelector("img.categoryCatImage").src;
  //   console.log(categoryIMG);
  // logging what i put into the search bar
  console.log(search.value);
  // preventing the search bar from automatically deleting
  e.preventDefault();
  fetch(`${catUrl}?categories${search.value}`)
    .then((res) => res.json())
    .then((cat) => {
      //   console.log(cat);
      if (search.value !== 1 || "Hats") {
        console.log(cat);

        console.log(`works`);

        // document.querySelector("img.categoryCatImage") = cat[0].url;
      }
      //   if (cat[1].id == 1) {
      //     document.querySelector("img.categoryCatImage").src = cat[0].url;
      //   }

      // cats[0].categories[0].name("Hats");
    });
});
