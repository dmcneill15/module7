import { useState, useEffect } from "react";

export function useData(url) {
    const [data, setData] = useState(null);

    useEffect(() => {

        if (url) {
            let ignore = false; //flag used to ignore fetch results

            fetch(url)
                .then(response => response.json())
                .then(json => {
                    if (!ignore) {
                        setData(json)
                    } //if ignore is false, get the results
                });

            //cleanup function to run when unmounted or when currency changes
            return () => {
                ignore = true;  //ignore the fetch results because they are now invalid
            }
        }


    }, [url]); //on a change in the url, want the useEffect to run

    return data;    //return the fetched data

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
}
