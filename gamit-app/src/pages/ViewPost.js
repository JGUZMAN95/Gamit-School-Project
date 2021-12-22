    import React from 'react';
    import Footer from './Footer'

    const ViewPost = () => {
      return (

          <>
              <div style={{
                  textAlign: 'center',
                  fontSize: '130%',
                  whiteSpace:'nowrap',
                  width: '100%',
                  color: 'white',
                  margin:20


              }}className="item">
                  <h1>Find A Game </h1>
              </div>
              <div
                  style={{
                      display: 'flex',
                      textAlign: 'left',
                      color: 'white',
                      fontSize: '160%',
                      alignItems: 'left',
                      justifyContent: 'left',

                  }}>


              <div>

                  
              <div><p>
                  <hr style={{
                      color: 'white',
                      maxWidth: '100%',
                      width: '100vw',
                      height: '4px',
                      backgroundColor: 'white',
                      padding: '5,0,5,0',
                  }} ></hr>


              </p>
              </div>

              <div style={{
                  display: 'flex',
                  color: 'white',
                  listStyle:'none'

              }}>
                  <div>
                      <ul className="list-unstyled">
                          <li>PLACE MAP HERE</li>
                      </ul>
                  </div>
                  <hr style={{
                      color: 'white',
                      width: '4px',
                      backgroundColor: 'white',
                  }}></hr>
                      <div
                      style={{
                        color: 'white',
                        margin:20,
                        textSizeAdjust: '100%',

                    }}>
                          <p>Games Found</p>
                         <p>
                         Players Here
                          </p>
                      </div>
              </div>
              </div>
              </div>
              
              <div
              style={{
                textAlign: 'center',

                

           }}>
              <Footer/>
              </div></>
    );
    };
    export default ViewPost;






