import React from 'react';
import IncomeTax from '../IncomeTax';

// home page initially displayed


const Home = () => {

    const styleObj = {
        fontSize: 21,
        textAlign: "left",
        padding: 10,
    }
    return(
      <div>
        <center> 
      <IncomeTax />
      </center>
      </div>
    )
    
};

export default Home;