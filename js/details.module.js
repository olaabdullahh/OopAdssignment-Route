import { DisplayData } from "./displayData.module.js";

export class Details {
   constructor(id) {
      this.detailsId = new DisplayData();

      document.getElementById("btnClose").addEventListener("click", () => {
         document.querySelector(".games").classList.remove("d-none");
         document.querySelector(".details").classList.add("d-none");
      });

      this.getDetails(id);
   }

  async getDetails(idGames) {
    let loading = document.querySelector(".loading")
   loading.classList.remove('d-none')
   
    
      const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idGames}`;
      const options = {
          method: 'GET',
          headers: {
            'x-rapidapi-key': '4917ecb740msh865e7afe4b659a9p1bab67jsnd1b5d4415ad4',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
      };
      
      try {
          const response = await fetch(url, options);
          const result = await response.json();
          this.detailsId.displayDetalies(result)
      } catch (error) {
          console.error(error);
      }finally{
        loading.classList.add("d-none");
      }
}
}
