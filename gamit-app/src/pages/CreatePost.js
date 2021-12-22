import React from 'react';
import Footer from './Footer'

const CreatePost = () => {
  return (
    <><div
      style={{
        alignItems: 'center',
        textAlign: 'left',
        color: 'white',
        fontSize: '160%',
        margin:20

      }}
    >
      <h1
      style={{
        color: 'white',
        fontSize: '160%',
      }}>Create Post</h1><br />

      <div> Sport:
      <select style={{
        marginBottom: -20,
        margin:20
      }}
      >
        <option value="Soccer">Soccer</option>
        <option value="Football">Football(American)</option>
        <option value="Baseball">Baseball</option>
        <option value="Basketball">Basketball</option>
        <option selected value="select">select</option>
      </select> Location:     
        <input type="text" style={{
          all: 'initial',
          backgroundColor: 'white',
          margin: 20
        }}></input>
      </div>
      <p><label for="start">Game Day:</label>
      <input
          style={{
          margin: 20,
          fontSize: '100%',
          backgroundColor: 'white',
          color: 'black'
        }} type="date" id="gameDay" name="gameDay"
       min="2018-01-01" max="2050-12-31"></input></p>
      <p>
        <label for="startTime">Start Time: </label>
        <input 
          style={{
          fontSize: '100%',
          backgroundColor: 'white',
          color: 'black'
        }} 
        type="time" id="startTime" name="startTime" >
        </input> 
        <label for="endTime"> End Time: </label>
        <input
        style={{
          fontSize: '100%',
          backgroundColor: 'white',
          color: 'black'
        }} 
        type="time" id="endTime" name="EndTime" >
        </input>
        </p>
        <p>
        <label for="inNeedOfPlayer">Players Wanted:</label>
        <input style={{
          fontSize: '100%',
          width: '3rem',
          font: '1rem' ,
          backgroundColor: 'white',
          color: 'black',
          textAlign: 'center'
          }}
        type="number" id="inNeedOfPlayer" name="inNeedOfPlayer" min="0" placeholder="0" ></input>
        </p>
        <p>Skill Level: 
          <select style={{
            margin: 20,
            }}>
            <option value="ammeture">Ammeture</option>
            <option value="intermediate">Intermediate</option>
            <option value="pro">Pro</option>
            <option selected value="select">select</option>
          </select></p>
    </div>
    <div>
    <button 
        style={{

          height:"100%",
          width:"125px",
          fontSize: "160%",
          backgroundImage: "linear-gradient(LightSlateGray, white)",
          color: 'black' ,
          marginLeft: '47%'
              }}
    >Submit</button><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />


    </div>
    <div
              style={{
                textAlign: 'center',

                

           }}>
              <Footer/>
              </div>
    </>
  );
};

export default CreatePost;