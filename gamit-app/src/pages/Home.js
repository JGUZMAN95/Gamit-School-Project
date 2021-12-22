import React from 'react';
import './Search.css';
import Footer from './Footer'
import getPlayers from './Players';

const Home = () => {
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

  return (
    <div style={{
      height: '100%',
      backgroundColor: '#5771a3',
      color: 'white',
      textAlign: 'center'

    }}
    >
      <h1 style={{
        padding: '40px 0px 0px 0px',
        color: 'white',
        textAlign: 'center'
      }}> Looking to Find a Player?</h1> <br />

      <p>Gamit is designed to take the pain out of finding and playing sports </p> <br />
      <p>So whether you're looking for a new weekly game, or people to connect for sports... we've got you covered</p><br />
      <p
      style={{marginTop: 'auto'}}>
        <div id="cover">
        <form method="get" action="">
          <div class="tb">
            <div class="td"><input type="text" placeholder="Search" required /></div>
            <div class="td" id="s-cover">
            
            </div>
          </div>
          
        </form>
        
      </div>
                <div style={{
                      textAlign: 'center',
                      fontSize: '130%',
                      whiteSpace:'nowrap',
                      width: '100%',
                      color: 'white',
                      margin:20


                  }}className="item">
                  <div
                    style={{
                        display: 'flex',
                        textAlign: 'left',
                        color: 'white',
                        fontSize: '160%',
                        alignItems: 'left',
                        justifyContent: 'left',

                    }}> 
                    <details>
                      <summary>Filters:</summary>
                      <p style={{
                          color: 'white',
                          fontSize: '100%',
                          margin:20

                      }}>
                          <label for="startTime"> Start Time: </label>
                          <input
                              style={{
                                  fontSize: '100%',
                                  backgroundColor: 'white',
                                  color: 'black',
                                  margin: 20
                              }}
                              type="time" id="startTime" name="startTime" >
                          </input>

                          <label for="endTime">End Time: </label>
                          <input
                              style={{
                                  margin: 20,
                                fontSize: '100%',
                                  backgroundColor: 'white',
                                  color: 'black'
                              }}
                              type="time" id="startTime" name="startTime" >
                          </input>
                      </p>
                      <div
                      style={{
                      alignItems: 'center',
                      color: 'white',
                      display: 'flex',
                      margin: 20
                  }}>Sport:
                      <select style={{
                          margin:20
                      }}>
                          <option value="Soccer">Soccer</option>
                          <option value="Football">Football(American)</option>
                          <option  value="Baseball">Baseball</option>
                          <option value="Basketball">Basketball</option>
                          <option selected value="select">select</option>
                      </select>

                      <p style={{
                          alignItems: 'center',
                          color: 'white',
                          display: 'flex',
                          margin: 20
                          
                      }}>Location:</p>
                      <p style={{
                        margin: 20,
                        alignItems: 'center',
                      }}>
                        <input type="text" style={{
                          all: 'initial',
                          backgroundColor: 'white',
                        }}></input></p>
                      <br/>
                      </div>

                      <div
                          style={{
                          color: 'white',
                          alignItems: 'center',
                          display: 'flex',
                          margin: 20,
                      }}
                      >Skill Level:
                          <select style={{
                              margin:20,
                          }}>

                              <option value="ammeture">Ammeture</option>
                              <option value="intermediate">Intermediate</option>
                              <option value="pro">Pro</option>
                              <option selected value="select">select</option>
                          </select>

                          <p style={{
                              margin: 20,
                              color: 'white',
                              display: 'flex',
                          }}>Distance:</p>

                          <input style={{
                              fontSize: '100%',
                              width: '3rem',
                              font: '1rem' ,
                              backgroundColor: 'white',
                              color: 'black',
                              textAlign: 'center',
                              marginRight:20
                          }}
                                 type="number" id="milesAway" name="milesAway" min="0" placeholder="0" ></input>  miles<br/>
                      </div>
                      <div
                          style={{
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center'
                          }}
                      >
                          <button
                              style={{
                                  margin: 5,
                                  backgroundImage: "linear-gradient(LightSlateGray, white)",
                                  width: '150px',
                                  height: '100%',
                                  fontSize: '160%',
                                  color: 'black',
                                  alignItems: 'center'
                              }}
                          >Search</button>
                      </div>
                  </details>
                </div>
              </div>
      </p> <br/>
      <div>
        <h3>Posts Near You:</h3>
      </div>

      {players.map((player, index) => {
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
        })}
      <br/>

      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;