export let removeGameButton;

let test = localStorage.getItem("data");

export const localStorageArray = test.split(",");

const url = "https://api.noroff.dev/api/v1/gamehub/";

const productContainer = document.querySelector(".products");
const totalPrice = document.querySelector(".total-price");
const loadingContainer = document.querySelector(".loading");
const errorContainer = document.querySelector(".error");


let price = 0;

export async function fetchGameProduct() {
   try {
      const response = await fetch(url);
      const game = await response.json();
      displayCartGames(game);
   } catch(error) {
      productContainer.style.display = "none";
      errorContainer.style.display = "block";
      errorContainer.innerHTML = "Cant show games, please reload the page!";
   } finally {
      loadingContainer.style.display = "none";
   }
}

function displayCartGames(game) {
   productContainer.innerHTML = "";
   price = 0;
   if(price === 0)  {
      totalPrice.innerHTML = "No games added!";
   }
   // Loop for 1st array
   for(let i = 0; i < game.length; i++) {
      
      // Loop for 2nd array
      for(let j = 0; j < localStorageArray.length; j++) {
         
         if(game[i].id === localStorageArray[j]) {
            price = price + game[i].price;
            totalPrice.innerHTML = "Total: " + price + "€";

            const gameProduct = document.createElement("div");
            const gameImage = document.createElement("img");
            const gameProductDetail = document.createElement("div");
            const gameProductTitle = document.createElement("h2");
            const gameProductPrice = document.createElement("h3");
            removeGameButton = document.createElement("button");

            productContainer.appendChild(gameProduct);
            gameProduct.appendChild(gameImage);
            gameProduct.appendChild(gameProductDetail);
            gameProductDetail.appendChild(gameProductTitle);
            gameProductDetail.appendChild(gameProductPrice);
            gameProduct.appendChild(removeGameButton);

            gameProduct.classList.add("product-item");
            removeGameButton.classList.add("remove-game");

            removeGameButton.setAttribute("data-gameid", game[i].id);

            gameImage.src = game[i].image;
            gameProductTitle.textContent = game[i].title;
            gameProductPrice.textContent = game[i].price + "€";
            removeGameButton.innerHTML = `<i class="fa-solid fa-xmark"></i>`;

            
         }
      }
   }
}

fetchGameProduct();