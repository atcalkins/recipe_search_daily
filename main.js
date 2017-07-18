let container = document.querySelector(".wrapper");
let list = "";
let mainSite = "https://crossorigin.me/http://www.recipepuppy.com/api/?q=search-term";


let searchInput = document.querySelector("search");

document.querySelector("button").addEventListener("click", function() {
  console.log(searchInput.value);

fetch(mainSite)
.then(function(response) {
  if (response.status !== 200) {
    console.log(response.status);
  }
  response.json().then(function(recipeData) {
    let results = recipeData.results;
    results.forEach(function(recipe) {
      list += `<img src=${recipe.thumbnail}>
          <a href=${recipe.href}><h4>${recipe.title}</h4></a>`;

      container.innerHTML = list;
    });
  });
});
