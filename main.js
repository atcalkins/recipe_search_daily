let wrapper = document.querySelector(".content");

fetch("https://crossorigin.me/http://www.recipepuppy.com/api").then(function(response) {
  if (response.status !== 200) {
    console.log(response.status);
    return;
  }
  response.json().then(function(data) {
    console.log(data.name, response.url);
    displayInfo(data);
  });
});

function displayInfo(data) {
  let template = `

`;
    wrapper.innerHTML = template;

}
