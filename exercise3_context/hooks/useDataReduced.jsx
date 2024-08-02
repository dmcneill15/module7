import { useState, useEffect } from "react";
import axios from 'axios' // first do 'npm install axios' - alternative to fetch with more flexibility
import { useReducer } from "react";

function reducer(dataResults, action) {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return { loading: false, data: action.payload, error: 'None' }
        case 'FETCH_ERROR':
            return { loading: false, data: [], error: action.payload }
        default:
            return { ...dataResults, loading: false }
    }
}

//custom hook #2
export function useDataReduced(url) {

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
