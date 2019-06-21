let page_body = document.querySelector('#game-list');
let games = [];

window.onload = function () {
    loadGames();
}

async function loadGames()
{
    await fetch('http://games-api.ao-alfacollege.nl/api/games')
        .then((response) => response.json())
        .then((data) => {
            games = data;
            showGames();
        })
        .catch((error) => console.log(error));
}

function showGames()
{
    for (let i = 0; i < games.length; i++)
    {
        const game = games[i];
        let template = `
            <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                    <img class="bd-placeholder-img card-img-top" width="100%" height="225"
                        src="${game.image}" />
                    <div class="card-body">
                        <p class="card-text">
                            ${game.description}
                        </p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-primary"><i
                                        class="fa fa-info"></i>&nbsp;Info</button>
                                <button type="button" class="btn btn-sm btn-success"><i
                                        class="fas fa-shopping-cart"></i>&nbsp;Kopen</button>
                            </div>
                            <small class="text-muted price-tag">&euro; ${game.price}</small>
                        </div>
                    </div>
                </div>
            </div>
        `; 
        
        page_body.innerHTML += template;
    }
}