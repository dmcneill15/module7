import { useState, useEffect } from "react";

// Renders a digital time that updates every second
export function Clock() {
    const [date, setDate] = useState(new Date());

    useEffect(() => { // first arg is usually an arrow function
        setInterval(() => tick(), 1000);
        console.log('Clock component mounted');
    }, []); // second arg is an array of dependencies

    const tick = () => {
        setDate(new Date());
        console.log('tick'); // track the effect frequency
    };

    return (
        <div className="Clock">
            <h3>Digital Clock</h3>
            {date.toLocaleTimeString()}
        </div>
    );
}
// ++ Try removing the dependency array from useEffect
// and notice the difference in ‘tick’ log messages - 'Clock component mounted' is printed on every tick/ render
// ++ Why do the console messages appear double? - we are using StrictMode

export function ClockDisplay() {

    const [showClock, setShowClock] = useState(false);

    const toggleClock = () => {
        setShowClock(!showClock);
    }

    return (
        <div className="ClockDisplay componentBox">
            {showClock && <Clock />} {/* same as {showClock ? <Clock /> : null} */}
            <button onClick={toggleClock}>Toggle Clock</button>
        </div>
    )
}
// ++ Add both components into Clock.jsx and render
// <ClockDisplay /> from App.jsx

// ++ Watch the console when the Clock is removed -
// does the ticking still continue? - yes. Toggleclock has not stopped the interval timer, just not displaying the Clock component
