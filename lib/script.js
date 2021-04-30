console.log(`hi,im attached`);

const catUrl = "https://api.thecatapi.com/v1/images/search";
const url = "https://api.thecatapi.com/v1/images/search?category_ids=";
const wordUrl = fetch(`${catUrl}`, {
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
  fetch(`${url}${search.value}`, {
    headers: {
      "x-api-key": "fa540c07-f78e-4088-8454-8f8a25bf9c80",
    },
  })
    .then((res) => res.json())
    .then((cat) => {
      console.log(cat);
      console.log(`works`);
      let img = cat[0].url;
      document.querySelector(".categoryCatImage").src = img;
    });
});
