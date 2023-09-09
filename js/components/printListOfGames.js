import { gamesContainer } from "../games.js";

export function printListOfGames(gamesToRender) {
   gamesContainer.innerHTML = "";

   gamesToRender.forEach(function(game) {
      gamesContainer.innerHTML += `<div class="games-item">
                                       <img src="${game.image}" alt="${game.description}" class="gameimage">
                                       <div class="vertical-line"></div>
                                       <section class="gameinfo">
                                          <h2>${game.title}</h2>
                                          <h3>${game.genre}</h3>
                                          <h4>${game.price}€</h4>
                                          <a href="gameproduct.html?id=${game.id}" class="cta cta-black">View</a>
                                       </section>
                                    </div>`;
   });
}