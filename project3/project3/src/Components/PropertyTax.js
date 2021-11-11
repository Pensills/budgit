import axios from 'axios';
import { useState } from 'react';


function PropertyTax() {
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const states = [
        "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
    ];
    const [state, setState] = useState(states[0]);
    const [propertytax, setPropertytax] = useState(0);

    const calculatePropertyTax = () => {
        var options = {
            method: 'GET',
            url: 'https://api.gateway.attomdata.com/propertyapi/v1.0.0/property/basicprofile?address1='+address1+'&address2='+address2 + ', ' + state,
            headers: {
                apikey : 'c5df2c10944555f75c5e0daf59d73a68'
            },
            data: {
                address1 : address1,
                address2 : address2
            }
        };
        axios.request(options).then((response) => {
            console.log(response.data);
            setPropertytax(response.data.property[0].assessment.tax.taxAmt);
        })
    }
    return (
        <div>
            <h1>Property Tax Calculator</h1>
            <div>
            <label>Address1(Street):</label>
            <input type="text" value={address1} onChange={e => setAddress1(e.target.value)} />
            </div>
            <div>
            <label>Address2(City):</label>
            <input type="text" value={address2} onChange={e => setAddress2(e.target.value)} />
            </div>
            <div>
            <label>State:</label>
                <select value={state} onChange={(e) => setState(e.target.value)}>
                    {states.map((state) => {
                        return <option key={state} value={state}>{state}</option>
                    })}
                </select>
            </div>
            <button onClick={calculatePropertyTax}>Calculate</button>
            <div>
                <label>Property Tax: {propertytax}</label>

            </div>
        </div>
    )
}

export default PropertyTax;