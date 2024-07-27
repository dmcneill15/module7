import { useState, useEffect } from "react";
import { useData } from "../hooks/useData";

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

export function BitcoinRates() {
    const [currency, setCurrency] = useState(currencies[0]);
    const [bitCoinPrice, setBitCoinPrice] = useState(0);

    
    const data = useData('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=' + currency.toLowerCase());    

    //just doing this will cause an infinte loop. State is being updated in the render method. Rather put it in a useEffect so that it is only updated on changes of the url
    //get the bitcoin price out of the data
/*    if (data) {
        setBitCoinPrice(data.bitcoin[currency.toLowerCase()]);
    }
*/

    useEffect(()=>{
        if(data){
            setBitCoinPrice(data.bitcoin[currency.toLowerCase()]);
        };
    }, [currency, data]);

    //Does this mean that data is being fetched constantly, but the display is only being updated when the currency changes?
    //No. useData hook is only run when there is a change in currency because it uses a useEffect hook


    const options = currencies.map(curr => <option value={curr} key={curr}>{curr}</option>);
    return (
        <div className="BitcoinRates componentBox">
            <h3>Bitcoin Exchange Rate</h3>
            <label>Choose currency:
                <select value={currency} onChange={e => setCurrency(e.target.value)}>
                    {options}
                </select>
            </label>
            <p>Current Bitcoin Price: {bitCoinPrice}</p>
        </div>
    )
}