import { printListOfGames } from "./printListOfGames.js";

export function searchGame(games) {
   const search = document.querySelector("#search");
   search.onkeyup = function() {
      event.preventDefault();
      const searchValue = event.target.value.trim().toLowerCase();

      const filterGames = games.filter(function(game) {
         if(game.title.toLowerCase().includes(searchValue)) {
            return true;
         }
      });
      printListOfGames(filterGames);
   }
}