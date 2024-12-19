import { DisplayData } from "./displayData.module.js";
import { Details } from "./details.module.js";
class Games{

    constructor(){
        this.getGames("mmorpg");
        document.querySelectorAll(".menu li a").forEach((link) => {
            link.addEventListener("click", (e) => {
              document.querySelector(".menu .active").classList.remove("active");
              e.target.classList.add("active");
              this.getGames(e.target.innerHTML);
            });
          });
          this.dispayGames = new DisplayData();

    }

async getGames(category){

    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '4917ecb740msh865e7afe4b659a9p1bab67jsnd1b5d4415ad4',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    
    try {
        document.querySelector(".loading").classList.remove("d-none");

        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        this.dispayGames.dispayGames(result);
        document.querySelector(".loading").classList.add("d-none");
        this.startEvent();
        
    } catch (error) {
        console.error(error);
    }
  }
  startEvent() {
    document.querySelectorAll(".card").forEach((item) => {
       item.addEventListener("click", () => {
          const id = item.getAttribute('id');
          
          this.showDetails(id);          
       });
    });
 }
 showDetails(idGame) {
    let details = new Details(idGame);
    document.querySelector(".games").classList.add("d-none");
    document.querySelector(".details").classList.remove("d-none");
 }



}
new Games()
