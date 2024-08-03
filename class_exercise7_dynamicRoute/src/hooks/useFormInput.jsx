import { useState } from "react";

export function useFormInput(initialValue){
    const [value, setValue] = useState(initialValue);

    function handleValueChange(e){
        setValue(e);
    }

    const reset=() =>{
        setValue('');
    }

    const inputProps ={
        value: value,
        onChange: handleValueChange
    };

    return[inputProps, reset];
}