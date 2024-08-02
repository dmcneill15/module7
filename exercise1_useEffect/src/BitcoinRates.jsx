import { useState, useEffect } from "react";

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

export function BitcoinRates() {
    const [currency, setCurrency] = useState(currencies[0]);
    const [bitCoinPrice, setBitCoinPrice] = useState(0);

    useEffect(()=>{
        let ignore = false; //flag used to ignore fetch results that are no longer valid
        
        fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=' + currency)
        .then(response => response.json())
        .then(json => { 
            if(!ignore) {
                setBitCoinPrice(json.bitcoin[currency.toLowerCase()])
            } //if ignore is false, get the results
            });

        //cleanup function to run when unmounted or when currency changes (before useEffect is run again)
        return() =>{
            ignore = true;  //ignore the fetch results because they are now invalid
            console.log('Cleaned up');
        }
    }, [currency]); //include currency here to cause the effect to run eveytime the currentcy changes


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

// fetch URL: https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}
    /*/ returns: {"bitcoin":
                    {
                      "usd":68626,
                      "aud":12345,
                      "nzd":12345
                    }
                  } 
        To access this will do json.bitcoin[usd] will return 68626
    */