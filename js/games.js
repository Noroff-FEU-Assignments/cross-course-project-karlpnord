import { printListOfGames } from "./components/printListOfGames.js";
import { searchGame } from "./components/searchGame.js";

const loadingAnimation = document.querySelector(".loading");
const errorContainer = document.querySelector(".error");
const search = document.querySelector("#search");
const mainContainer = document.querySelector("main");
export const gamesContainer = document.createElement("div");
mainContainer.appendChild(gamesContainer);
gamesContainer.classList.add("games");

const url = "https://api.noroff.dev/api/v1/gamehub";

async function apiCall() {
   try {
      const response = await fetch(url);
      const games = await response.json();
      errorContainer.style.display = "none";
      printListOfGames(games);
      searchGame(games);
      
   } catch(error) {
      errorContainer.style.display = "block";
      errorContainer.innerHTML = "An error has occurred, please reload the page";
   } finally {
      loadingAnimation.style.display = "none";
   }
   
}

apiCall();