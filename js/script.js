let Value;
let btn = document.querySelector(".btton");


btn.addEventListener("click", function () {
  Value = document.querySelector(".form-control").value;
  getPizza(Value);
});

async function getPizza(value) {
  let response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${value}`);
  if(response.ok){
    let data = await response.json();
    let AllRecipe = data.recipes;
    displayData(AllRecipe);
  }
}
function displayData(AllRecipe) {
  let cartona = "";
  for (let i = 0; i < AllRecipe.length; i++) {
    cartona += `<div class="col-md-3">
                        <div class="card">
                            <img class="card-img-top" src="${
                              AllRecipe[i].image_url
                            }" alt="Title">
                            <div class="card-body">
                                <h4 class="card-title">${AllRecipe[i].title
                                  .split(" ", 2)
                                  .join(" ")}</h4>
                                <a target="_blank" class="btn btn-primary w-100" href="${
                                  AllRecipe[i].source_url
                                }">text</a>
                            </div>
                        </div>
                    </div>`;
  }
  document.getElementById("rowData").innerHTML = cartona;
}
