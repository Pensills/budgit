import React from 'react';
import IncomeTax from '../Components/IncomeTax';
import PropertyTax from '../Components/PropertyTax';

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
      <PropertyTax />
      </center>
      </div>
    )
    
};

export default Home;