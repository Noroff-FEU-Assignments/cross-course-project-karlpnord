import { removeGameButton } from "../cart.js";
import { localStorageArray } from "../cart.js";
import { fetchGameProduct } from "../cart.js";

document.addEventListener("click", function(e) {
   const target = e.target.closest(".remove-game");
   localStorage.removeItem("data");

   if(target){
      const targetId = target.dataset.gameid;
      
      const index = localStorageArray.indexOf(targetId);
      
      localStorageArray.splice(index, 1);
      
      localStorage.setItem("data", localStorageArray.toString());

      fetchGameProduct();
   }
});