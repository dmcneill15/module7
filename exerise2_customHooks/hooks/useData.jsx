import { useState, useEffect } from "react";
import axios from 'axios' // first do 'npm install axios' - alternative to fetch
import { useReducer } from "react";

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
        To access this will do json.bitcoin[usd] and will return 68626
    */
}

function reducer(dataResults, action) {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return { loading: false, data: action.payload, error: '' }
        case 'FETCH_ERROR':
            return { loading: false, data: [], error: action.payload }
        default:
            return { ...dataResults, loading: false }
    }
}

export function useDataReduced(url) {
    //const [data, setData] = useState(null);

    const [dataResults, dispatch] = useReducer(reducer, {
        loading: true,
        data: [],
        error: ''
    });

    useEffect(() => {
        if (url) {
            let ignore = false; //flag used to ignore fetch results

            axios.get(url)
                .then(response => {
                    dispatch({ type: "FETCH_SUCCESS", payload: response.data })
                })
                .catch(error => {
                    dispatch({ type: "FETCH_ERROR", payload: error.message })
                })
            //cleanup function to run when unmounted or when currency changes
            return () => {
                ignore = true;  //ignore the fetch results because they are now invalid
            }
        }
    }, [url]);

    return dataResults;    //return the fetched data
}

