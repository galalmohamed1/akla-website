let Value;
let recipe = [];
let btn = document.querySelector(".btton");
btn.addEventListener("click",function(){
  Value = document.querySelector(".form-control").value;
  getRecipe(Value);
})
function getRecipe(Value) {
  let p = new XMLHttpRequest();
  p.open("GET", `https://forkify-api.herokuapp.com/api/search?q=${Value}`);
  p.send();

  p.responseType = "json";

  p.addEventListener("readystatechange", function () {
    if (p.readyState === 4) {
      recipe = p.response.recipes;
      for (let i = 0; i < recipe.length; i++) {
        displayData();
      }
    }
  });
}

function displayData() {
  
  let cartona = "";
  for (let i = 0; i < recipe.length; i++) {
    let titel = recipe[i].title;
    cartona += `<div class="col-md-3">
                        <div class="card">
                            <img class="card-img-top" src="${
                              recipe[i].image_url
                            }" alt="Title">
                            <div class="card-body">
                                <h4 class="card-title">${recipe[i].title
                                  .split(" ", 2)
                                  .join(" ")}</h4>
                                <a target="_blank" class="btn btn-primary" href="${
                                  recipe[i].source_url
                                }">text</a>
                            </div>
                        </div>
                    </div>`;
  }
  document.getElementById("rowData").innerHTML = cartona;
}
