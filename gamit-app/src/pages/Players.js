import React from "react";

function getPlayers() {
    let players = [
      [
        {
          url: "https://picsum.photos/200?random=3",
          web:"https://www.premierleague.com/players/4503/Eden-Hazard/overview",
          name: "Eden Hazardd",
          sport: "Soccer",
          description:"looking for team"
        },
        {
          url: "https://picsum.photos/200?random=1",
          web:"https://www.pro-football-reference.com/players/B/BradTo00.htm",
          name: "Tom Braddie",
          sport: "Footabll",
          description:"looking for team"
  
        },
        {
          url: "https://picsum.photos/200?random=2",
          web:"https://www.cricbuzz.com/profiles/265/ms-dhoni",
          name: "MS Dhonii",
          sport: "Cricket",
          description:"looking for team"
        },
      ],
      [
        {
          url: "https://picsum.photos/200?random=4",
          web:"https://www.atptour.com/en/players/roger-federer/f324/overview",
          name: "Roger rFedererr",
          sport: "Tennis",
          description:"looking for team"
        },
        {
          url: "https://picsum.photos/200?random=5",
          web:"https://www.mlb.com/player/buster-posey-457763",
          name: "Buster Pohseh",
          sport: "BaseBall",
          description:"looking for team"
        },
        {
          url: "https://picsum.photos/200?random=6",
          web:"https://www.nba.com/player/201939",
          name: "Steph Currie",
          sport: "Basketball",
          description:"looking for team"
  
        }
      ]
    ] 
  
  players.map((player, index) => {
    return (
      <div key={Math.random()} className="home-profiles">
        {player.map((play, index) => {
          return (
            <div className="card" onClick={() => window.location.href = play.web}>
              <img src={play.url} alt="player" />
              <div className="home-profile-info">
                <h3>{play.name}</h3>
                <p>{play.sport}</p>
                <p> ⭐ ⭐ ⭐ ⭐ ⭐ </p>
                <p>{play.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    )
  })
}
  export default getPlayers;