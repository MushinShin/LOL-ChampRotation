const input = document.getElementById("input");
const searchButton = document.getElementById("searchButton");
const display = document.getElementById("display");
const rotBtn = document.getElementById("rotBtn");

rotBtn.onclick = handleClickRot;
// input.onkeyup = handleEnter;

const ul = document.createElement("ul");
const championRotID = document.createElement('li');
// const champion = document.createElement('li');
// const squareChamp = document.createElement('li');


function handleClickRot() {
    fetch("https://la2.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-6d530b52-bd50-4b69-9e10-ac48af12d857")
        .then((response) => response.json())
        .then((data) => {
            championRotID.innerHTML = data.freeChampionIds;

            console.log(championRotID);
        });
}

