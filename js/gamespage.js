const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
let dataList = [];

if(id === null) {
   location.href = "/";
}

const url = "https://api.noroff.dev/api/v1/gamehub/" + id;

const container = document.querySelector(".grid-container");
const loadingContainer = document.querySelector(".loading");
const errorContainer = document.querySelector(".error");

async function fetchGameProduct() {
   try {
      const response = await fetch(url);
      const game = await response.json();
      createHtml(game);
   } catch(error) {
      errorContainer.style.display = "block";
      errorContainer.innerHTML = "An error has occurred, please reload the page";
   } finally {
      loadingContainer.style.display = "none";
   }
}

function createHtml(game) {
   document.title = `GameHub - ${game.title}`
   container.innerHTML = `
      <div class="image-item">
         <img src="${game.image}" alt="${game.description}">
      </div>
      <div class="vertical-line"></div>
      <section class="product-item">
         <a href="games-page.html" aria-label="close link" class="close-button"><i class="fa-solid fa-xmark"></i></a>
         <h1>${game.title}</h1>
         <p>${game.description}</p>
         <h2>${game.price}€</h2>
         <button class="cta cta-black" onclick="addGameToCart()">Add to cart</button>
      </section>`;
}

fetchGameProduct();

function loadLocalStorage() {
   let data = localStorage.getItem("data");

   if(data) {
      dataList.push(data);
   }
}

loadLocalStorage();

function addGameToCart() {
   dataList.push(id);
   localStorage.setItem("data", dataList);
}