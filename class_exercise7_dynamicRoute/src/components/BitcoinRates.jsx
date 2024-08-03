import { useState, useEffect } from "react";
import { useDataReduced } from "../hooks/useDataReduced";
import {useEmojiContext} from '../context/EmojiContext';

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

export function BitcoinRates() {
    const [currency, setCurrency] = useState(currencies[0]);
    const [bitCoinPrice, setBitCoinPrice] = useState(0);

    //useDataReduced will be called on any state change of currency
    const {data, error} = useDataReduced('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=' + currency.toLowerCase());    

    //changes in the data (once useDataReduced fetch is completed), will trigger useEffect
    useEffect(()=>{
        if(data && data.bitcoin){
            setBitCoinPrice(data.bitcoin[currency.toLowerCase()]);
        };
        console.log(error); //testing error return from useDataReduced
    }, [currency, data]);

    //use the context to get the current emoji
    const{currentEmoji} = useEmojiContext();

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
            <p>Current Emoji updating from BitcoinRates: {currentEmoji}</p>
        </div>
    )
}

    //Does this mean that data is being fetched constantly, but the display is only being updated when the currency changes?
    //No. useData hook will run when there is a change in currency because it uses a useEffect hook