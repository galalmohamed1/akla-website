// let Value;
let btn = document.querySelector(".btn");
let popout = document.querySelector(".light-container");
let img = document.querySelector(".light-container .box");
let select=document.getElementById("s");
let close = document.querySelector(".end-0");
let loading =document.querySelector(".loading");

select.addEventListener("change", function () {
  let text = select.options[select.selectedIndex].text;
  getPizza(text);
});

close.addEventListener("click", function () {
  closedd();
});

function closedd() {
  popout.classList.add("d-none");
}

async function getPizza(value) {
  loading.classList.remove("d-none");
  let response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${value}`);
  if(response.ok){
    let data = await response.json();
    let AllRecipe = data.recipes;
    displayData(AllRecipe);
    loading.classList.add("d-none");
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
                                <button target="_blank" class="btn btn-primary w-100" onclick="showdata(${AllRecipe[i].recipe_id})">text</button>
                            </div>
                        </div>
                    </div>`;
  }
  document.getElementById("rowData").innerHTML = cartona;
}



async function showdata(id){
  popout.classList.remove("d-none");
  loading.classList.remove("d-none");
  let response = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);
  let data = await response.json();
  let alldata = data.recipe;
  let  cartona =`
                      <img class="card-img-top rounded-4 w-100" src="${alldata.image_url}" alt="Title">
                        <div class="card-body">
                            <h4 class="card-title mb-4">${alldata.title}</h4>
                            <a target="_blank" class="btn btn-primary w-100" href="${alldata.source_url}">Details</a>
                        </div>
                    `;
  show.innerHTML=cartona; 
  loading.classList.add("d-none");                 
}