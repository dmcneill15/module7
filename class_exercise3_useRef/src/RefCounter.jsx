import { useState, useEffect, useRef } from "react";

export function RefCounter() {

    let countRef = useRef(0); // one counter stored in a ref
    let count = 0; // one counter stored in a normal variable
    const [countState, setCountState] = useState(0);    //counter is stored in a state variable

    function handleClick() {
        // update countRef object when clicking, via current property
        countRef.current = countRef.current + 1;
        count = count + 1; // update count variable when clicking
        // both counts should be the same value
        alert(`You clicked ${countRef.current} (${count}) times!`);
    }

    return (
        <div className="RefCounter componentBox">
            <button onClick={handleClick}>
                REF COUNTER: Click me!
                {/* try rendering {count} and {countRef.current} here */}
            </button>
            <p>Ref counter: {countRef.current}</p>  {/*This won't show update as a rerender has not been triggered*/}
            <p>Variable counter: {count}</p>        {/*This won't show update as a rerender has not been triggered*/}

            <button onClick={()=> setCountState(countState + 1)}>
                STATE COUNTER: Click me!
                {/* try rendering {count} and {countRef.current} here */}
            </button>
            <p>State counter: {countState}</p>  
            {/*countState will update everytime the button is clicked. 
                This will trigger a rerender of the component. 
                At this point ref counter display will update because the rerender will fetch the new/remembered value of countRef
                countRef is not reset because the value in there has been stored.
                The variable counter is reset to zero on the rerender of RefCounter() component as the value is never stored anywhere*/}
        </div>
    );
}

// Any variables rendered inside the returned JSX should be
// part of STATE, so that updates trigger re-rendering and keep
// everything in sync. Updates to refs and normal variables DO NOT
// trigger re-renders, so the updated count values don’t show.