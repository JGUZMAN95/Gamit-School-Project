import React from "react";

function Footer() {
  return (
    <div style = {{
      color:'white',
      backgroundColor:'#5b646c',
      paddingTop:'3em',
      position:'relative',
      bottom:'100%',
      width:'100'
    }}>
      <div className="container">
        <div className="row">
          <div className="col">
            <ui className="list-unstyled">
              <li>Privacy</li>
              <li>Terms of Use</li>
              <li>GUD STUFF</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Gamit | All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;