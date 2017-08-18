const recipeFound = document.querySelector("div");
const searchButton = document.querySelector("button");
const searchBar = document.querySelector("input");

searchButton.addEventListener("click", function(e){
  let mainSite = "http://CORS-Anywhere.HerokuApp.com/http://www.recipepuppy.com/api/";
  e.preventDefault();
  console.log(searchBar.value);
  mainSite = `${mainSite}/?q=${searchBar.value}`;
  fetch(mainSite)
  .then(function(response) {
    if(response.status !== 200) {
      return;
    }
    response.json().then(function(data) {
      console.log(data.results);
      let recipeContainer = "";
      data.results.forEach(function(items){
            let template = `
            <section class="top">
            <span><a href="${items.href}">See Full Recipe</a></span>
            <img src="${items.thumbnail}" alt="">
            <h4>${items.title}</h1>
            <b>Ingredients:</b>
            <p>${items.ingredients}</p>
            </section>
            `;
            recipeContainer += template;

        });
          recipeFound.innerHTML = recipeContainer
          searchBar.value="";
      });
    });
  });
