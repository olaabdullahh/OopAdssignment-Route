export class DisplayData {
  dispayGames(games) {
    let allGames = "";
    for (let i = 0; i < games.length; i++) {
      allGames += `<div class="col">
              <div
                class="card h-100 bg-transparent" id="${games[i].id}"
                role="button"
              >
                <div class="card-body">
                  <figure class="position-relative">
                    <img
                      class="card-img-top object-fit-cover h-100"
                      src="${games[i].thumbnail}" alt="${games[i].title}"
                    />
                  </figure>
  
                  <figcaption>
                    <div class="hstack justify-content-between">
                      <h3 class="h6 small">${games[i].title}</h3>
                      <span class="badge text-bg-primary p-2">Free</span>
                    </div>
  
                    <p class="card-text small text-center opacity-50">
                      ${games[i].short_description}
                    </p>
                  </figcaption>
                </div>
  
                <footer class="card-footer small hstack justify-content-between">
                  <span class="badge badge-color">${games[i].genre}</span>
                  <span class="badge badge-color">${games[i].platform}</span>
                </footer>
              </div>
            </div>`;
    }
    document.getElementById("gameData").innerHTML = allGames;
  }
  displayDetalies(games) {
    const detalies = `<div class="col-md-4">
<figure>
   <img src="${games.thumbnail}" class="w-100" alt="details image" />
</figure>
</div>
<div class="col-md-8">

<div>
   <h1>Title:${games.title}</h1>
   <nav aria-label="breadcrumb">
     
         <p >Category: <span class="breadcrumb-item bg-info rounded px-1 text-black" text-capitalize aria-current="page">${games.genre}</span></p>
          <p >Category: <span class="breadcrumb-item bg-info rounded px-1 text-black" aria-current="page">${games.platform}</span></p>
           <p >Category: <span class="breadcrumb-item bg-info rounded px-1 text-black" aria-current="page">${games.status}</span></p>
      
   </nav>
   <p class="small">${games.description}</p>
<button class="btn btn-outline-warning text-white">Show Game</button>
   
 </div> </div>`;
document.getElementById("detailsData").innerHTML = detalies;
  }
}
