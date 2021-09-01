const INPUT = document.getElementById("input");
const SEARCH_BUTTON = document.getElementById("searchButton");
const ROT_BTN = document.getElementById("rotBtn");
const DISPLAY = document.getElementById("display");

const API_KEY = "RGAPI-106f35aa-05ac-4990-9585-59ef4917066f";
const ROT_URL =
  "https://la2.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=";
const DATA_URL =
  "http://ddragon.leagueoflegends.com/cdn/9.3.1/data/en_US/champion.json";

const ul = document.createElement("ul");
const CHAMPION_ROTID = document.createElement("li");

// Handles a get to the api and gets the id of the champions in rotation
const handleClickRot = async () => {
  try {
    const respose = await fetch(`${ROT_URL}${API_KEY}`);

    const data = await respose.json();
    CHAMPION_ROTID.innerHTML = data.freeChampionIds;

    console.log(CHAMPION_ROTID);
  } catch (error) {
    console.error(error);
  }
};

// Not working YET
const searchName = () => {
  fetch(DATA_URL)
    .then((res) => res.json())
    .then((response) => {
      let dataList = response.data;

      for (let i in dataList) {
        for (let e in CHAMPION_ROTID) {
          if (dataList[i].key === CHAMPION_ROTID[e])
            console.log(ChampionList[i].id);
        }
      }
    });
};

ROT_BTN.onclick = handleClickRot;
SEARCH_BUTTON.onclick = searchName;

// ------------------------ WORKS CALLBACK HELL .THEN ---------------------------------------
// const handleClickRot = () => {
//     fetch(
//       "https://la2.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=" +
//         API_KEY
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         CHAMPION_ROTID.innerHTML = data.freeChampionIds;

//         console.log(CHAMPION_ROTID);
//       })
//       .catch((error) => console.error(error));
//   };
